class Product {
    readonly id: number;
    public _name: string;
    public price: number;
    constructor(id: number, _name: string, price: number) {
        this.id = id;
        this._name = _name;
        this.price = price;
    }
    public getProductInfo(): string {
        return `Name: ${this._name}, Price: $${this.price}`;
    }
}

const product1 = new Product(1, "desktop", 1200);
console.log(product1.getProductInfo());
// product1.id = 102;