const socket = io();

socket.on('connect', () => {
  console.log('conectado al servidor');
});

// on -> escuchar eventos
socket.on('disconnect', () => {
  console.log('se perdio conexión al servidor');
});

// emit -> Envia información
socket.emit('enviarMensaje', {
  namei: 'CLIENTE',
  message: 'HOLA DESDE EL NAVEGADOR'
}, (res) => {
  console.log('respuesta server', res);
});

// Escuchar información
socket.on('enviarMensaje', (msg) => {
  console.log(msg);
});