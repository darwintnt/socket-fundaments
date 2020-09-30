const { io } = require('../server');

io.on('connection', (client) => {
  console.log('cliente conectado');

  client.emit('enviarMensaje', {
    usuario: 'ADMINISTRADOR',
    mensaje: 'HOLA DESDE EL SERVIDOR'
  });

  client.on('disconnect', () => {
    console.log('cliente desconectado');
  });

  // Escuchar el cliente
  client.on('enviarMensaje', (data, cb) => {

    console.log(data);

    client.broadcast.emit('enviarMensaje', data);



    // if (msg.name) {
    //   cb({
    //     resp: 'Todo salio bien'
    //   });
    // } else {
    //   cb({
    //     resp: 'Todo salio mal!!'
    //   });
    // }

  });
});