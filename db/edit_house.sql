UPDATE houser_houses 
SET name = ${name},
address = ${address},
city = ${city},
state = ${state},
zip = ${zipcode}
WHERE id = ${id};
SELECT * FROM houser_houses WHERE id = ${id};