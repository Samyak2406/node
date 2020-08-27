const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const directionRouter = express.Router();
directionRouter.use(bodyParser.json());

directionRouter.route("/")
.all((req,res,next)=>{//in req the data from the json will be there i.e from bodyparser
    req.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();//The other request method will be called after this.....eg get, put, post
})
.get((req,res,next)=>{
    res.end("Searching your Direction");
})
.post((req,res,next)=>{
    res.end("Will add the direction with name "+req.body.name+ " and description "+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("We dont do it here");
})
.delete((req,res,next)=>{
    res.end("Deleting everything");
});

module.exports = directionRouter;