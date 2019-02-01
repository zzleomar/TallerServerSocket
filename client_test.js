const socketC = require('socket.io-client')

var url = `http://192.168.2.135:4000`
console.log(url)
const ioClinet = socketC(url)

ioClinet.on('event_client', (msj) => {
  console.log('prueba de client')
})
