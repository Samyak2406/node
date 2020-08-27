const http = require('http');
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + " by method" + req.method);

    if (req.method == "GET") {
        var fileURL;
        if (req.url == "/") {
            fileURL = "/index.html";
        }
        else{
            fileURL = req.url;
        }
        var filePath = path.resolve("./public" + fileURL);
        var extension = path.extname(filePath);
        if (extension == ".html") {
            fs.exists(filePath, (e) => {
                if (!e) {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html");
                    res.end("File Not Found");
                    return;
                }
                else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end("Only HTML files are supported");
            return;
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("Only Get Method Is Supported");
        return;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});