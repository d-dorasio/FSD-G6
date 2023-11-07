-------- Segunda Problemática --------

-- Crear una vista con las columnas id,
-- numero sucursal, nombre, apellido, DNI
-- y edad de la tabla cliente calculada
-- a partir de la fecha de nacimiento

CREATE VIEW Segunda_Problemática AS
SELECT 
cliente.customer_id as ID,
sucursal.branch_number as Número_Sucursal,
cliente.customer_name as Nombre,
cliente.customer_surname as Apellido,
cliente.customer_DNI as DNI,
CURRENT_DATE - strftime( dob ) as Edad
FROM cliente
INNER JOIN sucursal on sucursal.branch_id = cliente.branch_id

-- Mostrar las columnas de los clientes,
-- ordenadas por el DNI de menor a mayor
-- y cuya edad sea superior a 40 años

SELECT ID, Nombre, Apellido, DNI, Edad
FROM Segunda_Problemática
WHERE Edad > 40
ORDER BY DNI ASC;

-- Mostrar todos los clientes que se
-- llaman “Anne” o “Tyler” ordenados
-- por edad de menor a mayor

SELECT ID, Nombre, Apellido, DNI, Edad
FROM Segunda_Problemática
WHERE Nombre = "Anne" OR Nombre = "Tyler"
ORDER BY Edad ASC;

-- Dado el siguiente JSON. Insertar 5 nuevos
-- clientes en la base de datos y verificar que
-- se haya realizado con éxito la inserción


INSERT INTO cliente (customer_name, customer_surname, customer_DNI, dob, branch_id)
VALUES
("Lois","Stout",47730534,"1984-07-07", 80),
("Hall","Mcconell",52055464,"1968-04-30",45),
("Hilel","Mclean",43625213,"1993-03-28",77),
("Jin","Cooley",21207908,"1959-08-24",96),
("Gabriel","Harmon",57063950,"1976-04-01",27);

-- Actualizar 5 clientes recientemente agregados
-- en la base de datos dado que hubo un error
-- en el JSON que traía la información,
-- la sucursal de todos es la 10

UPDATE cliente
SET branch_id = 10
WHERE customer_DNI IN (47730534, 52055464, 43625213, 21207908, 57063950);

-- Eliminar el registro correspondiente a "Noel David" 
-- realizando la selección por el nombre y apellido
---- NOEL DAVID NO EXISTE EN LA BASE IGUAL ----

DELETE FROM clientes
WHERE customer_name = "Noel" AND customer_surname = "David";

-- Consultar sobre cuál es el tipo de
-- préstamo de mayor importe

SELECT 
loan_type as Tipo_de_Préstamo 
FROM (
	SELECT loan_type, SUM(CAST(replace(loan_total, substr(loan_total, -2, 2), '.'||substr(loan_total, -2, 2)) AS DECIMAL)) AS importe_total
	FROM prestamo
	WHERE loan_type = 'PERSONAL'
	UNION
	SELECT loan_type, SUM(CAST(replace(loan_total, substr(loan_total, -2, 2), '.'||substr(loan_total, -2, 2)) AS DECIMAL)) AS importe_total
	FROM prestamo
	WHERE loan_type = 'PRENDARIO'
	UNION
	SELECT loan_type, SUM(CAST(replace(loan_total, substr(loan_total, -2, 2), '.'||substr(loan_total, -2, 2)) AS DECIMAL)) AS importe_total
	FROM prestamo
	WHERE loan_type = 'HIPOTECARIO'
	ORDER BY importe_total DESC
	LIMIT 1
);

