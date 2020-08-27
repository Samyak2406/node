const express = require("express");
const http = require("http");
const morgan = require('morgan');
const hostName = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"))
app.use(express.static(__dirname+'/public'));
app.use((req,res,next) =>{// Called to set up the server
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("Express Server is Set");
});

const server = http.createServer(app);
server.listen(port, hostName,()=>{
    console.log("Server Started");
});