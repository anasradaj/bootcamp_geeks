// Book API Frontend JS
const booksDiv = document.getElementById('books');
const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('publishedYear');
const bookIdInput = document.getElementById('book-id');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

async function fetchBooks() {
  const res = await fetch('/api/books');
  const books = await res.json();
  booksDiv.innerHTML = '';
  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
      <div class="book-title">${escapeHtml(book.title)}</div>
      <div class="book-meta">By ${escapeHtml(book.author)} (${book.published_year})</div>
      <div class="book-actions">
        <button onclick="editBook(${book.id})">Edit</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
      </div>
    `;
    booksDiv.appendChild(bookDiv);
  });
}

form.onsubmit = async e => {
  e.preventDefault();
  const id = bookIdInput.value;
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const publishedYear = yearInput.value.trim();
  if (!title || !author || !publishedYear) return;
  if (id) {
    await fetch(`/api/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, publishedYear })
    });
  } else {
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, publishedYear })
    });
  }
  form.reset();
  bookIdInput.value = '';
  submitBtn.textContent = 'Add Book';
  cancelBtn.style.display = 'none';
  fetchBooks();
};

window.editBook = function(id) {
  fetch(`/api/books/${id}`)
    .then(res => res.json())
    .then(book => {
      bookIdInput.value = book.id;
      titleInput.value = book.title;
      authorInput.value = book.author;
      yearInput.value = book.published_year;
      submitBtn.textContent = 'Update Book';
      cancelBtn.style.display = 'inline-block';
    });
};

window.deleteBook = async function(id) {
  if (!confirm('Delete this book?')) return;
  await fetch(`/api/books/${id}`, { method: 'DELETE' });
  fetchBooks();
};

cancelBtn.onclick = () => {
  form.reset();
  bookIdInput.value = '';
  submitBtn.textContent = 'Add Book';
  cancelBtn.style.display = 'none';
};

function escapeHtml(str) {
  return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

fetchBooks();
