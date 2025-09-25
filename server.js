// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("Un client connecté:", socket.id);

    socket.on("updatePosition", (data) => {
        console.log("Nouvelle position:", data);
        io.emit("positionUpdated", data);
    });

    socket.on("disconnect", () => {
        console.log("Client déconnecté:", socket.id);
    });
});

