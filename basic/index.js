const http = require('http');
http.createServer();

const math = require('./math.js');

const result = math.sum(1, 2);

console.log(result);