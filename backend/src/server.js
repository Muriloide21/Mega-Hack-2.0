const express = require('express');
// const mongoose = require('mongoose');
const socketio = require('socket.io');
// const cors = require('cors');
const http = require('http');

// const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

// mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-imutk.mongodb.net/semana09?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const Rooms = {};
const connectedUsers = {};

io.on('connection', socket => {
    const { user_id , room } = socket.handshake.query;

    //Join user in event room
    socket.join(room);
    var usersDict = {};
    Rooms[room] == undefined ? usersDict = {} : usersDict = Rooms[room];
    usersDict[user_id] = socket.id;
    connectedUsers[user_id] = room;
    console.log(user_id+" Entrou na sala "+ room);
    io.to(room).emit('new_user_has_connected',user_id);

    socket.on('voteQuestion', data => {
        console.log(data)
        io.to(room).emit('voteQuestion', data);
    })

    socket.on('new_user_has_connected', data => {
        console.log(data)
    })

    socket.on('new_message', data => {
        console.log(data)
        io.to(room).emit('new_message', data)
    })




    // io.to('some room').emit('some event');




    socket.on('disconnect', function(){
        //Apagar dos dicionários
        usersDict[user_id] = undefined;
        connectedUsers[user_id] = undefined;
        
        // io.to('some room').emit('some event');
    });
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
})

// app.use(cors());
// app.use(express.json());
// app.use(routes);

server.listen(3333);