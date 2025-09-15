// 2. creation of a function that processes an array of mixed data types
function handleData(data) {
    return data.map(function (item) {
        switch (item.type) {
            case 'user':
                return "Hello, my name is ".concat(item.name, " and I am ").concat(item.age, " years old.");
            case 'product':
                return "Product ID: ".concat(item.id, ", Price: $").concat(item.price, ".");
            case 'order':
                return "Order ".concat(item.orderId, " has a total of $").concat(item.amount, ".");
            // 3. unexpected cases handling
            default:
                var unhandledItem = item;
                return "Unhandled data type: ".concat(unhandledItem);
        }
    });
}
// Data test
var mixedData = [
    { type: 'user', name: 'Anas', age: 30 },
    { type: 'product', id: 101, price: 99.99 },
    { type: 'order', orderId: 'XYZ-123', amount: 250.50 },
    { type: 'user', name: 'Alice', age: 25 },
];
var results = handleData(mixedData);
results.forEach(function (result) { return console.log(result); });
