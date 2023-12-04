const http = require('http');
const handler = require('./handler');
const PORT = 8083

http.createServer(handler).listen(PORT);

console.log("Listening on port " + PORT + "...");