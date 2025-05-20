-- -- Daily Challenge: Items and Orders
-- -- 1 & 2 :

-- CREATE TABLE product_orders (
--     order_id SERIAL PRIMARY KEY,
--     order_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    
-- );

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     order_id INTEGER REFERENCES product_orders(order_id) ON DELETE CASCADE NOT NULL,
--     item_name VARCHAR(100) NOT NULL,
--     quantity INTEGER NOT NULL CHECK (quantity > 0),
--     price DECIMAL(10, 2) NOT NULL CHECK (price >= 0.00)
    
-- );

-- -- 3 :
-- CREATE FUNCTION total_order_price(p_order_id INTEGER)
-- RETURNS DECIMAL AS $$
-- DECLARE
--     total_price DECIMAL;
-- BEGIN
--     SELECT SUM(price * quantity)
--     INTO total_price
--     FROM items
--     WHERE order_id = p_order_id;

--     RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;

-- -- 4 :
-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

-- ALTER TABLE product_orders
-- ADD COLUMN user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE;


-- CREATE OR REPLACE FUNCTION user_order_total_price(p_user_id INTEGER, p_order_id INTEGER)
-- RETURNS DECIMAL AS $$
-- DECLARE
--     total_price DECIMAL;
-- BEGIN
--     SELECT SUM(i.price * i.quantity)
--     INTO total_price
--     FROM items i
--     JOIN product_orders po ON i.order_id = po.order_id
--     WHERE po.order_id = p_order_id AND po.user_id = p_user_id;

--     RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;


