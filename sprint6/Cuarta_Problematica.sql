----- Cuarta Problemática -----

--listar la cantidad de clientes por nombre de sucursal ordenando de mayor a menor
SELECT count(cliente.customer_id) as total_clients, sucursal.branch_name FROM cliente, sucursal 
WHERE cliente.branch_id = sucursal.branch_id 
GROUP BY sucursal.branch_name
ORDER BY count(cliente.customer_id) DESC;

--obtener la cantidad de empleados por cliente por sucursal en un número real

SELECT sucursal.branch_id, sucursal.branch_name, 
COUNT(DISTINCT empleado.employee_id) as EmployeeXBranch,
COUNT(DISTINCT cliente.customer_id) as ClientsXBranch,
COUNT(DISTINCT empleado.employee_id) / COUNT(DISTINCT cliente.customer_id) as TotalEmployees
FROM sucursal 
INNER JOIN empleado on sucursal.branch_id = empleado.branch_id
INNER JOIN cliente on sucursal.branch_id = cliente.branch_id
GROUP by sucursal.branch_id;

--obtener la cantidad de tarjetas de crédito por tipo por sucursal

SELECT sucursal.branch_name, count(tarjeta.id_card) as TotalCards, marca_tarjeta.brand FROM cliente
INNER JOIN tarjeta on cliente.customer_id = tarjeta.id_customer
INNER JOIN sucursal on cliente.branch_id = sucursal.branch_id
INNER JOIN marca_tarjeta on tarjeta.id_brand = marca_tarjeta.brand_id
WHERE tarjeta.type = 'credito'
GROUP BY  tarjeta.id_brand, sucursal.branch_name
ORDER BY sucursal.branch_name;

--obtener el promedio de créditos otorgado por sucursal

SELECT sucursal.branch_name as Branch, AVG(prestamo.loan_total) as AverageCredits
FROM sucursal
INNER JOIN cliente on sucursal.branch_id = cliente.branch_id
LEFT JOIN prestamo on cliente.customer_id = prestamo.customer_id
GROUP BY Branch;

--crear una tabla denominada “auditoria_cuenta” para guardar los datos movimientos,
--con los siguientes campos: old_id, new_id, old_balance,new_balance, 
--old_iban, new_iban, old_type, new_type, user_action,created_at
	--Crear un trigger que después de actualizar en la tabla cuentas los campos balance, 
		--IBAN o tipo de cuenta registre en la tabla auditoria
	--Restar $100 a las cuentas 10,11,12,13,14

CREATE TABLE IF NOT EXISTS auditoria_cuenta  (
    old_id INTEGER,
    new_id INTEGER,
    old_balance REAL,
    new_balance REAL,
    old_iban TEXT,
    new_iban TEXT,
    old_type TEXT,
    new_type TEXT,
    user_action TEXT,
    create_at TIMESTAMP DEFAULT(DATETIME())
);
