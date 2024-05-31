<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project utilizes NEST.js along with TypeORM to build an API for managing a PostgreSQL database. TypeORM simplifies database interaction by providing an object-relational mapping (ORM) framework, enabling seamless CRUD operations on the Users and WalletAddress tables. The combination of NEST.js and TypeORM ensures efficient development of RESTful API endpoints while maintaining data integrity and handling errors effectively. Comprehensive documentation accompanies the API endpoints, facilitating seamless utilization of the application.



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Setup Instructions
## Database Setup:

Ensure PostgreSQL is installed on your system.
Create a new PostgreSQL database.

##Clone this repository to your local machine.
Install dependencies by running "npm install".
## Environment Configuration:

Add .env and paste below codes with your credentials.
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=*******
DB_NAME=******
```
## Run the Application:

Start the NEST.js application by running "npm run start:dev".
The application will run on the default port specified in the .env file (or port 3000 if not specified).

# API Endpoints
# For Users Table
POST /users/creayeUser
To register new user.

Request Body:

<img width="210" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/2f377e73-d553-4862-bf24-6d208e81bb02">

Response Body:

![image](https://github.com/Anand930singh/CatOff_task/assets/99159646/06d49772-af6e-40b0-9813-c84651e7a58d)

POST /users/logginUser
To Sigin existing User

Request Body:

<img width="189" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/d761ef1f-8eb3-4f50-bec9-079b43fc1366">

Response Body:

<img width="260" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/caec1288-c7a5-40fa-aba3-18789274ce6e">

POST /users/editUser
To edit user details

Request Body:

<img width="234" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/0857ac4d-5756-4cb9-ba67-0a5ddd62081a">

Response Body:

<img width="449" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/adff32e0-9748-4bf1-9186-2f86b779fecc">

POST /users/deleteUser
To delete User

Request Body:

<img width="217" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/3d76b685-7ea8-4af2-a86a-a1603f9c6022">

Response Body:

<img width="264" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/bf36f4aa-6667-4376-8f66-6fa6ca9371d3">


## For WalletAddress Table
POST /walletAddress/setWallet
To add wallet address for specific user.

Request Body:

<img width="286" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/9b25a716-334a-4bc7-a341-cfcffb2bcf75">

Response Body:

<img width="286" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/6ac5a02b-11e1-4b0f-8e15-73f2c937db8c">

POST /walletAddress/getWallet
Get wallet address using user Id

Request Body:

<img width="284" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/24b29aba-62f6-4e7d-af18-6cc294df4c2a">

Response Body:

<img width="276" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/817c96c9-0cf9-4e84-9694-960fc1de2d15">

POST /walletAddress/editWallet
To edit wallet address using userID

Request Body:

<img width="290" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/185c830b-e715-47cc-aafb-af8d4b46f5e7">

Response Body:

<img width="291" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/69b30916-c61e-4eab-8fad-99a8e65532e9">

POST /walletAddress/deleteWallet
To delete walllet address for any specific user using userId

Request Body:

<img width="300" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/9dd7789d-8f38-4d40-af27-8d73f05436f2">

Response Body:

<img width="326" alt="image" src="https://github.com/Anand930singh/CatOff_task/assets/99159646/174de5f5-62a0-4e44-b875-2322828133fd">

