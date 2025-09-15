// 1. types definition
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

// type union 
type DataItem = User | Product | Order;

// 2. creation of a function that processes an array of mixed data types
function handleData(data: DataItem[]): string[] {
  return data.map((item) => {
    switch (item.type) {
      case 'user':
        return `Hello, my name is ${item.name} and I am ${item.age} years old.`;
      
      case 'product':
        return `Product ID: ${item.id}, Price: $${item.price}.`;
        
      case 'order':
        return `Order ${item.orderId} has a total of $${item.amount}.`;

      // 3. unexpected cases handling
      default:
        const unhandledItem: never = item;
        return `Unhandled data type: ${unhandledItem}`;
    }
  });
}

// Data test
const mixedData: DataItem[] = [
  { type: 'user', name: 'Anas', age: 30 },
  { type: 'product', id: 101, price: 99.99 },
  { type: 'order', orderId: 'XYZ-123', amount: 250.50 },
  { type: 'user', name: 'Alice', age: 25 },
];

const results = handleData(mixedData);
results.forEach(result => console.log(result));