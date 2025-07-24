"use strict";
class Product {
    constructor(id, _name, price) {
        this.id = id;
        this._name = _name;
        this.price = price;
    }
    getProductInfo() {
        return `Name: ${this._name}, Price: $${this.price}`;
    }
}
const product1 = new Product(1, "desktop", 1200);
console.log(product1.getProductInfo());
// product1.id = 102;
