-- Number 0
SELECT COUNT(DISTINCT b.inventory_id) AS unique_inventory_rented,
COUNT(DISTINCT b.rental_id) AS total
FROM inventory as a 
LEFT JOIN rental as b
ON a.inventory_id = b.inventory_id;

-- Number 1
 SELECT a.title film_title, a.release_year, a.rating, 
 CONCAT(c.first_name , ' ' , c.last_name) AS actor_full_name
 FROM film AS a
 RIGHT JOIN film_actor AS b
ON a.film_id = b.film_id
 RIGHT JOIN actor as c
 ON b.actor_id = c.actor_id
WHERE CONCAT(c.first_name , ' ' , c.last_name) = 'Dan Torn'
OR CONCAT(c.first_name , ' ' , c.last_name) = 'Dan Streep'
ORDER BY film_title ASC;

-- Number 2
SELECT CONCAT(d.first_name , ' ' , d.last_name) as actor_full_name, 
a.title film_title, e.name as category_name
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


-- Number 3 (Sir Den Solution)
SELECT CONCAT(sf.first_name, ' ', sf.last_name) staff_full_name, count(cc.country_id) customer_count
FROM staff sf
LEFT JOIN store sr ON sf.store_id = sr.store_id
LEFT JOIN address a ON a.address_id = sr.address_id
LEFT JOIN city ON city.city_id = a.city_id
LEFT JOIN country ON country.country_id = city.country_id
LEFT JOIN (SELECT country.country_id
			FROM customer c
			LEFT JOIN address a ON a.address_id = c.address_id
			LEFT JOIN city ON city.city_id = a.city_id
			LEFT JOIN country ON country.country_id = city.country_id) cc 
			ON cc.country_id = country.country_id

GROUP BY CONCAT(sf.first_name, ' ', sf.last_name);

-- Number 4
SELECT ct.name, count(r.rental_id)
FROM customer AS c
LEFT JOIN rental AS r
ON c.customer_id = r.customer_id
LEFT JOIN inventory AS i
ON r.inventory_id = i.inventory_id
LEFT JOIN film AS f
ON i.film_id = f.film_id
LEFT JOIN film_category fc
ON f.film_id = fc.film_id
LEFT JOIN category ct
ON fc.category_id = ct.category_id
LEFT JOIN store as s 
ON i.store_id = s.store_id

GROUP BY ct.name
;

SELECT store.store_id 
FROM store;


-- Gumawa ako ng column na nagaassign ng row number per country

-- Then from they kinukuha ko lang lahat ng row_number < 5
-- row_number <= 5 pala

-- SELECT actor.*, 
--   rank() OVER (PARTITION BY actor_id ORDER BY first_name DESC) 
--   FROM actor;
  
SELECT ac.first_name, count(r.rental_id)
FROM customer AS c
RIGHT JOIN rental AS r
ON c.customer_id = r.customer_id
RIGHT JOIN inventory AS i
ON r.inventory_id = i.inventory_id
RIGHT JOIN film AS f
ON i.film_id = f.film_id
RIGHT JOIN film_actor fa
ON f.film_id = fa.film_id
RIGHT JOIN actor ac
ON fa.actor_id = ac.actor_id
RIGHT JOIN store as s 
ON i.store_id = s.store_id

GROUP BY ac.first_name
;








