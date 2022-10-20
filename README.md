# MongoDB Simple CRUD

This repo contains a simple CRUD for mongoDB made in node js using express to make the api endpoints to test it and mongoose to comunicate and handle the interaction with the Database

NOTES:
- Generate an .env file in the root of the project and set the variable "MONGODB_URL" with the connection string
- This CRUD originaly was implemented using a MongoDB as a service on the cloud, for that reason the connection needs an tls certificate, if it´s not the case delete those things in mongoose.connect()