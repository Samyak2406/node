const express = require("express");
const http = require("http");
const morgan = require('morgan');
const bodyParser = require("body-parser");

const hostName = "localhost";
const port = 3000;

const app = express();

app.use(bodyParser.json());//To parse body of a request message which is in JSON Format
app.use(morgan("dev"));
app.use(express.static(__dirname+'/public'));

app.all("/direction", (req,res,next)=>{//in req the data from the json will be there i.e from bodyparser
    req.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();//The other request method will be called after this.....eg get, put, post
});

//Of gerneral direction

app.get("/direction",(req,res,next)=>{
    res.end("Searching your Direction");
});

app.post("/direction",(req,res,next)=>{
    res.end("Will add the direction with name "+req.body.name+ " and description "+ req.body.description);
});

app.put("/direction",(req,res,next)=>{
    res.statusCode=403;
    res.end("We dont do it here");
});

app.delete("/direction",(req,res,next)=>{
    res.end("Deleting everything");
});

//Of specific directions

app.get("/direction/:directionId",(req,res,next)=>{
    res.end("Searchig for "+ req.params.directionId);
});

app.post("/direction/:directionId",(req,res,next)=>{
    res.statusCode = 403;
    res.end("We dont do it here");
});

app.put("/direction/:directionId",(req,res,next)=>{
    res.write("Updating direction with id: "+ req.params.directionId);
    res.end("\nWill update the direction: "+ req.body.description);
});

app.delete("/direction/:directionId",(req,res,next)=>{
    res.end("Deleting direction");
})


//ends

app.use((req,res,next) =>{// Called to set up the server
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("Express Server is Set");
});

const server = http.createServer(app);
server.listen(port, hostName,()=>{
    console.log("Server Started");
});