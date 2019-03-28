import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
function showMessages(text, cb) {
  socket.emit('message', text);
  socket.on('serverMessage', text => cb(null, text));
}
export { showMessages };
