(function () {
  var socket = io();
  var users = document.querySelector('#users strong');
  var uid = document.querySelector('#uid strong');

  socket.on('users', function (count) {
    users.textContent = count;
  });

  socket.on('id', function (id) {
    uid.textContent = id;
  });
})();
