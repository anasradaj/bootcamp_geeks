
-- -- Exercise XP Gold
-- -- Find out how many films there are for each rating.
-- SELECT rating, COUNT(*) AS film_count
-- FROM film
-- GROUP BY rating
-- ORDER BY rating;

-- --Get a list of all the movies that have a rating of G or PG-13.
-- SELECT title, rating FROM film
-- WHERE rating IN ('G', 'PG-13');

-- --Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
-- SELECT title, rating, length, rental_rate FROM film
-- WHERE rating IN ('G', 'PG-13') AND length < 120  AND rental_rate < 3.00
-- ORDER BY title ASC;

-- -- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- UPDATE customer SET first_name = 'Anas', last_name = 'Radaj',email = 'anasradaj@gmail.com', last_update = NOW()
-- WHERE customer_id = 2; 

-- -- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
-- SELECT address_id FROM customer
-- WHERE customer_id = 2; -- address_id = 6
-- -- add Mohammedia to the city table 
-- SELECT * FROM country -- country_id = 62
-- INSERT INTO city (city, country_id, last_update)
-- VALUES ('Mohammedia', 62, NOW()) RETURNING city_id; --city_id = 601

-- UPDATE address SET address ='Lot andalouss', address2 = '15', district = 'Beni yakhlef', city_id = (SELECT city_id FROM city WHERE city = 'Mohammedia'),
-- postal_code = '28815', phone = '0706053008', last_update = NOW()
-- WHERE address_id = 6;
