const myLibrary = [];

async function fetchCoverUrByTitle(title) {
  const query = encodeURIComponent(title);
  const url = `https://openlibrary.org/search.json?title=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new error("Error API request");
    }
    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      const firstBook = data.docs[0];

      if (firstBook.isbn && firstBook.isbn.length > 0) {
        const isbn = firstBook.isbn[0];
        return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      } else if (firstBook.cover_edition_key) {
        const olid = firstBook.cover_edition_key;
        return `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetchCoverUrlByTitle :", error);
    return null;
  }
}

function Book(title, author, pages, summary, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.summary = summary;
  this.read = read;
}

async function addBookToLibrary(title, author, pages, summary, read) {
  const image = (await fetchCoverUrByTitle(title)) || "default-image.png";
  const newBook = new Book(title, author, pages, summary, read);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook() {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  for (Book of myLibrary) {
    const card = document.createElement("div");
    card.classList.add("book-card");
  }
}

const showPopup = document.getElementById("add-book");

showPopup.addEventListener("click", () => {
  document.getElementById("add-book-popup").classList.add("active");
});
document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("add-book-popup").classList.remove("active");
});
