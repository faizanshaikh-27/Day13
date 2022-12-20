const http = require('http');
console.log(http);

const server = http.createServer( (req, res) => {
    res.end('Hello, this is a http module');
});


server.listen(8000, () => {
    console.log('Listening to port no 8000');
});