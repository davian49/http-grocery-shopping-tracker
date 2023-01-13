const groceryItems = require('../model/groceryItem')
const fs = require('fs');
const path = './groceryList.json'


// CRUD

// CREATE
const insertNewGroceryItem = (newGroceryItem) => {
    fs.writeFileSync(path, JSON.stringify(newGroceryItem))
}

// READ
const getItemByName = (itemName) => {
    let item = groceryItems.filter((item) => item.name === itemName)[0];
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