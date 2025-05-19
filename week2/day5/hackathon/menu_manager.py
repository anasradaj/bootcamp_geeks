import psycopg2

# Database connection details
DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "Anas/1996."
HOST = "localhost"

class MenuManager:
    @classmethod
    def _connect(cls):
        """Connects to the PostgreSQL database."""
        try:
            conn = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, client_encoding='LATIN1')
            return conn
        except psycopg2.Error as e:
            print(f"Error connecting to database: {e}")
            return None

    @classmethod
    def get_by_name(cls, item_name):
        """Returns a single item from the Menu_Items table by its name."""
        from menu_item import MenuItem
        conn = cls._connect()
        if conn:
            cursor = conn.cursor()
            try:
                query = "SELECT item_id, item_name, item_price, photo_url, category, description FROM Menu_Items WHERE item_name = %s;"
                cursor.execute(query, (item_name,))
                result = cursor.fetchone()
                if result:
                    return MenuItem(result[1], result[2], result[0], result[3], result[4], result[5])
                else:
                    return None
            except psycopg2.Error as e:
                print(f"Error fetching item by name '{item_name}': {e}")
                return None
            finally:
                cursor.close()
                conn.close()
        return None

    @classmethod
    def all_items(cls):
        """Returns a list of all items from the Menu_Items table."""
        from menu_item import MenuItem
        conn = cls._connect()
        if conn:
            cursor = conn.cursor()
            items = []
            try:
                query = "SELECT item_id, item_name, item_price, photo_url, category, description FROM Menu_Items;"
                cursor.execute(query)
                results = cursor.fetchall()
                for row in results:
                    items.append(MenuItem(row[1], row[2], row[0], row[3], row[4], row[5]))
                return items
            except psycopg2.Error as e:
                print(f"Error fetching all items: {e}")
                return []
            finally:
                cursor.close()
                conn.close()
        return []