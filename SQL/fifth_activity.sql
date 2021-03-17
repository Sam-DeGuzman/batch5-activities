-- 4. Find the most popular film category per store (determined by the number of rentals)
-- Column => store_id, film_count, category_name
-- Answer => 2 rows

-- Sir Den Solution:
SELECT rc2.store_id, rc2.max film_count, rc3.name category_name 
FROM (SELECT store_id, MAX(rc1.rent_count)
    FROM (SELECT cg.name, count(r.rental_id) rent_count, s.store_id  FROM rental r
        LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
        LEFT JOIN film f ON f.film_id = i.film_id
        LEFT JOIN film_category fc ON f.film_id = fc.film_id
        LEFT JOIN category cg ON cg.category_id = fc.category_id
        LEFT JOIN staff s ON r.staff_id = s.staff_id
        GROUP BY cg.name, s.store_id) rc1
    GROUP BY store_id) rc2
LEFT JOIN (SELECT cg.name, count(r.rental_id) rent_count, s.store_id  FROM rental r
    LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
    LEFT JOIN film f ON f.film_id = i.film_id
    LEFT JOIN film_category fc ON f.film_id = fc.film_id
    LEFT JOIN category cg ON cg.category_id = fc.category_id
    LEFT JOIN staff s ON r.staff_id = s.staff_id
    GROUP BY cg.name, s.store_id) rc3 ON rc3.rent_count = rc2.max;



-- 5. Rank the top 5 actors per country (determined by the number rentals) sort by most popular to least popular
-- Column => country, actor_full_name, actor_rank, rent_count
-- Answer => 10 rows

-- Sir Den Solution:

SELECT * 
FROM(SELECT 
		c.country,
		CONCAT(ac.first_name, ' ', ac.last_name) as actor_full_name, 
		ROW_NUMBER() OVER (PARTITION BY country ORDER BY c.country ASC, count(r.rental_id) DESC, CONCAT(ac.first_name, ' ', ac.last_name) ASC) as actor_rank,
		count(r.rental_id) as rent_count
	FROM rental r
	LEFT JOIN inventory i ON r.inventory_id = i.inventory_id
	LEFT JOIN film f ON f.film_id = i.film_id
	LEFT JOIN film_actor fa ON fa.film_id = f.film_id
	LEFT JOIN actor ac ON ac.actor_id = fa.actor_id
	LEFT JOIN staff s ON r.staff_id = s.staff_id
	LEFT JOIN store sr ON sr.store_id = s.store_id
	LEFT JOIN address a ON a.address_id = sr.address_id
	LEFT JOIN city ct ON ct.city_id = a.city_id
	LEFT JOIN country c ON c.country_id = ct.country_id
	GROUP BY actor_full_name, c.country
	ORDER BY c.country ASC, actor_rank ASC, actor_full_name ASC) sub
WHERE actor_rank <= 5;