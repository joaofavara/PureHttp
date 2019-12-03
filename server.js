const http = require('http');
const fs = require('fs')
const data = {
    nome: 'Julivana',
    id: 1234
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/api':
            res.writeHeader(200, {"Content-Type": "application/json"});  
            res.end(JSON.stringify(data));
        break;
        case '/html':
            res.writeHeader(200, {"Content-Type": "text/html"});  
            res.end(fs.readFileSync('./front.html'));
        break;
    }
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\n');
});

server.listen(8080);
