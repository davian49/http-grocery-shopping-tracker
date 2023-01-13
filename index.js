const requests = require('./controller/requestHandler')
const http = require('http');
const PORT = 3000;

const server = http.createServer(requests);

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});