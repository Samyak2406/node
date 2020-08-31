const express = require("express");
const http = require("http");
const morgan = require('morgan');
const bodyParser = require("body-parser");
const directionRouter = require("./routes/directionRoute.js");
const hostName = "localhost";
const port = 3000;

const app = express();

app.use(bodyParser.json());//To parse body of a request message which is in JSON Format
app.use(morgan("dev"));
app.use(express.static(__dirname+'/public'));
app.use("/direction",directionRouter);

app.use((req,res,next) =>{// Called to set up the server
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("Express Server is Set");
});

const server = http.createServer(app);
server.listen(port, hostName,()=>{
    console.log("Server Started");
});