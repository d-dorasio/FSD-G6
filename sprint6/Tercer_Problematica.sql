----- Tercer Problemática -----

-- seleccionar las cuentas con saldo negativo

SELECT account_id, customer_id, balance, iban, type_account_id FROM cuenta WHERE balance < 0;

-- seleccionar nombre, apellido y edad 
--de clientres con apellido que contenga la z

SELECT customer_name, customer_surname, CURRENT_DATE - strftime( dob ) as age 
FROM cliente 
WHERE customer_surname LIKE '%z%';

--seleccionar el nombre, apellido, 
--edad y nombre de sucursal de las personas
--cuyo nombre sea “Brendan” y el resultado 
--ordenarlo por nombre desucursal

SELECT customer_name, customer_surname, CURRENT_DATE - strftime( dob ) as age, branch_name 
FROM cliente, sucursal
WHERE customer_name = "Brendan"
ORDER by branch_name ASC;

--seleccionar de la tabla de préstamos,
--los préstamos con un importe mayor a $80.000 y 
--los préstamos prendarios utilizando la unión de tablas/consultas 
--(recordar que en las bases de datos la moneda se guardacomo integer, en este caso con 2 centavos)

SELECT loan_id, loan_type, loan_date, loan_total, customer_id
FROM prestamo
WHERE loan_total > 8000000
INTERSECT
SELECT loan_id, loan_type, loan_date, loan_total, customer_id
FROM prestamo
WHERE loan_type = 'PRENDARIO';

--seleccionar los prestamos cuyo importe
--sea mayor que el importe medio de todos los prestamos

SELECT loan_id, loan_type, loan_date, loan_total, customer_id
FROM prestamo
WHERE loan_total > (SELECT AVG(loan_total) FROM prestamo);

--contar la cantidad de clientes menores a 50 años

SELECT COUNT(*) as CantYounger50
FROM cliente
WHERE CURRENT_DATE - strftime( dob ) < 50;

--seleccionar las primeras 5 cuentas con saldo mayor a 8.000$

SELECT customer_id ,balance 
FROM cuenta
WHERE balance > 8000000 
LIMIT 5;

--seleccionar los préstamos que tengan fecha en abril, junio y agosto,
--ordenar por importe 

SELECT loan_id, loan_type, loan_date, loan_total, customer_id
FROM prestamo
WHERE loan_date LIKE '%-04-%' OR loan_date LIKE '%-06-%' OR loan_date LIKE '%-08-%'
ORDER BY loan_total;

--obtener el importe total de los prestamos agrupados por tipo de préstamos.
--Por cada tipo de préstamo de la tabla préstamo, calcular la suma de sus importes.
--Renombrar la columna como loan_total_accu

SELECT loan_type, SUM(loan_total) as loan_total_accu
FROM prestamo
GROUP BY loan_type;
