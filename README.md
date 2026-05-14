# UserOrdersProject
A RESTful API built with Node.js, Express.js, and Sequelize that simulates a complete user and order management system. The project provides CRUD operations for users and their associated orders, following a modular architecture focused on scalability, maintainability, and clean code practices.
The API utilizes Sequelize ORM for database management and migrations, enabling structured model relationships, validation, and efficient interaction with a MySQL database.

## Necessary Tools
1. Postman (https://www.postman.com/downloads/)
2. XAMPP (https://www.apachefriends.org/pt_br/download.html)
3. npm (https://nodejs.org/en/download)
4. Node.js (https://nodejs.org/en/download)
   
## Steps
1. run XAMPP and intiate Apache and MySQL
2. access the project directory
3. run npm i
4. run npx sequelize-cli db:migrate
5. run npx sequelize-cli db:seed:all
6. npm run userordersproject
7. Start accessing the routes

## Routes (Only the login route is available without a session)

### URL Example
http://localhost:3333/login

### Helper
Postman collection in postman_collection folder

### User

1. /login (POST)<br />
Requires a body containing an object with the login and password, validanting and returning a boolean as authentication.

2. /users (GET)<br />
Returns all users.
    
3. /users (POST)<br />
Requires a body containing an array with the users to be added, retuns a message with the operation result.

4. /users/{userid} (PUT)<br />
Requires the user's id in the header and a body containing the class properties, retuns a message with the operation result.

5. /users/{userid} (DELETE)<br />
Requires the user's id as parameter and deletes itself, retuns a message with the operation result.

### Orders 

1. /orders (GET)<br />
Returns all orders.

2. /orders/{userid} (GET)<br />
Requires a user's id in the header, retuns all user's orders.

3. /orders (POST)<br />
Requires a body containing a object with orders properties, retuns a message with the operation result.

## Schemas
### User

|   Field  |  Type  | Required |
|----------|--------|----------|
|   cpf    | string |   Yes    |
|    rg    | string |   No     |
|   name   | string |   Yes    |
|   age    | number |   No     |
|   login  | string |   Yes    |
| password | string |   Yes    |

### Order

|        Field       |        Type        | Required |
|--------------------|--------------------|----------|
|       userid       |       string       |   Yes    |
|    descriptions    | [OrderDescription] |   Yes    |


### OrderDescription

|   Field  |  Type  | Required |
|----------|--------|----------|
| orderid  | number |   Yes    |
| product  | string |   Yes    |
| quantity | number |   Yes    |