// Create web server with Node.js
// Path: server.js
// const http = require("http");
// const port = 3000;
// const server = http.createServer(function(req, res)
// {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>Hello World</h1>");
// });
// server.listen(port, function()
// {
//     console.log("Server listening on: http://localhost:%s", port);
// });
// Create web server with Express
// Path: server.js
// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/", function(req, res)
// {
//     res.send("<h1>Hello World</h1>");
// });
// app.listen(port, function()
// {
//     console.log("Server listening on: http://localhost:%s", port);
// });
// // Create web server with Express and EJS
// Path: server.js
// const express = require("express");
// const app = express();
// const port = 3000;
// app.set("view engine", "ejs");
// app.get("/", function(req, res)
// {
//     res.render("index");
// });
// app.listen(port, function()
// {
//     console.log("Server listening on: http://localhost:%s", port);
// });
// Path: views/index.ejs
// <h1>Hello World</h1>
// Using Nodemon
// Path: package.json
// {
//     "name": "myapp",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//         "start": "node server",
//         "dev": "nodemon server"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "ejs": "^2.5.6",
//         "express": "^4.16.2"
//     },
//     "devDependencies": {
//         "nodemon": "^1.14.11"
//     }
// }
// Using Babel
// Path: package.json
// {
//     "name": "myapp",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js
