const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3001;
const filePath = path.join(__dirname, 'index.html');

const server = http.createServer(function(req, res) {

    const requestedUrl = req.url === '/' ? '/index.html' : req.url;
    const fileExtension = path.extname(requestedUrl);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
    };
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