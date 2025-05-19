import psycopg2

# Database connection details
DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "Anas/1996."  
HOST = "localhost"

class MenuItem:
    def __init__(self, name, price=0, item_id=None, photo_url=None, category=None, description=None):
        self.item_id = item_id
        self.item_name = name
        self.item_price = price
        self.photo_url = photo_url
        self.category = category
        self.description = description

    def __str__(self):
        return f"ID: {self.item_id}, Name: {self.item_name}, Price: {self.item_price}, Category: {self.category}, Description: {self.description}"

    def _connect(self):
        """Connects to the PostgreSQL database."""
        try:
            conn = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, client_encoding= 'LATIN1')
            return conn
        except psycopg2.Error as e:
            print(f"Error connecting to database: {e}")
            return None

    def save(self, photo_url=None):
        """Saves the menu item to the database, including photo_url if provided."""
        conn = self._connect()
        if conn:
            cursor = conn.cursor()
            try:
                if self.item_id is None:
                    query = "INSERT INTO Menu_Items (item_name, item_price, photo_url, category, description) VALUES (%s, %s, %s, %s, %s) RETURNING item_id;"
                    cursor.execute(query, (self.item_name, self.item_price, photo_url, self.category, self.description))
                    self.item_id = cursor.fetchone()[0]
                    conn.commit()
                    print(f"Item '{self.item_name}' saved with ID: {self.item_id}")
                    return True
                else:
                    query = "UPDATE Menu_Items SET item_name = %s, item_price = %s, photo_url = %s, category = %s, description = %s WHERE item_id = %s;"
                    cursor.execute(query, (self.item_name, self.item_price, photo_url, self.category, self.description, self.item_id))
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

    def update(self, new_name=None, new_price=None, new_category=None, new_description=None, new_photo_url=None):
        """Update the menu item details in the database."""
        conn = self._connect()
        if conn:
            cursor = conn.cursor()
            try:
                update_fields = []
                update_values = []

                if new_name:
                    update_fields.append("item_name = %s")
                    update_values.append(new_name)
                if new_price is not None:
                    update_fields.append("item_price = %s")
                    update_values.append(new_price)
                if new_description:
                    update_fields.append("description = %s")
                    update_values.append(new_description)
                if new_photo_url:
                    update_fields.append("photo_url = %s")
                    update_values.append(new_photo_url)

                update_values.append(self.item_id)
                update_query = f"UPDATE menu_items SET {', '.join(update_fields)} WHERE item_id = %s"
                cursor.execute(update_query, tuple(update_values))
                conn.commit()
                return True
            except Exception as e:
                print(f"Error updating item: {e}")
                conn.rollback()
                return False
            finally:
                cursor.close()
                conn.close()

    # @staticmethod
    # def filter_by_category(category):
    #     """Fetches all menu items from the database that match the given category."""
    #     conn = MenuItem._connect(MenuItem)
    #     if conn:
    #         cursor = conn.cursor()
    #         try:
    #             query = "SELECT * FROM Menu_Items WHERE category = %s;"
    #             cursor.execute(query, (category,))
    #             items = cursor.fetchall()
    #             return [MenuItem(item_id=row[0], name=row[1], price=row[2], photo_url=row[3], category=row[4], description=row[5]) for row in items]
    #         except psycopg2.Error as e:
    #             print(f"Error fetching items by category '{category}': {e}")
    #             return []
    #         finally:
    #             cursor.close()
    #             conn.close()
    #     return []

    # @staticmethod
    # def get_admin_stats():
    #     """Fetches admin dashboard stats like total menu items and categories."""
    #     conn = MenuItem._connect(MenuItem)
    #     if conn:
    #         cursor = conn.cursor()
    #         try:
    #             stats = {}
    #             cursor.execute("SELECT COUNT(*) FROM Menu_Items;")
    #             stats['total_items'] = cursor.fetchone()[0]

    #             cursor.execute("SELECT COUNT(DISTINCT category) FROM Menu_Items;")
    #             stats['total_categories'] = cursor.fetchone()[0]

    #             return stats
    #         except psycopg2.Error as e:
    #             print(f"Error fetching admin stats: {e}")
    #             return {}
    #         finally:
    #             cursor.close()
    #             conn.close()
    #     return {}