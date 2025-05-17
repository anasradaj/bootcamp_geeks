from flask import Flask, request, jsonify
from menu_manager import MenuManager
from menu_item import MenuItem

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Restaurant Menu API!"

# Get all menu items
@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuManager.all_items()
    return jsonify([{
        'id': item.item_id,
        'name': item.item_name,
        'price': item.item_price
    } for item in items])

# Get a single item by name
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

# Add a new item
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

# Update an item
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

# Delete an item
@app.route('/menu/<name>', methods=['DELETE'])
def delete_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({'error': 'Item not found'}), 404
    if item.delete():
        return jsonify({'message': 'Item deleted'})
    return jsonify({'error': 'Failed to delete item'}), 500

if __name__ == '__main__':
    app.run(debug=True)