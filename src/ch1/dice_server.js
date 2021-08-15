const http = require('http');
const here = require('here').here;
const contentType = { 'Content-Type': 'text/html;charset=utf8' };

const showIndexPage = (req, res) => {
  res.writeHead(200, contentType);
  const html = here(/*
    <h1>Direction to Dice Play Page</h1>
    <p><a href="/dice/6">6 Dimensional Dice</a></p>
    <p><a href="/dice/12">12 Dimensional Dice</a></p>
  */).unindent();
  res.end(html);
};

const showDicePage = (req, res) => {
  res.writeHead(200, contentType);
  const a = req.url.split('/');
  const num = parseInt(a[2]);
  const rnd = Math.floor(Math.random() * num) + 1;
  res.end(`<p style="font-size: 72px;">${rnd}</p>`);
};

const handler = (req, res) => {
  const url = req.url;
  if (url === '/' || url === '/index.html') {
    showIndexPage(req, res);
    return;
  }
  if (url.includes('/dice/')) {
    showDicePage(req, res);
    return;
  }
  res.writeHead(404, contentType);
  res.end('404 Not Found');
};

const server = http.createServer(handler);
server.listen(8081);
