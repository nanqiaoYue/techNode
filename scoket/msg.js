var sio = require('socket.io');

var IO = function (server) {
    var messages = [];
    var io = sio.listen(server);
    io.on("connection",function (socket){
        socket.on('getAllMessages', function () {
            socket.emit('allMessages', messages)
        });
        socket.on('createMessage', function (message) {
            messages.push(message)
            io.sockets.emit('messageAdded', message)
        });
    });
};

module.exports = IO;