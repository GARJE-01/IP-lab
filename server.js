mkdir simple-http-server
cd simple-http-server

npm init -y

Create a new file and name it server.js

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>I am from the server, hello! How are you?</h1>");
});

server.listen(3000, () => {
    console.log("Server has started on port 3000");
});


node server.js

or

import express from 'express'; 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
res.send('Hello, Node.js!'); 
}); 
app.listen(port, () => { 
console.log(`Server is running at h p://localhost:${port}`); 
});