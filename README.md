<h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=1100&height=70&duration=4000&lines=Wallet@+Watcher+Backend+&color=078179" />
</h1>

**Wallet@Watcher - Backend** is the server-side component of the Wallet@Watcher application, built using the MERN stack (MySQL with Prisma, Express, Node.js). This backend allows users to interact with their expense tracking data, providing secure authentication, CRUD operations for expenses, and more.

## Backend Technologies Used

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **Prisma**: ORM for MySQL to interact with the database.
- **MySQL**: Relational database management system for storing user data and expenses.
- **TypeScript**: A superset of JavaScript for type safety.
- **JWT (JSON Web Token)**: For handling secure authentication.
- **bcrypt**: For hashing passwords.
- **dotenv**: For managing environment variables.
- **CORS**: For handling Cross-Origin Resource Sharing.
- **Nodemon**: For automatically restarting the server during development.

## Project Setup

### Requirements

- Node.js (>=16.x)
- MySQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sasobapriyanjana11/Wallet-Watcher-MERN-Backend.git
  ```
2. Install dependencies:
```bash
   npm install
```
3. Set up environment variables in a .env file. Example:
   
 - DATABASE_URL="mysql://user:password@localhost:3306/expense_tracker"
 - JWT_SECRET="your_jwt_secret"

4. Run Prisma to generate the database schema:
   ```bash
     npx prisma migrate dev
  ```
5. Start the development server:
 ```bash
    npm run dev
```
## Features

- User authentication with JWT tokens.
- CRUD operations for managing expenses.
- Secure password storage using bcrypt.
- Express API routes to handle expense data.
- TypeScript for type safety across the backend code.

## Dependencies

- @prisma/client: ORM for interacting with the MySQL database.
- bcrypt: Library for hashing passwords securely.
- cors: Middleware for enabling Cross-Origin Resource Sharing.
- dotenv: For loading environment variables.
- express: Framework for building RESTful APIs.
- express-async-handler: Middleware for handling async operations.
- jsonwebtoken: For generating and verifying JWT tokens.

 ## Development Tools
- nodemon: Tool for automatically restarting the server on file changes.
- prisma: ORM to interact with the database.
- ts-node: TypeScript execution environment for Node.js.
- typescript: Static type checking for JavaScript.

  ### Repository
  -The frontend repository for this project can be found here:
 [Frontend Repository Link](https://github.com/sasobapriyanjana11/Wallet-Watcher-MERN-Front-end)

##  License
 This project is licensed under the MIT License - see the LICENSE file for details.
