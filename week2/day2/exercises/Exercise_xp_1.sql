-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'French_France.1252'
--     LC_CTYPE = 'French_France.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

--  *creating 2 tables
-- CREATE TABLE items(
--  id SERIAL PRIMARY KEY,
--  item_name VARCHAR NOT NULL,
--  item_price MONEY  NOT NULL
--  )
-- -- CREATE TABLE customers(
--  id SERIAL PRIMARY KEY,
--  first_name VARCHAR NOT NULL,
--  last_price MONEY  NOT NULL
--  )
-- -- Rename and Change Data type of last_price for customers table :
-- ALTER TABLE customers RENAME COLUMN last_price TO last_name;
-- ALTER TABLE customers 
-- ALTER COLUMN last_name TYPE VARCHAR;

-- -- -- 1) add following items to the items table:
-- INSERT INTO items(item_name, item_price)
-- VALUES
-- 	('Small Desk', '100'),
-- 	('Large Desk', '300'),
-- 	('Fan', '80');

-- -- -- 2) add 5 new customers to the customers table: 
-- INSERT INTO customers(first_name, last_name)
-- VALUES
-- 	('Greg', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson');

-- -- 3) Use SQL to fetch the following data from the database
-- -- 3.1) All the items:
-- SELECT * from items

-- -- 3.2) All the items with a price above 80 (80 not included):
-- SELECT * FROM items WHERE item_price::numeric > 80

-- -- 3.3) All the items with a price below 300. (300 included):
-- SELECT * FROM items WHERE item_price::numeric <= 300

-- -- 3.4) All customers whose last name is ‘Smith’ (What will be your outcome?): empty rows
-- SELECT * FROM customers WHERE last_name = 'Smith'

-- -- 3.5) All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name = 'Jones'

-- -- 3.6) All customers whose firstname is not ‘Scott’
-- SELECT * FROM customers WHERE first_name != 'Scott'

-- -- Exercise 1 : Items and customers (day 2)
-- -- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY item_price ASC

-- --Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE item_price >= '80'
-- GROUP BY item_name
-- ORDER BY item_price DESC

-- -- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3

-- -- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC






 