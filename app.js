const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

let userList = [];

io.on('connection', (socket) => {
    console.log(socket.id + ' connected!!!!');
});

// let port = process.env.PORT || 3000;

server.listen(5500, () => {
    console.log('listening on *:5500');
});