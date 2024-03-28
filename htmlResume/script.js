const http = require('http'); // to create HTTP servers and handle HTTP requests and responses.
const fs = require('fs'); //provides file system-related operations, such as reading files
const path = require('path'); //provides utilities for working with file and directory paths

const port = 3001; // the port number on which the server will listen
const filePath = path.join(__dirname, 'index.html');


//creating http server with a builtin method
const server = http.createServer(function(req, res) {

    const requestedUrl = req.url === '/' ? '/index.html' : req.url;
    const fileExtension = path.extname(requestedUrl); //determine the file extension of the requested URL using path.extname()

    // a contentType object that maps file extensions to MIME types. This will be 
    //used to set the Content-Type header in the HTTP response

    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
    };

    //fs.readFile() to read the requested file asynchronously. If an error occurs during file reading, we send a 404 Not Found

    fs.readFile(path.join(__dirname, requestedUrl), (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType[fileExtension] || 'text/plain' });
        res.end(data);
    });
});


server.listen(port, function() {
    console.log("Server running on " + port);
})