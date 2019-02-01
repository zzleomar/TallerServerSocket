const SocketIoClient = require('socket.io-client')
const EventEmitter = require('events')

require('dotenv').config()

module.exports = class EventManager extends EventEmitter {
  constructor () {
    super()
    this.ioClient = SocketIoClient(`http://${process.env.IP_SOCKET}:${process.env.PORT_SOCKET}`)
    this.status = 'Disconnected'
    this.default('connect_error', 'Connection Failed')
    this.default('connect', 'Connected')
    this.default('disconnect', 'Disconnected')
  }

  default (nameEvent, message) {
    this.ioClient.on(nameEvent, () => {
      this.status = message
    })
  }

  sub () {
    this.on('event', (message) => {
      this.ioClient.emit('event', message)
    })
  }

  pub (message) {
    this.emit('event', message)
  }
}
