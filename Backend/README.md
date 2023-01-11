<h2 align="center">React-Blog-Api </h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/web3-wizard/React-Blog-App/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/web3-wizard/React-Blog-App/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> I have created this api for my react blogging website. This api is talking to my mongodb database.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This is a REST API for a simple blog application built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on blog posts and comments.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js
MongoDB
```

### Installing

Clone the repository:

```
https://github.com/web3-wizard/React-Blog-App.git
```

Install the dependencies:

```
npm install
```

Create a .env file in the root directory with the following variables:

```
CONNECTION_STRING=<your_mongodb_uri>
```

Start the server:

```
npm run start
```

## 🔧 Running the tests <a name = "tests"></a>

Test your mongodb connection

```
npm run test
```

## 🎈 Usage <a name="usage"></a>

The API will be available at http://localhost:8080

### API Endpoints

#### blogs

- `GET /api/blogs`: retrieve all blog post
- `GET /api/blogs/:id`: retrieve a single blog post
- `POST /api/blogs`: create a new blog post
- `PUT /api/blogs/:id`: update a blog post
- `DELETE /api/blogs/:id`: delete a blog post

#### users

- `GET /api/users`: retrieve all users
- `GET /api/users/:id`: retrieve a single user
- `POST /api/users`: create a new user
- `PUT /api/users/:id`: update a user profile
- `DELETE /api/users/:id`: delete a user

## 🚀 Deployment <a name = "deployment"></a>

The easiest way to deploy the project to a live system is by using a platform like [Heroku](https://www.heroku.com/). You will need to create a new Heroku app and link it to your GitHub repository.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@web3-wizard](https://github.com/web3-wizard) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- References -
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
