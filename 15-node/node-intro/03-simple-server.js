const http = require('http'); // Node standard library

http.createServer((req, res) => {
  // This callback runs every time a request hits the server.
  console.log(`Serving request: ${ req.method } ${ req.url }`); // Lazy way to do logging.

  res.writeHeader(200, {'Content-Type': 'text/plain'});

  // This is terribly tedious
  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello from Nobody in Particular'); // Catch all
  }

}).listen(1337); // ELITE

console.log('Server is running at http://localhost:1337');
