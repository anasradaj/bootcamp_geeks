import psycopg2

# Database connection details
DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "Anas/1996."  
HOST = "localhost"


class MenuItem:
    def __init__(self, name, price=0, item_id=None):
        self.item_id = item_id
        self.item_name = name
        self.item_price = price

    def __str__(self):
        return f"ID: {self.item_id}, Name: {self.item_name}, Price: {self.item_price}"

    def _connect(self):
        """Connects to the PostgreSQL database."""
        try:
            conn = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, client_encoding= 'LATIN1')
            return conn
        except psycopg2.Error as e:
            print(f"Error connecting to database: {e}")
            return None

    def save(self):
        """Saves the menu item to the database."""
        conn = self._connect()
        if conn:
            cursor = conn.cursor()
            try:
                if self.item_id is None:
                    query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id;"
                    cursor.execute(query, (self.item_name, self.item_price))
                    self.item_id = cursor.fetchone()[0]
                    conn.commit()
                    print(f"Item '{self.item_name}' saved with ID: {self.item_id}")
                    return True
                else:
                    query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s;"
                    cursor.execute(query, (self.item_name, self.item_price, self.item_id))
                    conn.commit()
                    print(f"Item with ID {self.item_id} updated.")
                    return True
            except psycopg2.Error as e:
                conn.rollback()
                print(f"Error saving item '{self.item_name}': {e}")
                return False
            finally:
                cursor.close()
                conn.close()
        return False

    def delete(self):
        """Deletes the menu item from the database."""
        conn = self._connect()
        if conn and self.item_id is not None:
            cursor = conn.cursor()
            try:
                query = "DELETE FROM Menu_Items WHERE item_id = %s;"
                cursor.execute(query, (self.item_id,))
                conn.commit()
                print(f"Item with ID {self.item_id} ('{self.item_name}') deleted.")
                return cursor.rowcount > 0
            except psycopg2.Error as e:
                conn.rollback()
                print(f"Error deleting item with ID {self.item_id}: {e}")
                return False
            finally:
                cursor.close()
                conn.close()
        elif not conn:
            return False
        else:
            print("Cannot delete item without an ID.")
            return False

    def update(self, new_name, new_price):
        """Updates the menu item's name and/or price in the database."""
        self.item_name = new_name
        self.item_price = new_price
        return self.save() 