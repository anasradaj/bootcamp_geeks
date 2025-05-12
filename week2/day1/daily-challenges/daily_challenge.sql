-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'French_France.1252'
--     LC_CTYPE = 'French_France.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- -- Add two more female actors in the table actors. Add them one by one
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Olivia','Colman','30/01/1974', 1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Renée','Zellweger','25/04/1969', 3);

-- -- Add three more actors, add all of them in one query !
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- 	('Cillian ','Murphy','25/05/1976', 6),
-- 	('Leonardo','DiCaprio','11/11/1974', 9),
-- 	('Matthew','McConaughey','04/11/1969', 1);

-- -- Retrieve everything from the table actors
-- SELECT * FROM actors

-- -- The first 4 actors
-- SELECT * FROM actors LIMIT 4;

-- -- The first 4 actors ordered in descending order of the last_name (ie. sorted DESCENDING by the "last_name" column))
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4

-- -- The actors that have the letter 'e' in their first_name
-- SELECT * FROM actors WHERE first_name LIKE '%e%'

-- --The actors that got at least 5 oscars
-- SELECT * FROM actors WHERE number_oscars >= 5 

-- -- Update the first name of Matt Damon to Maty
-- UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';

-- -- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actors SET number_oscars=4 WHERE first_name='George' AND last_name='Clooney' RETURNING actor_id, first_name, last_name, number_oscars;

-- -- Rename the age column by birthdate
-- ALTER TABLE actors RENAME COLUMN age TO birthdate;

-- --Delete one actor and return it
-- DELETE FROM actors WHERE actor_id=3
-- RETURNING actor_id, first_name, last_name, number_oscars;

-- Instructions

-- -- 1. Count how many actors are in the table.
-- SELECT COUNT(*) AS total_actors FROM actors;

-- --2. Try to add a new actor with some blank fields. What do you think the outcome will be ? : 
-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- VALUES ('', '', NULL, NULL);
-- -- error :In actors table definition, the columns first_name, last_name, birthdate, and number_oscars are marked as NOT NULL.


