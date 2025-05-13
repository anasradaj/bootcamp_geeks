-- Database: sql_puzzle

-- DROP DATABASE IF EXISTS sql_puzzle;

-- CREATE DATABASE sql_puzzle
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'French_France.1252'
--     LC_CTYPE = 'French_France.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- SELECT * FROM SecondTab

-- --Q1. What will be the OUTPUT of the following statement?
 -- SELECT COUNT(*) 
 --    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
 -- -- When NULL is in the NOT IN list, SQL can't definitively say that any value is not in that list (because NULL represents an unknown value). 
 -- -- Consequently, the WHERE clause filters out all rows. so the output will be 0

-- -- Q2. What will be the OUTPUT of the following statement?
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) :
-- (5,'Pawan'), False 
-- (6,'Sharlee'), True
-- (7,'Krish'), True
-- (NULL,'Avtaar') unknown
-- output should be 2 (2 condition are true)

-- -- Q3. 
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) :
--  (5,'Pawan') NOT IN (5, NULL) = false
-- (6,'Sharlee') = unknown
-- (7,'Krish') = unknown
-- (NULL,'Avtaar') = unknown
-- output should be 0 (0 condition are true)

-- -- Q4. 
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
	--same thing like Q2 the output will be 2 (2 condition true)
	