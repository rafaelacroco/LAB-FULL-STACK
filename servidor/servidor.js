let colors = require("colors");
let http = require("http");
var express = require("express");
let bodyParser = require("body-parser")

var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);

server.listen(3000);


console.log("servidor funcionando...".rainbow)