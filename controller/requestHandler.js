const url = require('url');
const groceryItemDAO = require('../repository/groceryItemDAO');

const requestHandler = (req, res) => {
    if (req.url === '/grocery' && req.method === 'POST') {
        let body = '';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                // do something with the data
                // first validate it
                let parsedGroceryItem = JSON.parse(body);
                if(validateNewGroceryItem(parsedGroceryItem)){
                    groceryItemDAO.insertNewGroceryItem(parsedGroceryItem)
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(201);
                    res.end("<h1>Grocery Item added to list!</h1>");
                }else{
                    res.setHeader('Content-Type', 'text/html');
                    res.writeHead(406);
                    res.end("<h1>Invalid GroceryItem name, price, or quantity!</h1>");
                }
            })

    } else if (req.method === 'GET') {
        let query = url.parse(req.url, true).query;
    
        switch(req.url) {
            case "/":
                // logger.info(`${req.method} recevied to ${req.url}`);
                res.setHeader("Content-Type", 'text/html');
                res.writeHead(200);
                res.end("<h1>Grocery Shopping Tracker</h1>");
                break;
            case "/grocery":
                // logger.info(`${req.method} recevied to ${req.url}`);
                let items = groceryItemDAO.getGroceryItems();
                res.setHeader("Content-Type", 'application/json');
                res.writeHead(200);
                res.end(items);
                break;
            case `/grocery/?name=${query.name}`:
                // logger.info(`${req.method} recevied to ${req.url}`);
                res.setHeader("Content-Type", 'text/html');
                let item = groceryItemDAO.getItemByName(query.name);
                if(!item){
                    //logger.info(`Invalid name query received : ${query.name}`);
                    res.writeHead(404);
                    res.end("<h1>GroceryItem not on list</h1>");
                }else{
                    //logger.info(`Name Query successful: ${person}`);
                    res.setHeader("Content-Type", 'application/json');
                    res.writeHead(200);
                    res.end(item);
                }
                break;
            default:
                // logger.warn("GET Request received to invalid endpoint")
                res.writeHead(404);
                res.end("<h1>Resource not found (404)</h1>");
        }
    } else if (req.url === '/grocery/save' && req.method === 'POST') {
        
    } else if (req.url === '/grocery/load' && req.method === 'POST') {
    
    } else {
    
    }
};

const validateNewGroceryItem = (groceryItem) => {
    return !(groceryItem.name.length <= 1 || groceryItem.quantity <= 0 || groceryItem.price <= 0)
}

module.exports = requestHandler