import os
from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from menu_manager import MenuManager
from menu_item import MenuItem
from functools import wraps
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

# set directory for static files
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = BASE_DIR  
UPLOAD_FOLDER = os.path.join(STATIC_DIR, 'static', 'uploads')

app = Flask(__name__, static_folder=os.path.join(STATIC_DIR, 'static'))
app.secret_key = 'arandomsecretkeyshuut'

# config of the upload folder
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'jfif'}

# Database connection details
DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "Anas/1996."
HOST = "localhost"

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def get_db_connection():
    return psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, client_encoding='LATIN1')

def get_user_by_username(username):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, username, password FROM users WHERE username = %s", (username,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    return user

def create_user(username, password, first_name, last_name):
    conn = get_db_connection()
    cur = conn.cursor()
    hashed = generate_password_hash(password)
    try:
        cur.execute("INSERT INTO users (username, password, first_name, last_name) VALUES (%s, %s, %s, %s)", (username, hashed, first_name, last_name))
        conn.commit()
        return True
    except Exception as e:
        conn.rollback()
        return False
    finally:
        cur.close()
        conn.close()

def save_account_request(username, password, first_name, last_name):
    conn = get_db_connection()
    cur = conn.cursor()
    hashed = generate_password_hash(password)
    try:
        cur.execute("INSERT INTO account_requests (username, password, first_name, last_name) VALUES (%s, %s, %s, %s)", (username, hashed, first_name, last_name))
        conn.commit()
        return True
    except Exception as e:
        conn.rollback()
        return False
    finally:
        cur.close()
        conn.close()

def get_account_requests(include_history=False):
    conn = get_db_connection()
    cur = conn.cursor()
    if include_history:
        cur.execute("SELECT id, username, password, requested_at, first_name, last_name, status, decision_at FROM account_requests ORDER BY requested_at DESC")
    else:
        cur.execute("SELECT id, username, password, requested_at, first_name, last_name FROM account_requests WHERE status = 'pending' ORDER BY requested_at DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    if include_history:
        return [
            {'id': row[0], 'username': row[1], 'password': row[2], 'requested_at': row[3], 'first_name': row[4], 'last_name': row[5], 'status': row[6], 'decision_at': row[7]} for row in rows
        ]
    else:
        return [
            {'id': row[0], 'username': row[1], 'password': row[2], 'requested_at': row[3], 'first_name': row[4], 'last_name': row[5]} for row in rows
        ]

def delete_account_request(request_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM account_requests WHERE id = %s", (request_id,))
    conn.commit()
    cur.close()
    conn.close()

@app.route('/register', methods=['GET', 'POST'])
def register():
    error = None
    success = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        if not username or not password or not first_name or not last_name:
            error = 'All fields are required.'
        elif get_user_by_username(username):
            error = 'Username already exists.'
        else:
            if save_account_request(username, password, first_name, last_name):
                success = 'Your account request has been submitted. An admin will review it.'
            else:
                error = 'Failed to submit account request.'
    return render_template('login.html', error=error, register=True, success=success)

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = get_user_by_username(username)
        if user and check_password_hash(user[2], password):
            # Fetch must_change_password flag
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute("SELECT must_change_password FROM users WHERE username = %s", (username,))
            row = cur.fetchone()
            cur.close()
            conn.close()
            session['logged_in'] = True
            session['username'] = username
            if row and row[0]:
                session['must_change_password'] = True
                return redirect(url_for('profile', force_change=1))
            else:
                session.pop('must_change_password', None)
                return redirect(url_for('menu_page'))
        else:
            error = 'Invalid username or password.'
    return render_template('login.html', error=error, register=False)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('login'))

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('logged_in'):
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def home():
    items = MenuManager.all_items()
    # # Debug: print all photo_url values and file existence
    # for item in items:
    #     if item.photo_url:
    #         file_path = os.path.join(app.static_folder, 'uploads', item.photo_url)
    #         exists = os.path.isfile(file_path)
    #         print(f"Item: {item.item_name}, photo_url: {item.photo_url}, exists: {exists}, path: {file_path}")
    #         if not exists:
    #             item.photo_url = None
    #     else:
    #         print(f"Item: {item.item_name}, photo_url: None")
    return render_template('home.html', items=items)


@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuManager.all_items()
    return jsonify([{
        'id': item.item_id,
        'name': item.item_name,
        'price': item.item_price
    } for item in items])


@app.route('/menu/<name>', methods=['GET'])
def get_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({
            'id': item.item_id,
            'name': item.item_name,
            'price': item.item_price
        })
    return jsonify({'error': 'Item not found'}), 404


@app.route('/menu', methods=['POST'])
def add_item():
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')
    if not name or price is None:
        return jsonify({'error': 'Name and price required'}), 400
    item = MenuItem(name, price)
    if item.save():
        return jsonify({'message': 'Item added', 'id': item.item_id}), 201
    return jsonify({'error': 'Failed to add item'}), 500


@app.route('/menu/<name>', methods=['PUT'])
def update_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({'error': 'Item not found'}), 404
    data = request.get_json()
    new_name = data.get('name', item.item_name)
    new_price = data.get('price', item.item_price)
    if item.update(new_name, new_price):
        return jsonify({'message': 'Item updated'})
    return jsonify({'error': 'Failed to update item'}), 500


@app.route('/menu/<name>', methods=['DELETE'])
def delete_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({'error': 'Item not found'}), 404
    if item.delete():
        return jsonify({'message': 'Item deleted'})
    return jsonify({'error': 'Failed to delete item'}), 500

@app.route('/menu_page')
@login_required
def menu_page():
    items = MenuManager.all_items()
    return render_template('menu.html', items=items)

@app.route('/add_item', methods=['POST'])
@login_required
def add_item_web():
    name = request.form.get('name')
    price = request.form.get('price')
    category = request.form.get('category')
    description = request.form.get('description')
    photo = request.files.get('photo')
    photo_url = None
    if photo and allowed_file(photo.filename):
        filename = secure_filename(photo.filename)
        photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        photo_url = filename
    if not name or not price:
        return redirect(url_for('menu_page'))
    from menu_item import MenuItem
    item = MenuItem(name, int(price), photo_url=photo_url, category=category, description=description)
    item.save(photo_url=photo_url)
    return redirect(url_for('menu_page'))

@app.route('/update_item', methods=['POST'])
@login_required
def update_item_web():
    item_id = request.form.get('id')
    name = request.form.get('name')
    price = request.form.get('price')
    category = request.form.get('category')
    description = request.form.get('description')
    photo = request.files.get('photo')
    photo_url = None
    if photo and allowed_file(photo.filename):
        filename = secure_filename(photo.filename)
        photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        photo_url = filename
    from menu_manager import MenuManager
    items = MenuManager.all_items()
    item = next((i for i in items if str(i.item_id) == str(item_id)), None)
    if item:
        item.update(name, int(price), new_category=category, new_description=description, new_photo_url=photo_url)
    return redirect(url_for('menu_page'))

@app.route('/delete_item', methods=['POST'])
@login_required
def delete_item_web():
    item_id = request.form.get('id')
    from menu_manager import MenuManager
    items = MenuManager.all_items()
    item = next((i for i in items if str(i.item_id) == str(item_id)), None)
    if item:
        item.delete()
    return redirect(url_for('menu_page'))

@app.route('/admin/requests')
@login_required
def admin_requests():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    requests = get_account_requests()
    return render_template('admin_requests.html', requests=requests)

@app.route('/admin/requests/history')
@login_required
def admin_requests_history():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    requests = get_account_requests(include_history=True)
    return render_template('admin_requests_history.html', requests=requests)

@app.route('/admin/approve_request', methods=['POST'])
@login_required
def approve_request():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    req_id = request.form.get('id')
    # Get the request info
    requests = get_account_requests(include_history=True)
    req = next((r for r in requests if str(r['id']) == str(req_id)), None)
    if req:
        create_user(req['username'], req['password'], req['first_name'], req['last_name'])
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("UPDATE account_requests SET status='approved', decision_at=NOW() WHERE id=%s", (req_id,))
        conn.commit()
        cur.close()
        conn.close()
    return redirect(url_for('admin_requests'))

@app.route('/admin/reject_request', methods=['POST'])
@login_required
def reject_request():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    req_id = request.form.get('id')
    delete_account_request(req_id)
    return redirect(url_for('admin_requests'))

@app.route('/admin/users')
@login_required
def admin_users():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, username, first_name, last_name FROM users ORDER BY id")
    users = [
        {'id': row[0], 'username': row[1], 'first_name': row[2], 'last_name': row[3]} for row in cur.fetchall()
    ]
    cur.close()
    conn.close()
    return render_template('admin_users.html', users=users)

@app.route('/admin/delete_user', methods=['POST'])
@login_required
def admin_delete_user():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    user_id = request.form.get('id')
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM users WHERE id = %s", (user_id,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for('admin_users'))

@app.route('/admin/reset_password', methods=['POST'])
@login_required
def admin_reset_password():
    if session.get('username') != 'admin':
        return redirect(url_for('menu_page'))
    user_id = request.form.get('id')
    new_password = 'user123'  # Default reset password
    hashed = generate_password_hash(new_password)
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("UPDATE users SET password = %s, must_change_password = TRUE WHERE id = %s", (hashed, user_id))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for('admin_users'))

