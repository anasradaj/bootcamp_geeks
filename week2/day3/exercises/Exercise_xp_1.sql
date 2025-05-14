-- Database: dvdrental

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
SELECT * FROM customer_review;

