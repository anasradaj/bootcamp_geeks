interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return (this as any).books.map((book: Book) => book.title);
  }
}

// --- Demo ---
const myDigitalLibrary = new DigitalLibrary("https://mybooks.com");

myDigitalLibrary.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt, David Thomas",
  isbn: "978-0201616224",
  publishedYear: 1999,
  genre: "Programming"
});

myDigitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "978-0132350884",
  publishedYear: 2008
});

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "978-0451524935",
  publishedYear: 1949,
  genre: "Dystopian"
});

console.log("--- Book Details ---");
console.log(myDigitalLibrary.getBookDetails("978-0201616224"));
console.log(myDigitalLibrary.getBookDetails("978-0132350884"));
console.log(myDigitalLibrary.getBookDetails("978-0451524935"));

console.log("\n--- All Book Titles ---");
console.log(myDigitalLibrary.listBooks());
