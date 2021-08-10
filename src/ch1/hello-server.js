const http = require('http');

const handler = (req, res) => {
  console.log('url:', req.url);
  console.log('method', req.method);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1>\n');
};

const server = http.createServer(handler);
server.listen(8081);
