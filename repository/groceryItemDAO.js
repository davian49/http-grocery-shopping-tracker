const GROCERY_ITEMS = require('../model/groceryItem')
const fs = require('fs');
const path = './groceryList.json'


// CRUD

// CREATE
function insertNewGroceryItem(newGroceryItem) {

    // appends GroceryItem to list
    GROCERY_ITEMS.push(newGroceryItem)
    // converts back to JSON for database (groceryList.json)
    fs.writeFileSync(path, JSON.stringify(GROCERY_ITEMS));
}

// READ
const getItemByName = (itemName) => {
    let item = GROCERY_ITEMS.filter((item) => item.name === itemName)[0];
    if (item) {
        return item
    } else {
        return null
    }
}

const getGroceryItems = () => {
    list = fs.readFileSync(path, 'utf-8')
    groceryItemList = JSON.stringify(list)
    return groceryItemList
}

module.exports = {
    insertNewGroceryItem,
    getItemByName,
    getGroceryItems
}