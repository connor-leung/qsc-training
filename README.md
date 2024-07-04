# Queen's Startup Consulting Technical Team Training Module

Welcome to the Queen's Startup Consulting Technical Team Training Module! This repository contains a comprehensive set of lessons designed to equip our technical team with the necessary skills to excel in various areas of software development. The curriculum covers frontend and backend development, databasing, authentication, and AI.

## Table of Contents

- [Introduction](#introduction)
- [Frontend Development](#frontend-development)
  - [HTML and CSS](#html-and-css)
  - [React](#react)
  - [Next.js and Tailwind](#nextjs-and-tailwind)
- [Backend Development](#backend-development)
  - [Express.js](#expressjs)
  - [APIs](#apis)
  - [Postman](#postman)
- [Databasing](#databasing)
  - [MongoDB](#mongodb)
- [Authentication](#authentication)
  - [JWT](#JSONWebTokens)
  - [bcrypt](#bcrypt)
- [AI Integration](#ai-integration)
- [Getting Started](#getting-started)
- [Resources](#resources)

## Introduction

This repository serves as a training module for the Queen's Startup Consulting Technical Team. The lessons are designed to provide a solid foundation in both frontend and backend development, with additional modules on databasing, authentication, and AI. Each section includes hands-on exercises and projects to reinforce learning.

## Frontend Development

### HTML and CSS

Before diving into more advanced topics, we start with a refresher on the basics of web development:

- **HTML:** Learn the structure of web pages, elements, attributes, and how to create a semantic layout.
- **CSS:** Understand how to style web pages using CSS, including selectors, properties, and responsive design techniques.

### React

React is a powerful JavaScript library for building user interfaces. This module covers:

- Introduction to React
- Component-based architecture
- State and props
- Lifecycle methods
- Hooks
- Handling events and forms

### Next.js and Tailwind

Next.js is a React framework that enables server-side rendering and static site generation. Tailwind is a utility-first CSS framework. This module covers:

- Setting up a Next.js project
- Routing and navigation
- Server-side rendering (SSR) and static site generation (SSG)
- Integrating Tailwind CSS for styling
- Advanced features and optimizations

## Backend Development

Backend is the server-side of a web application. It handles the business logic, database interactions, authentication, and authorization, etc. 

### Express.js

Express.js is a backend framework designed for building web applications and APIs using Node.js and JavaScript.

- Handles HTTP requests
- Routing
  - Creating HTTP endpoints to be accessed
- Middleware
  - Processes results from databases

### APIs

A set of rules and protocols that allow different software to communicate with each other. This is in the form of definitions of methods and data formats that applications can use to request and exchange information. This allows for frontend to receive and present data that is calculated in the backend. 

### Postman

Tool: A popular API testing tool that helps developers test, develop, and document APIs.

## Databasing

There are two different types of databases: 

**SQL** (Relational Databases): 
- Organizes data into tables with rows and columns. Examples include MySQL, Oracle Database, and SQLite.
  
**NoSQL** (Non-Relational Databases): 
- Handles data not fitting into tables. Examples include MongoDB and Firebase.

### MongoDB

This repo covers using MongoDB as it provides scalability, performance, and flexibility. 

## Authentication

### JSON Web Tokens

- A JSON object that is used to securely transmit information between parties as a JSON object.
- This information can be verified and trusted because it is digitally signed.

#### A JWT is composed of three parts
- Header
- Payload
- Signature

#### JWT Continued

##### Header
- The type of the token, which is JWT
- The signing algorithm being used, such as HMAC SHA256 or RSA.

##### Payload
The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:
- Registered claims
- Public claims
- Private claims

##### Signature
Ensures its integrity and authenticity. It allows the recipient of the token to verify that it has not been altered and confirms the identity of the issuer.

#### Flow

1. **User Authentication**: When a user successfully logs in using their credentials, a JWT is generated and sent back to the user.
2. **Client Storage**: The client (typically a browser) stores the token, usually in local storage or a cookie.
3. **Subsequent Requests**: For each subsequent request, the client sends the JWT in the HTTP header (usually in the Authorization header using the Bearer schema).
4. **Token Verification**: The server receives the token, verifies it using the secret or public key, and, if valid, processes the request.

### bcrypt

- Bcrypt is a password-hashing function designed to be computationally intensive and resistant to brute-force attacks.

#### Security
- Storing passwords as plain text is highly insecure. Hashing passwords ensures that even if the database is compromised, the actual passwords remain secure.

### Database Connections

- To connect user-specific data, the reference key is used to signify the parent Object.
- In this example, `ref: 'User'`: Specifies that this ObjectId references the User collection.

## AI Integration

## Getting Started

To get started with this training module:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/connor-leung/qsc-training.git

2. **Open repository:**
   ```bash
   cd tech-team-training

3. **Install dependencies:**
   ```bash
   npm install
  
4. **Start the webapp**
    ```bash
   npm start

5. **Start the backend server**
    ```bash
    // Note: A second terminal is required to run both the webapp and backend
   node backend/server.js

## Resources
- [Postman](https://www.postman.com/)
- [MySQL](https://www.mysql.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [MongoDB Database References](https://www.mongodb.com/docs/manual/reference/database-references/)




