//Task1
class Calculator {
  constructor() {
    // Конструктор может быть пустым, так как нам не нужно инициализировать никакие свойства
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return 'Ошибка: деление на ноль';
    }
    return a / b;
  }
}

const calculator = new Calculator();

// Проверка
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(6, 3));
console.log(calculator.divide(6, 0));

//Task 2
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = 'доступна'; // По умолчанию книга доступна
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Книга "${book.title}" добавлена в библиотеку.`);
  }

  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.status === 'доступна') {
        book.status = 'взята';
        console.log(`Книга "${book.title}" взята.`);
      } else {
        console.log(`Книга "${book.title}" уже взята.`);
      }
    } else {
      console.log(`Книга с ISBN ${isbn} не найдена.`);
    }
  }

  returnBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.status === 'взята') {
        book.status = 'доступна';
        console.log(`Книга "${book.title}" возвращена.`);
      } else {
        console.log(`Книга "${book.title}" уже доступна.`);
      }
    } else {
      console.log(`Книга с ISBN ${isbn} не найдена.`);
    }
  }

  listAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.status === 'доступна');
    if (availableBooks.length > 0) {
      console.log('Доступные книги:');
      availableBooks.forEach((book) => {
        console.log(`- "${book.title}" by ${book.author}`);
      });
    } else {
      console.log('Нет доступных книг.');
    }
  }
}

// Проверка
const library = new Library();

const book1 = new Book('1820', 'Александр Пушкин', '1234567890');
const book2 = new Book('Война и мир', 'Ревизор', '0987654321');

library.addBook(book1);
library.addBook(book2);

library.listAvailableBooks();

library.borrowBook('1234567890');
library.listAvailableBooks();

library.returnBook('1234567890');
library.listAvailableBooks();
