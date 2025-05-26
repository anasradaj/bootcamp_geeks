// Part I
function makeJuice(size) {
    function addIngredients(first, second, third) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
        output.appendChild(p);
    }

    // Invoke the inner function with some ingredients
    addIngredients('apple', 'orange', 'carrot');
}

// Invoke the outer function
makeJuice('medium');

// Part II
function makeJuice2(size) {
    const ingredients = [];

    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }

    function displayJuice() {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
        output.appendChild(p);
    }

    // Invoke addIngredients twice for 6 ingredients
    addIngredients('apple', 'orange', 'carrot');
    addIngredients('mango', 'pineapple', 'strawberry');

    // Display the final juice
    displayJuice();
}

// Invoke the second version
makeJuice2('large');