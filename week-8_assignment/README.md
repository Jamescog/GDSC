
# User Authentication API

This API provides user authentication functionalities including user registration, user login, and token verification. 

The following libraries and frameworks are used:

- [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library for hashing passwords
- [JWT](https://jwt.io/) - A standard for creating JSON-based access tokens that can be used for authentication
- [Mongoose](https://mongoosejs.com/) - A MongoDB object modeling tool
- [Color](https://www.npmjs.com/package/colors) - A library for adding color to the console output

## Requirements

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository: 

    ```
    git clone https://github.com/Jamescog/GDSC/week-8_assignment.git

    ````

2. Install dependencies:
    ```
    npm install
    ```
3. Set up environment variables by creating a .env file in the root directory of the project and add the following variables:
    ```
    DB_URI=mongodb://127.0.0.1/user-auth
    JWT_SECRET_KEY=your_secret_key
    PORT=3000
    ```
4. Start the server:
    ```
    npm start
    ```
## Usage
### Signup
To create a new user account, make a POST request to /signup with the following JSON data:

    {
    "username": "john_doe",
    "email": "john_doe@example.com",
    "password": "password123"
    }
The password field will be hashed using the bcrypt library before being saved to the database.

### Login
To authenticate a user, make a POST request to /login with the following JSON data:


    {
    "email": "john_doe@example.com",
    "password": "password123"
    }
If the email and password match a user in the database, a JWT token will be returned.

### Protected Route
To access a protected route, include the JWT token in the Authorization header of the request:

    ```
    Authorization: Bearer <token>
    ````
Make a GET request to /protected to access the protected route. If the token is valid, a response with the message "Access granted" will be returned.

## License
This project is licensed under the MIT License.

