var socketio = require('socket.io');
var kraken = require('kraken-js');
var express = require('express');
var app = express();
var io = socketio();

var userCount = 0;
var id = 0;

io.on('connection', function (socket) {
  var clientId = id++;
  userCount++;
  socket.emit('id', clientId);
  io.emit('users', userCount);
  console.log('Client %d Connected', clientId);

  socket.on('disconnect', function () {
    userCount--;
    io.emit('users', userCount);
    console.log('Client %d Disconnected', clientId);
  });
});

app.use(kraken());

app.on('start', function () {
  console.log('Ready to rock ...');
});

io.attach(app.listen(8000));

