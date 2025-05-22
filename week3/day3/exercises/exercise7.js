// Exercise 7 : My Book List

document.addEventListener('DOMContentLoaded', function() {
    const allBooks = [
        {
            title: 'Avengers : Endgame',
            author: ' Anthony Russo, Joe Russo',
            image: 'https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg',
            alreadyRead: true
        },
        {
            title: 'Clean Code',
            author: 'Robert C. Martin',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
            alreadyRead: false
        }
    ];

    const section = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        const details = document.createElement('p');
        details.textContent = `${book.title} written by ${book.author}`;
        if (book.alreadyRead) {
            details.style.color = 'red';
        }
        const img = document.createElement('img');
        img.src = book.image;
        img.style.width = '100px';
        bookDiv.appendChild(details);
        bookDiv.appendChild(img);
        section.appendChild(bookDiv);
    });
});
