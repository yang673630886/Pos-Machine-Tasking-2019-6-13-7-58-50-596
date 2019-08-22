var itemInfos = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]

var carItemIds = ['0001', '0003', '0005', '0003']

function countedItems(itemIds) {
    let itemNum = [];
    for (let i = 0; i < itemIds.length; i++) {
        let index = itemNum.findIndex(ele => ele.id === itemIds[i])
        if (index === -1) {
            itemNum.push({ id: itemIds[i], count: 1 })
        }
        else {
            itemNum[index].count++;
        }
    }
    return itemNum;
}

function getItem(itemNum) {
    let carItemInfos = [];
    for (let i = 0; i < itemNum.length; i++) {
        for (let j = 0; j < itemInfos.length; j++)

            if (itemNum[i].id === itemInfos[j].id) {
                carItemInfos.push({
                    id: itemNum[i].id,
                    name: itemInfos[j].name,
                    price: itemInfos[j].price,
                    count: itemNum[i].count
                })
            }
    }
    return carItemInfos;
}

function calculateItemTotal(carItemInfos) {
    let carItemTotal = 0;
    for (let i = 0; i < carItemInfos.length; i++) {
        carItemTotal += (carItemInfos[i].price * carItemInfos[i].count)
    }
    return carItemTotal;
}

function createReceiptBodyLine(carItemInfo) {
    let result = "";
    result = `${carItemInfo.name}\t${carItemInfo.price}\t${carItemInfo.count}\n`
    return result
}

function createReceiptBody(carItemInfos) {
    let result = '';
    for (let i = 0; i < carItemInfos.length; i++) {
        result += createReceiptBodyLine(carItemInfos[i])
    }
    return result;
}

function genreateReceipt(receiptBody, itemTotal) {
    let result = '';
    result =
        "Receipts\n" +
        "------------------------------------------------------------\n" +
        receiptBody +
        "------------------------------------------------------------\n" +
        "Price: " + itemTotal
    return result;

}

function printReceipt(carItemIds) {
    let carItemCount = countedItems(carItemIds);
    let carItemInfo = getItem(carItemCount);
    let carItemTotal = calculateItemTotal(carItemInfo);
    let receiptBody = createReceiptBody(carItemInfo);
    // console.log(receiptBody)
    let receipt = genreateReceipt(receiptBody, carItemTotal);
    return receipt;
}

module.exports = printReceipt;

// console.log(printReceipt(carItemIds));