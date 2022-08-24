const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.get("/", (req, res) => {
    res.send("Welcome to my chat app!")
})

io.on("connection", () => {
    console.log("a user connected")
})

server.listen(3000, () => {
    console.log("Server is listening on *:3000")
})