@app.route('/profile', methods=['GET', 'POST'])
@login_required
def profile():
    username = session.get('username')
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, username, first_name, last_name, password, must_change_password FROM users WHERE username = %s", (username,))
    user_row = cur.fetchone()
    error = None
    message = None
    force_change = request.args.get('force_change')
    if not user_row:
        cur.close()
        conn.close()
        return redirect(url_for('login'))
    user = {'id': user_row[0], 'username': user_row[1], 'first_name': user_row[2], 'last_name': user_row[3], 'password': user_row[4], 'must_change_password': user_row[5]}
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        current_password = request.form.get('current_password')
        new_password = request.form.get('new_password')
        # Update names
        cur.execute("UPDATE users SET first_name=%s, last_name=%s WHERE id=%s", (first_name, last_name, user['id']))
        # Change password if requested
        if current_password and new_password:
            from werkzeug.security import check_password_hash, generate_password_hash
            if check_password_hash(user['password'], current_password):
                hashed = generate_password_hash(new_password)
                cur.execute("UPDATE users SET password=%s, must_change_password=FALSE WHERE id=%s", (hashed, user['id']))
                message = 'Profile and password updated.'
                session.pop('must_change_password', None)
            else:
                error = 'Current password is incorrect.'
        else:
            message = 'Profile updated.'
        conn.commit()
        # Refresh user info
        cur.execute("SELECT id, username, first_name, last_name, password, must_change_password FROM users WHERE username = %s", (username,))
        user_row = cur.fetchone()
        user = {'id': user_row[0], 'username': user_row[1], 'first_name': user_row[2], 'last_name': user_row[3], 'password': user_row[4], 'must_change_password': user_row[5]}
    cur.close()
    conn.close()
    return render_template('profile.html', user=user, error=error, message=message, force_change=force_change)

if __name__ == '__main__':
    app.run(debug=True)