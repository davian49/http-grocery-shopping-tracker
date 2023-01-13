const GroceryItem = require('./model/groceryItem')
const requests = require('./controller/requestHandler')
const http = require('http');
const PORT = 3000;



// const server = http.createServer()
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write(json);
//   res.end();
// }).listen(PORT);

const server = http.createServer(requests);

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});








// const validateItem = (item) => {
//   return !(item.name.length <=1 || item.price <= 0);
// }


