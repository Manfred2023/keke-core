// server.js
import express from 'express';
import { createServer } from 'node:http';
import {Server} from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("Un client connecté:", socket.id);

    socket.on('question', (arg) => {
        io.emit('response', (arg));
        console.log(arg); // 'world'
    });

    socket.on('carsActivated', (arg) => {
        io.emit('carsResponse', (arg));
        console.log(arg); // 'world'
    });
    socket.on("disconnect", () => {
        console.log("Client déconnecté:", socket.id);
    });
});


server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});