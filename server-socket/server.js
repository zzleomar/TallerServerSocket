const express = require('express')

require('dotenv').config()

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('event', (msg) => {
    console.log(`message: ${msg}`)
  })
})

http.listen(process.env.PORT_SOCKET, () => {
  console.log(`listeng on ${process.env.IP_SOCKET}:${process.env.PORT_SOCKET}`)
})
