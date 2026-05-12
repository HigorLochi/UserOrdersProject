# UserOrdersProject
This API aims to simulate the creation and managament of users and their orders.

## Necessary Tools
1. Postman (https://www.postman.com/downloads/)
2. XAMPP (https://www.apachefriends.org/pt_br/download.html)
3. npm (https://nodejs.org/en/download)
4. Node.js (https://nodejs.org/en/download)
   
## Steps
1. import ./jsons/UserOrdersProject.postman_collection.json into Postman
2. run XAMPP and intiate Apache and MySQL
3. run the SQLs in the folder ./sql
4. access the project directory and run npm i
5. npm run userordersproject
6. Start accessing the routes

## Routes (Only the login route is available without a session)

### URL Example
http://localhost:3333/login

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

## Improvements to be done

1. Migrations
2. Seeders
3. Dedicated configuration for table fields