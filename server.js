const express = require('express');
// const { Socket } = require('socket.io');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log('connection');

    socket.on('sendChatToServer', (message) => {
        console.log(message);

        // io.sockets.emit('sendChatToClient', message); // both of messages shown
        socket.broadcast.emit('sendChatToClient', message); // only show the other party's messages
    });

    // socket.emit();

    socket.on('disconnect', (socket) => {
        console.log('Disconnect');
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});