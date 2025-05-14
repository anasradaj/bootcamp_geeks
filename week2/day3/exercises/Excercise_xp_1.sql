-- Database: dvdrental

-- -- Exercise 1
-- -- 1.Get a list of all the languages, from the language table.
-- SELECT name FROM language;

-- -- 2. Get a list of all films joined with their languages – select the following details: film title, description, and language name.
-- SELECT f.title AS film_title, f.description, l.name AS language_name FROM film f
-- JOIN language l ON f.language_id = l.language_id

-- -- 3. Get all languages, even if there are no films in those languages – select the following details: film title, description, and language name.
-- SELECT f.title AS film_title, f.description, l.name AS language_name FROM language l
-- LEFT JOIN film f ON l.language_id = f.language_id;

-- -- 4. Create a new table called new_film with the following columns: id, name. Add some new films to the table.
-- CREATE TABLE new_film ( 
-- 	id SERIAL PRIMARY KEY,
--     name VARCHAR(255)
-- );
-- INSERT INTO new_film (name) VALUES
-- ('Avengers'),
-- ('The Matrix'),
-- ('Interstellar Origins');

-- -- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- -- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- -- It should have the following columns:
-- -- review_id – a primary key, non null, auto-increment.
-- -- film_id – references the new_film table. The film that is being reviewed. ON DELETE CASCADE
-- -- language_id – references the language table. What language the review is in.
-- -- title – the title of the review.
-- -- score – the rating of the review (1-10).
-- -- review_text – the text of the review. No limit on the length.
-- -- last_update – when the review was last updated.
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
--     language_id INTEGER REFERENCES language(language_id),
--     title VARCHAR(255),
--     score SMALLINT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP WITHOUT TIME ZONE
-- );

-- -- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES (
--     (SELECT id FROM new_film WHERE name = 'Inception 2'),
--     (SELECT language_id FROM language WHERE name = 'English'),
--     'A thrilling superhero team-up',
--     9,
--     'Marvels biggest heroes together to save the world. Action-packed, witty, and a game-changer for comic book movies.',
--     NOW()
-- );
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES (
--     (SELECT id FROM new_film WHERE name = 'The Matrix'),
--     (SELECT language_id FROM language WHERE name = 'French'),
--     'Action-Packed and Thought-Provoking',
--     8,
--     'More action and deeper philosophical questions. Kept me engaged from start to finish.',
--     NOW()
-- );

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table? the review of 'Avengers' has been deleted
-- DELETE FROM new_film
-- WHERE name = 'Avengers';

-- -- Exercise 2
-- -- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'French')
-- WHERE title = 'Affair Prejudice';
-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'Italian')
-- WHERE title IN ('African Egg', 'Agent Truman');

-- --2. Which foreign keys (references) are defined for the customer table? it's 'address_id' from 'address' table
-- -- How does this affect the way in which we INSERT into the customer table? : 
-- when inserting a new customer, the value provided for that foreign key column would need to match a valid primary key value in the referenced table.
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM
    information_schema.table_constraints AS tc
JOIN
    information_schema.key_column_usage AS kcu
        ON tc.constraint_schema = kcu.constraint_schema
        AND tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
        AND tc.table_name = kcu.table_name
JOIN
    information_schema.referential_constraints AS rc
        ON tc.constraint_schema = rc.constraint_schema
        AND tc.constraint_name = rc.constraint_name
JOIN
    information_schema.constraint_column_usage AS ccu
        ON rc.unique_constraint_schema = ccu.constraint_schema
        AND rc.unique_constraint_name = ccu.constraint_name
        AND kcu.ordinal_position = 1
WHERE tc.table_name = 'customer' AND tc.constraint_type = 'FOREIGN KEY';

-- -- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?:  
-- --Yes, because there isn't other tables with foreign keys referencing customer_review 
-- DROP TABLE IF EXISTS customer_review;

-- -- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT(*) AS outstanding_rentals FROM rental
-- WHERE return_date IS NULL;

-- -- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT f.title, f.rental_rate
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- WHERE r.return_date IS NULL ORDER BY f.rental_rate DESC LIMIT 30;

-- --6.
-- --6.1 The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT f.title, f.description FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE f.description ILIKE '%sumo wrestler%' AND a.first_name = 'PENELOPE' AND a.last_name = 'MONROE';

-- --6.2 The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT
-- title, description, rating, length FROM film
-- WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%';

-- --6.3 The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT f.title, f.description FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01' AND f.rental_rate > 4.00;

-- --6.4 The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT f.title, f.description, f.replacement_cost FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%') ORDER BY f.replacement_cost DESC
-- LIMIT 1;