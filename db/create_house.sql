/*INSERT INTO Statements add data to database.*/
INSERT INTO houser_houses (name, address, city, state, zip, image_url, mortgage_amount, monthly_rent)
 VALUES (${nameInput}, ${addressInput}, ${cityInput}, ${stateInput}, ${zipcodeInput},
  ${imageurlInput}, ${monthly_mortgage_amountInput}, ${monthly_rentInput});
/*SELECT Statements return data.*/
SELECT * FROM houser_houses;