const printReceipt = require('../main');

it('test', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toBe(
        "Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola\t3\t1\n"+
        "Pepsi-Cola\t5\t2\n"+
        "Dr Pepper\t7\t1\n"+
        "------------------------------------------------------------\n" +
        "Price: 20");
});






