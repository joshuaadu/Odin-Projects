const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = parseInt(document.querySelector("#pages").value);
const addBook = document.querySelector("#add-book");
const display = document.querySelector(".section_input-display");

addBook.addEventListener("click", () => {
	addBookToLibrary(title, author, pages);
	displayBooks(myLibrary);
});

/* Store Books */
let myLibrary = [];

/* A Constructor for making "Book" objects */
function Book(t, a, p) {
	this.title = t;
	this.author = a;
	this.pages = p;
	this.read = false;
	this.info = function () {
		return `${this.title} by ${this.author}. ${this.pages}, 
        ${this.read ? " already read" : "not read yet"}`;
	};
}

/* Add new book to library */
function addBookToLibrary(title, author, pages) {
	let book = new Book(title, author, pages);
	myLibrary.push(book);
}

/* Display books */
function displayBooks(library) {
    if (library)
	let recentlyAddedBook = myLibrary.length - 1;
	let p = document.createElement("p");
	p.textContent = myLibrary[recentlyAddedBook].info();
	display.appendChild(p);
	// for (let book of library) {
	// 	let p = document.createElement("p");
	// 	p.textContent = book.info();
	// 	display.appendChild(p);
	// }
}
