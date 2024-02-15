const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!!');
})

server.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})

server.on('error', (err) => {
    console.log(`Server error: ${err}`);
})