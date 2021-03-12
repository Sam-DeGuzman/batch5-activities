-- Number 0
SELECT COUNT(DISTINCT b.inventory_id) AS unique_inventory_rented,COUNT(DISTINCT b.rental_id) AS total
FROM inventory as a 
LEFT JOIN rental as b
ON a.inventory_id = b.inventory_id;

-- Number 1
 SELECT a.title film_title, a.release_year, a.rating, 
 CONCAT(c.first_name , ' ' , c.last_name) as actor_full_name
 FROM film AS a
 RIGHT JOIN film_actor AS b
ON a.film_id = b.film_id
 RIGHT JOIN actor as c
 ON b.actor_id = c.actor_id
WHERE CONCAT(c.first_name , ' ' , c.last_name) = 'Dan Torn'
OR CONCAT(c.first_name , ' ' , c.last_name) = 'Dan Streep'
ORDER BY film_title ASC;

-- Number 2
SELECT CONCAT(d.first_name , ' ' , d.last_name) as actor_full_name, a.title film_title, e.name as category_name
FROM film as a
RIGHT JOIN film_category as b
ON a.film_id = b.film_id
RIGHT JOIN film_actor AS c
ON a.film_id = c.film_id
RIGHT JOIN actor as d
ON c.actor_id = d.actor_id
RIGHT JOIN category as e
ON b.category_id = e.category_id
WHERE e.name = 'Comedy' AND LEFT(d.last_name,1) = 'D'
ORDER BY actor_full_name;



