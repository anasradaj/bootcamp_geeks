// Exercise 1: Giphy API 

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(giphyUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

//  Exercise 2 : Giphy API

// Fetch 10 GIFs about "sun" starting from position 2
const sunGiphyUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(sunGiphyUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

//  Exercise 3 : Async function

async function fetchStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchStarship();

// Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/* asyncCall() is called.
It immediately logs: calling
Then it waits 2 seconds (because of await resolveAfter2Seconds()).
After 2 seconds, it logs: resolved
Output:
calling
(resume after 2 seconds)
resolved */