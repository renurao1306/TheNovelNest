const http = require('http');
const url = require('url');
const port = 3001;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const path1 = path.replace(/^\/+|\/+$/g, '');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (path1 === '') {
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (path1 === 'about') {
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    } else if (path1 === 'contact') {
        res.end('<h1>Contact Us</h1><p>Contact info goes here.</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
    }
});



server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

