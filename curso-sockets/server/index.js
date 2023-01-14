//Configuracion de express
let express = require('express')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
/* Telling express to use the public folder as a static folder. */
app.use(express.static('client'))
/* Creating a route. */
app.get('/hola-mundo',(req, res)=>{
    res.status(200).send({
        message:"Hola mundo"
    })
})

/* Listening for a connection from the client. */
io.on('connection', (socket)=>{
    console.log("El nodo con IP: "+socket.handshake.address+" se ha conectado");
})
/* Creating a server that listens on port 6677. */
server.listen(6677, ()=>{
    console.log("El servidor está funcionando en http://localhost:6677");
})

