const GROCERY_ITEMS = require('../model/groceryItem')
const fs = require('fs');
const path = './groceryList.json'

// CRUD

// CREATE
/**
 * Inserts new GroceryItem to list. Creates new list if on does not exist
 * @param {GroceryItem} newGroceryItem 
 */
function insertNewGroceryItem(newGroceryItem) {

    // appends GroceryItem to list
    GROCERY_ITEMS.push(newGroceryItem)
    // converts back to JSON for database (groceryList.json)
    fs.writeFileSync(path, JSON.stringify(GROCERY_ITEMS));
}

// READ
/**
 * Filters GroceryItem from list by name
 * @param {GroceryItem} itemName 
 * @returns GroceryItem with matching name, or null if GroceryItem does not exists
 */
const getItemByName = (itemName) => {
    let item = GROCERY_ITEMS.filter((item) => item.name === itemName)[0];
    if (item) {
        return item
    } else {
        return null
    }
}
/**
 * Returns list of ALL GroceryItems
 * @returns GroceryItem list
 */
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