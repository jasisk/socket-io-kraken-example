var socketio = require('socket.io');
var kraken = require('kraken-js');
var express = require('express');
var app = express();
var io = socketio();

io.on('connection', function (socket) {
  var sockets = io.of('/').sockets;

  socket.emit('id', socket.id);
  io.emit('users', sockets.length);
  console.log('Client %s Connected', socket.id);

  socket.on('disconnect', function () {
    io.emit('users', sockets.length);
    console.log('Client %s Disconnected', socket.id);
  });
});

app.use(kraken());

app.on('start', function () {
  console.log('Ready to rock ...');
});

io.attach(app.listen(8000));

