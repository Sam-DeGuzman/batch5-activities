CREATE TABLE students(
	id INT, first_name VARCHAR(255),middle_name VARCHAR(255),last_name VARCHAR(255),age INT, location VARCHAR(255)
);


INSERT INTO students(id, first_name, middle_name, last_name, age, location) 
VALUES(1,"Juan","Blank","Cruz",18,"Manila"),
(2,"John","Blank","Young",20,"Manila"),
(3,"Victor","Blank","Rivera",21,"Manila"),
(4,"Adrian","Blank","Co",19,"Laguna"),
(5,"Pau","Blank","Riosa",22,"Marikina"),
(6,"Piolo","Blank","Pascual",25,"Manila");



--Display the count of all Students
SELECT COUNT(id) NumOf_Students FROM students;


--Display all Students with location is Manila
SELECT * FROM students 
WHERE location = 'Manila';


--Display the average age of all students. 
SELECT AVG(age) Average_Age FROM students;


--Display all students by age descending. 
SELECT * FROM students
ORDER BY age DESC;