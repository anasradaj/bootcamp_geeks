// Global variable to store all bold items
let allBoldItems;

// Function to collect all bold items inside the paragraph
function getBoldItems() {
    const paragraph = document.getElementById('sentence');
    allBoldItems = paragraph.getElementsByTagName('strong');
}

// Function to highlight all bold items (set color to blue)
function highlight() {
    for (let item of allBoldItems) {
        item.style.color = 'blue';
    }
}

// Function to return all bold items to default color (black)
function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = 'black';
    }
}

// Initialize and set up event listeners
getBoldItems();
const paragraph = document.getElementById('sentence');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);