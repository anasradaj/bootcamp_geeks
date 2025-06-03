const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const GIF_FORM = document.getElementById('gifForm');
const CATEGORY_INPUT = document.getElementById('categoryInput');
const GIF_CONTAINER = document.getElementById('gifContainer');
const DELETE_ALL_BUTTON = document.getElementById('deleteAllGifs');

async function fetchRandomGif(category) {
    try {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error("Error fetching GIF:", error);
        return null; 
    }
}

function appendGifToDOM(gifData) {
    if (!gifData || !gifData.images || !gifData.images.original || !gifData.images.original.url) {
        console.warn("Invalid GIF data received.");
        return;
    }

    const gifCard = document.createElement('div');
    gifCard.classList.add('gif-card');

    const gifImage = document.createElement('img');
    gifImage.src = gifData.images.original.url;
    gifImage.alt = gifData.title || 'Random GIF';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-single-gif');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => {
        gifCard.remove();
    });

    const downloadLink = document.createElement('a');
    downloadLink.href = gifData.images.original.url;
    downloadLink.download = '';
    downloadLink.textContent = 'DOWNLOAD';
    downloadLink.classList.add('download-gif-button');
    downloadLink.target = '_blank';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'gif-button-container';
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(downloadLink);

    gifCard.appendChild(gifImage);
    gifCard.appendChild(buttonContainer);
    GIF_CONTAINER.appendChild(gifCard);
}

GIF_FORM.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const category = CATEGORY_INPUT.value.trim();
    if (category) {
        const gif = await fetchRandomGif(category);
        if (gif) {
            appendGifToDOM(gif);
        } else {
            alert('Could not find a GIF for that category. Please try another one!');
        }
        CATEGORY_INPUT.value = ''; 
    } else {
        alert('Please enter a category to search for a GIF.');
    }
});


DELETE_ALL_BUTTON.addEventListener('click', () => {
    GIF_CONTAINER.innerHTML = '';
});