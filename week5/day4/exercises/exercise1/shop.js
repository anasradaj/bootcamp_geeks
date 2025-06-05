const products = require('./products.js');

function findProductByName(name) {
  return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

const namesToSearch = ['Laptop', 'Book', 'Desk Lamp', 'Coffee Maker', 'Headphones', 'Tablet'];
namesToSearch.forEach(name => {
  const product = findProductByName(name);
  if (product) {
    console.log(`Product: ${product.name}\nPrice: $${product.price}\nCategory: ${product.category}\n`);
  } else {
    console.log(`Product '${name}' not found.\n`);
  }
});

