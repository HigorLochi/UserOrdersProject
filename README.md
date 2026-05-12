# UserOrdersProject
This API aims to simulate the classification of a World Cup, allowing for the selection of matches and the calculation of the table based on the results.

## Necessary Tools
1. Postman
2. XAMPP
3. npm
4. Node.js
5. NPM ou Yarn
6. Banco de dados (MySQL)
   
## Steps
1. import ./jsons/WorldCupAPI.postman_collection.js into Postman
2. run XAMPP
3. create a database called worldcup
4. run the sql in ./sql/createtables.sql
5. npm i nodemon
6. npm i password-hash
7. npm i
8. npm run worldcupapi
9. Start running the routes

## Routes
### Common
Every class has 5 common routes:

1. post (POST)
    Requires a body containing the class properties, and register a record.

2. put (PUT)
    Requires the record's id and a body containing the class properties, and updates the record.

3. getAll (GET)
    Returns all records.

4. getById (GET)
    Requires the record's id as parameter and returns itself.

5. Delete (DELETE)
    Requires the record's id as parameter and deletes itself.

### Distinct 
The distinct routes are from the WorldCup class.

1. setoitavasdefinal (GET)
    Register base matchs randomly, and requires the worldcup id.

1. advancephase (GET)
    Register the next phase matchs, and requires the worldcup id.


