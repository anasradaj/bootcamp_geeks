const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const nounInput = document.getElementById('noun');
const adjInput = document.getElementById('adjective');
const personInput = document.getElementById('person');
const verbInput = document.getElementById('verb');
const placeInput = document.getElementById('place');


let storyTemplates = [
    (noun, adj, person, verb, place) => `Once upon a time, ${person} went to ${place} with a ${adj} ${noun} and decided to ${verb}.`,
    (noun, adj, person, verb, place) => `In ${place}, ${person} found a ${adj} ${noun} and started to ${verb} all day!`,
    (noun, adj, person, verb, place) => `Why did ${person} bring a ${adj} ${noun} to ${place}? To ${verb}, of course!`,
];

let lastStoryIndex = -1;

function getInputs() {
    return {
        noun: nounInput.value.trim(),
        adj: adjInput.value.trim(),
        person: personInput.value.trim(),
        verb: verbInput.value.trim(),
        place: placeInput.value.trim(),
    };
}

function validateInputs(inputs) {
    return Object.values(inputs).every(val => val.length > 0);
}

function generateStory(inputs, index = null) {
    let idx = index;
    if (idx === null) {
        do {
            idx = Math.floor(Math.random() * storyTemplates.length);
        } while (storyTemplates.length > 1 && idx === lastStoryIndex);
    }
    lastStoryIndex = idx;
    return storyTemplates[idx](inputs.noun, inputs.adj, inputs.person, inputs.verb, inputs.place);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = getInputs();
    if (!validateInputs(inputs)) {
        storySpan.textContent = 'Please fill in all fields!';
        return;
    }
    storySpan.textContent = generateStory(inputs);
});

// BONUS: Shuffle button
const shuffleBtn = document.createElement('button');
shuffleBtn.textContent = 'Shuffle Story';
shuffleBtn.type = 'button';
form.parentNode.insertBefore(shuffleBtn, storySpan.parentNode.nextSibling);

shuffleBtn.addEventListener('click', function() {
    const inputs = getInputs();
    if (!validateInputs(inputs)) {
        storySpan.textContent = 'Please fill in all fields!';
        return;
    }
    storySpan.textContent = generateStory(inputs);
});