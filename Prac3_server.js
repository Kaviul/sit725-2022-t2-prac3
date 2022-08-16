var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/Prac3_index.html');
})

app.listen(port,()=>{
    console.log("App listening to: " + port)
})