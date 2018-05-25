CREATE TABLE houser_houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(20),
    zip VARCHAR(20),
    image_url VARCHAR(200),
    mortgage_amount VARCHAR(30),
    monthly_rent VARCHAR(20)
);