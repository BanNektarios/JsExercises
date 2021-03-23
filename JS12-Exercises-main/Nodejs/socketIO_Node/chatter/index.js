const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/javascript.html'));
});

app.get('/java', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/java.html'));
});

app.get('/csharp', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/csharp.html'));
});




// tech namespace
const tech = io.of('/tech');

tech.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', `New user joined ${data.room} room`);
    });

    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        tech.in(data.room).emit('message', data.msg);
    });
    socket.on('disconnect', (data) => {
        console.log('user disconnected');
        tech.emit('message', 'user disconnected');
    })
});