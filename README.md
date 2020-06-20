# node-swagger-autodocs
automatic generation of docs using swagger and node

In this example application, we use Swagger JSDoc and Swagger UI Express to automatically generate OpenAPI documentation. We create a simple NodeJS API server to demonstrate the power of autogenerated documentation.

Running the Server
With NodeJS installed, you can started the server by running,

node app.js
OR

npm run start
Accessing the Docs
With your local server running, the generated docs are available here: http://localhost:5000/api-docs

Development
This simple server can be easily extended. After cloning this repository you can start developing locally.

Locally (without Docker)
Install Nodemon, Nodemon will watch for file changes and restart the NodeJS process. This allows for faster development and testing.
npm install -g nodemon
With Nodemon installed, start the server using Nodemon
nodemon app.js
OR

npm run start:dev
Using Docker
I prefer to use Docker for local development wherever possible. This allows me to have a consistent development environment.

Start Docker Container
With Docker installed, we can start a container using the latest NodeJS Docker image.

docker run -it --rm -p 5000:5000 -v $(pwd):/api -w="/api" node bash
Start the application in development mode using Nodemon inside your Docker Container

npm run start:dev
To stop your running NodeJS API server

ctrl + c
To quit your Docker Container development environment, in your terminal:

exit
This will cleanup any running containers, (note: the Docker image will still exist on your machine)