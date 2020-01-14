const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))



port = 3000
const server = app.listen(port, () => {
    console.log(` listen to port : ${port} `)
});

const io = require("socket.io")(server)

io.on("connection",(socket) => {
    socket.on('chat',(data) => {
        console.log("data",data)
        io.emit("chat", {data : data})
    })
    console.log("a user connected")
})



