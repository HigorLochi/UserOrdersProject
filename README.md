# UserOrdersProject
This API aims to simulate the creation and managament of users and their orders.

## Necessary Tools
1. Postman
2. XAMPP
3. npm
4. Node.js
5. NPM ou Yarn
6. Banco de dados (MySQL)
   
## Steps
1. import ./jsons/UserOrdersProject.postman_collection.json into Postman
2. run XAMPP
3. run the SQLs in the folder ./sql
4. access the project directory and run npm i
5. npm run userordersproject
6. Start running the routes

## Routes
### User

1. /login (POST)
    Requires a body containing an object with the login and password, validanting and returning a boolean as authentication.

2. /users (GET)
    Returns all users.
    
3. /users (POST)
    Requires a body containing an array with the users to be added, retuns a message with the operation result.

4. /users/{userid} (PUT)
    Requires the user's id in the header and a body containing the class properties, retuns a message with the operation result.

5. /users/{userid} (DELETE)
    Requires the user's id as parameter and deletes itself, retuns a message with the operation result.

### Orders 

1. /orders (GET)
    Returns all order.

2. /orders/{userid} (GET)
    Requires the user's id in the header, retuns all order of the user.

3. /orders (POST)
    Requires a body containing a object with orders properties, retuns a message with the operation result.


