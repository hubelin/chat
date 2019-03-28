const io = require('socket.io')();

console.log('io', io);
io.on('connection', client => {
  client.on('message', text => {
    client.emit('serverMessage', text);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
