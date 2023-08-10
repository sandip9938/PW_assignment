let exchangeRate = 80;
let storeInventory = {
    item1: 112.50, // USD
    item2: 50.75,  // USD
    item3: 200, // USD
    item4: 300, // USD
    item5: 500,  // USD
    item6: 2000, // USD
    item7: 1000, // USD
    item8: 5,  // USD
    item9: 20, // USD
    item10: 10000, // USD
    item11: 50000,  // USD
    item12: 207, // USD
};

let inventoryInRupees = Object.keys(storeInventory).map(item => ({
    [item]: storeInventory[item] * exchangeRate
}));

console.log(inventoryInRupees);
