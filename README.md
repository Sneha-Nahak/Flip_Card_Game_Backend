# Flip Card Game Backend

This repository contains the backend for the Flip Card Game application. It is built with Node.js and Express.js, providing a RESTful API for game logic, user authentication, and score management.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Server](#running-the-server)
* [API Endpoints](#api-endpoints)
* [Environment Variables](#environment-variables)
* [Contributing](#contributing)


## Features


* User authentication (registration, login)
* Secure password hashing
* Score submission and retrieval
* RESTful API design

## Technologies Used

* **Node.js:** JavaScript runtime environment
* **Express.js:** Web application framework for Node.js
* **MongoDB:** NoSQL database
* **Mongoose:** MongoDB object data modeling (ODM) for Node.js
* **dotenv:** For loading environment variables from a `.env` file
* **bcryptjs:** For password hashing (presumably used by `auth.controller.js`)
* **jsonwebtoken:** For creating and verifying JWTs (presumably used by `auth.controller.js` and `auth.middleware.js`)

## Project Structure

The backend is organized into the following directories and files:

```
.
├── config/                  # Configuration files (e.g., database connection)
│   └── db.js                # Database connection setup
├── controllers/             # Route handlers/logic
│   ├── auth.controller.js   # Handles authentication logic (login, register)
│   └── score.controller.js  # Handles score-related logic (submit, get scores)
├── middleware/              # Express.js middleware
│   └── auth.middleware.js   # Middleware for authentication (e.g., JWT verification)
├── models/                  # Mongoose models for MongoDB schemas
│   ├── Score.js             # Defines the schema for game scores
│   └── User.js              # Defines the schema for user data
├── node_modules/            # Installed Node.js modules
├── routes/                  # Express.js API routes
│   ├── auth.routes.js       # Defines authentication-related API endpoints
│   └── score.routes.js      # Defines score-related API endpoints
├── .env                     # Environment variables for the server
├── .gitignore               # Specifies intentionally untracked files to ignore
├── package-lock.json        # Records the exact versions of dependencies
├── package.json             # Lists project dependencies and scripts
└── server.js                # Main server entry point

```

## Getting Started

Follow these instructions to get the backend server up and running on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (LTS version recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or access to a MongoDB Atlas cluster.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sneha-Nahak/Flip_Card_Game_Backend.git
    cd Flip_Card_Game_Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```

### Running the Server

1.  **Create a `.env` file:**
    In the root of the `Flip_Card_Game_Backend` directory, create a file named `.env`. This file will store your environment variables.

2.  **Configure Environment Variables:**
    Add the following variables to your `.env` file. Replace the placeholder values with your actual configuration.

    ```dotenv
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/flipcardgame
    JWT_SECRET=your_super_secret_jwt_key_here # Make this a strong, random string
    ```
    * `PORT`: The port on which the server will listen.
    * `MONGODB_URI`: Your MongoDB connection string.
    * `JWT_SECRET`: A secret key used to sign and verify JSON Web Tokens for authentication. **Generate a strong, unique secret for production.**

3.  **Start the server:**
    ```bash
    npm start # or node server.js
    ```
    The server should now be running and accessible at `http://localhost:<PORT>` (e.g., `http://localhost:5000`).

## API Endpoints


**Authentication:**
* `POST /api/auth/register`: Register a new user.
* `POST /api/auth/login`: Log in an existing user.

**Scores:**
* `POST /api/scores`: Submit a new game score (requires authentication).
* `GET /api/scores`: Get all scores or top scores (can be public or require authentication depending on your design).

## Environment Variables

Ensure you have a `.env` file in the root of the backend directory with the following variables configured:

* `PORT`: The port number the server will run on.
* `MONGODB_URI`: The connection string for your MongoDB database.
* `JWT_SECRET`: A secure key for JWT token signing and verification.

## Contributing

Feel free to open issues or submit pull requests if you find bugs or have suggestions for improvements.

