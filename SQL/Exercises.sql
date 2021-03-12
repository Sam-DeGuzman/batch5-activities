SELECT * FROM store;
SELECT * FROM inventory;
SELECT * FROM film;

SELECT a.store_id, count(a.store_id) film_count 
FROM store as a
LEFT JOIN inventory as b
ON a.store_id = b.store_id
LEFT JOIN film as c 
ON c.film_id = b.film_id
WHERE c.rental_rate < 3.00
GROUP BY a.store_id; 