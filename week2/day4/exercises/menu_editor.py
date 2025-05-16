
def show_user_menu():
    """Displays the program menu and gets user input."""
    while True:
        print("\nRestaurant Menu Manager:")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (E)")

        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")

def view_item():
    """Asks for item name and displays its details."""
    from menu_manager import MenuManager
    item_name = input("Enter the name of the item to view: ")
    item = MenuManager.get_by_name(item_name)
    if item:
        print(item)
    else:
        print(f"Item '{item_name}' not found on the menu.")

def add_item_to_menu():
    """Asks for item name and price, creates a MenuItem, and saves it."""
    from menu_item import MenuItem
    item_name = input("Enter the name of the item to add: ")
    while True:
        try:
            item_price = int(input("Enter the price of the item: "))
            break
        except ValueError:
            print("Invalid price. Please enter a number.")

    new_item = MenuItem(item_name, item_price)
    if new_item.save():
        print(f"'{item_name}' was added successfully.")
    else:
        print("There was an error adding the item.")

def remove_item_from_menu():
    """Asks for the name of the item to remove and deletes it."""
    from menu_manager import MenuManager
    item_name = input("Enter the name of the item to remove: ")
    item_to_delete = MenuManager.get_by_name(item_name)
    if item_to_delete:
        if item_to_delete.delete():
            print(f"'{item_name}' was deleted successfully.")
        else:
            print("There was an error deleting the item.")
    else:
        print(f"Item '{item_name}' not found on the menu.")

def update_item_from_menu():
    """Asks for the name of the item to update and the new details."""
    from menu_manager import MenuManager
    item_name_to_update = input("Enter the name of the item to update: ")
    item_to_update = MenuManager.get_by_name(item_name_to_update)

    if item_to_update:
        new_name = input(f"Enter the new name for '{item_to_update.item_name}' (leave blank to keep the same): ") or item_to_update.item_name
        while True:
            price_input = input(f"Enter the new price for '{item_to_update.item_name}' (leave blank to keep the same): ")
            if not price_input:
                new_price = item_to_update.item_price
                break
            try:
                new_price = int(price_input)
                break
            except ValueError:
                print("Invalid price. Please enter a number or leave blank.")

        if item_to_update.update(new_name, new_price):
            print(f"'{item_name_to_update}' was updated successfully.")
        else:
            print("There was an error updating the item.")
    else:
        print(f"Item '{item_name_to_update}' not found on the menu.")

def show_restaurant_menu():
    """Prints all items currently in the menu."""
    from menu_manager import MenuManager
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(item)
        print("-----------------------")
    else:
        print("The restaurant menu is currently empty.")

if __name__ == "__main__":
    show_user_menu()