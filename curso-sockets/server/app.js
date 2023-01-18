//Configuracion de express
let express = require('express')
let app = express()
let http = require('http')
let server = require('http').Server(app)

let io =require('socket.io')(server,{
    cors: {
    origin: '*',
    }
});

// app.configure(function(){
// 	app.use(express.static(__dirname + '/static'));
// });

/* Telling express to use the public folder as a static folder. */
app.use(express.static('client'))
/* Creating a route. */
app.get('/hola-mundo',(req, res)=>{
    res.status(200).send({
        message:"Hola mundo"
    })
})

/* Listening for a connection from the client. */
io.on('connection', function(socket){
    console.log("El cliente con IP: "+socket.handshake.address+" se ha conectado");
})
/* Creating a server that listens on port 6677. */
server.listen(3000, function(){
    console.log("El servidor está funcionando en http://localhost:3000");
})

