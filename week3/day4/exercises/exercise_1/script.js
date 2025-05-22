// 1. Retrieve the h1 and log it
const h1 = document.querySelector('article h1');
console.log(h1);


// 2. Remove the last paragraph in the <article>
const article = document.querySelector('article');
const lastP = article.querySelector('p:last-of-type');
if (lastP) {
    article.removeChild(lastP);
}

// 3. Change h2 background color to red on click
const h2 = document.querySelector('article h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';
});

// 4. Hide h3 on click
const h3 = document.querySelector('article h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none';
});

// 5. Make all paragraphs bold when button is clicked
const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', function() {
    const paragraphs = article.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// BONUS 1: h1 font size random on hover
h1.addEventListener('mouseenter', function() {
    const randomSize = Math.floor(Math.random() * 101); // 0-100px
    h1.style.fontSize = randomSize + 'px';
});
h1.addEventListener('mouseleave', function() {
    h1.style.fontSize = '';
});

// BONUS 2: Fade out 2nd paragraph on hover
const secondP = article.querySelectorAll('p')[1];
if (secondP) {
    secondP.classList.add('fadeable');
    secondP.addEventListener('mouseenter', function() {
        secondP.classList.add('fade-out');
    });
    secondP.addEventListener('mouseleave', function() {
        secondP.classList.remove('fade-out');
    });
}