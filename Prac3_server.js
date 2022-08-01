const express = require("express");
const app = express();

//var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

let id = 1;
const projects = [
  {
    id:id,
    info: `Project Number # ${id} `,
    img:null,
  },
  {
    id: ++id,
    info: `Project Number # ${id} `,
    img:null,
  },
  {
    id: ++id,
    info: `Project Number # ${id} `,
    img:null,
  }, {
    id: ++id,
    info: `Project Number # ${id} `,
    img:null,
  }, {
    id: ++id,
    info: `Project Number # ${id} `,
    img:null,
    
  },
  
]

app.get("/projects", function (req, res) {
  res.json(projects);
});

//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});

http.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});
