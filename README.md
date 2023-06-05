With this application users are able to create, update and delete cars.
Table of Contents
Features
## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [API Routes](#api-routes)

- [Frequently Asked Questions](#frequently-asked-questions)

## Features
Car mangement consists of the following features:

Authentication
- Authentication
  - It uses JSON Web Token (JWT) for authentication.
  - Token is generated on user login.
  - Token is perpetually verified to check the state of the user if logged in or not.
  - User is assigned normal role on registration.
  - Admin User is pre-seeded into the application with administrative privileges.
- Normal Users
  - Users can register.
  - Users can log in.
  - Users can view all cars in the catalogue.
 
## Technologies

Car management system makes use of a host of modern technologies. The core ones are:

- **React**: This project makes use of the React JavaScript library to build the interface. React is used for building web pages that are structured as a collection of components. For more information, see [this link](https://reactjs.org/).
- **ECMAScript 6**: Also known as ES2015, this is a version of JavaScript with next-generation features like arrow functions, generators, enhanced object literals, spread operators, and more. ES2015 is used in many areas of this project. See [this link](https://www.ecma-international.org/ecma-262/6.0/) for details.
- **Node.js**: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side. See [this link](https://nodejs.org/en/) for details.
- **Express.js**: Express.js is a web application framework for Node.js. It is designed for building web applications and APIs. See [this link](https://expressjs.com/) for details.
- **MongoDB**: This application uses MongoDB for database management.
## Installation and Setup

To install this application, follow these steps:

1. Git clone this repository
2. CD to the created directory
3. Run `npm install`
4. Run `npm start` to start the server
5. Install MongoDB
6. Create a MongoDB database
7. Navigate to the server directory and run migrations





run npm start
# API Routes

Here are the available API routes for this application:

- `POST: /api/db/users/signup` API route for users to create accounts and login to the application.
- `POST: /api/db/users/signin` (username, password) API route that allows users to add new cars.
- `GET: /api/cars` API route that allows users to get all cars in the library.
- `PUT: /api/cars:id` API route that allows users to modify a book in the library.
- `DELETE: /api/cars/delete/:bookId` API route that allows an admin to delete books.


For more details on the available API routes, see [API Routes](#api-routes) section.
# Frequently Asked Questions

Here are some frequently asked questions about this application:

- Q: How do I add a new car to the catalogue?
  - A: To add a new car, use the `POST: /api/db/users/signin` API route.
- Q: How do I modify a car in the catalogue?
  - A: To modify a car, use the `PUT: /api/cars:id` API route.
- Q: How do I delete a car from the library?
  - A: To delete a book, use the `DELETE: /api/cars/delete/:bookId` API route.



[author]: Muhammad Awais Anwar
 

