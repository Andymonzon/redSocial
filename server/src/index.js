import app from "./app.js"
import { PORT } from "./config.js"
import { connectDb } from "./db.js"
import http from "http"
import { Server } from "socket.io"

const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
    console.log('client connect')

    socket.on('message', (data) => {
        io.emit('message', data)
    })

    socket.on('liked', (data) => {
        io.emit('liked', data)
    })

    socket.on('deleted', (data) => {
        io.emit('deleted', data)
    })

    socket.on('updated', (data) => {
        io.emit('updated', data)
    })
})

connectDb()
server.listen(PORT)
console.log(`Server on port ${PORT}`)
