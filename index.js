const myLibrary = [
    new Book("Call of Cthulhu", "H.P. Lovecraft", 200, true),
    new Book("The Silmarillion", "J.R.R Tolkien", 1000, true),
    new Book("Vagabond", "Takehiko Inoue", 2000, false)
];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
}
function displayBooks(){
    const bookDisplay = document.querySelector("#bookDisplay");
    bookDisplay.innerHTML = "";
    myLibrary.forEach((book, index)=>{
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.setAttribute("data-index", index);
        bookCard.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read? "Yes" : "No"}</p>
        <button onclick="removeBook(${index})">REMOVE</button>
        <button onclick="toggleReadStatus(${index})">Read Status</button>`;
        bookDisplay.appendChild(bookCard);
    });
}

function addBook(event){
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    document.querySelector("#bookForm").reset();
    displayBooks();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index){
    myLibrary[index].toggleReadStatus();
    displayBooks();
}


document.getElementById("bookForm").addEventListener("submit", addBook);
displayBooks();