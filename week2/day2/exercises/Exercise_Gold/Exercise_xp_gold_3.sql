-- --Exercise 3 : Items and customers
-- --Part I
-- --Create a table named purchases. It should have 3 columns :
-- CREATE TABLE purchases (
--     id SERIAL PRIMARY KEY,
--     customer_id INTEGER REFERENCES customers(id),
--     item_id INTEGER REFERENCES items(id),
--     quantity_purchased INTEGER
-- );

-- -- Insert purchases for the customers, use subqueries:
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
--     (SELECT id FROM items WHERE item_name = 'Fan'),
--     1
-- );
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
--     (SELECT id FROM items WHERE item_name = 'Large Desk'),
--     10
-- );
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (
--     (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
--     (SELECT id FROM items WHERE item_name = 'Small Desk'),
--     2
-- );

-- -- Part II
-- --Use SQL to get the following from the database:
-- -- 1.1 All purchases.
-- SELECT * FROM purchases;

-- --1.2 All purchases, joining with the customers table.
-- SELECT p.id AS purchase_id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
-- FROM purchases p
-- JOIN customers c ON p.customer_id = c.id;

-- -- 1.3 Purchases of the customer with the ID equal to 5.
-- SELECT p.id AS purchase_id, i.item_name, p.quantity_purchased
-- FROM purchases p
-- JOIN items i ON p.item_id = i.id
-- WHERE p.customer_id = 5;

-- --1.4 Purchases for a large desk AND a small desk
-- SELECT p.id AS purchase_id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
-- FROM purchases p
-- JOIN customers c ON p.customer_id = c.id
-- JOIN items i ON p.item_id = i.id
-- WHERE i.item_name IN ('Large Desk', 'Small Desk');

-- -- 2.Use SQL to show all the customers who have made a purchase. Show the following fields/columns: 
-- SELECT DISTINCT c.first_name, c.last_name, i.item_name
-- FROM purchases p
-- JOIN customers c ON p.customer_id = c.id
-- JOIN items i ON p.item_id = i.id;

-- -- 3.Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). 
-- INSERT INTO purchases (customer_id, quantity_purchased)
-- VALUES (1, 1);
-- -- Does this work? Why/why not? : it work because in 'CREATE TABLE purchases' statement we didn't specify 'NOT NULL' for 'item_id' so it take 'NULL' values