let myLibrary = [];

const savedLibrary = localStorage.getItem("myLibrary");
if (savedLibrary) {
  myLibrary = JSON.parse(savedLibrary);
  displayBook();
}

function saveLibrary() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

async function fetchCoverUrByTitle(title) {
  const query = encodeURIComponent(title);
  const url = `https://openlibrary.org/search.json?title=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error API request");
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

function Book(title, author, pages, summary, read, image) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.summary = summary;
  this.read = read;
  this.image = image;
}

async function addBookToLibrary(title, author, pages, summary, read) {
  const image = (await fetchCoverUrByTitle(title)) || "images/default-image.png";
  const newBook = new Book(title, author, pages, summary, read, image);
  myLibrary.push(newBook);
  saveLibrary();
  displayBook();
}

function displayBook() {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const flipCard = document.createElement("div");
    flipCard.classList.add("book-card");

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("book-card-inner");

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("book-card-front");

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("book-card-back");

    const flipCardBackTop = document.createElement("div");
    flipCardBackTop.classList.add("book-card-back-top");

    const flipCardBackBottom = document.createElement("div");
    flipCardBackBottom.classList.add("book-card-back-bottom");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");

    const selectContainerDiv = document.createElement("div");
    selectContainerDiv.classList.add("select-container");

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = `Cover of ${book.title}`;
    img.onerror = function () {
      this.src = "images/default-image.png";
      this.classList.add("default-cover");
    };

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const summary = document.createElement("p");
    summary.textContent = book.summary;

    const closeButton = document.createElement("button");
    closeButton.textContent = "×";

    const readSelect = document.createElement("select");
    const optionRead = document.createElement("option");
    optionRead.value = "Read";
    optionRead.textContent = "Read";

    const optionUnread = document.createElement("option");
    optionUnread.value = "Unread";
    optionUnread.textContent = "Unread";

    readSelect.appendChild(optionRead);
    readSelect.appendChild(optionUnread);
    readSelect.value = book.read ? "Read" : "Unread";

    readSelect.addEventListener("change", (e) => {
      book.read = e.target.value === "Read";
      saveLibrary();
      updateStats();
    });

    flipCardFront.appendChild(img);
    flipCardFront.appendChild(title);
    flipCardBackTop.appendChild(closeButton);

    infoDiv.appendChild(author);
    infoDiv.appendChild(pages);
    summaryDiv.appendChild(summary);
    selectContainerDiv.appendChild(readSelect);

    flipCardBackBottom.appendChild(infoDiv);
    flipCardBackBottom.appendChild(summaryDiv);
    flipCardBackBottom.appendChild(selectContainerDiv);

    flipCardBack.appendChild(flipCardBackTop);
    flipCardBack.appendChild(flipCardBackBottom);
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    container.appendChild(flipCard);

    summaryDiv.addEventListener("wheel", function (e) {
      e.preventDefault();
      const scrollAmount = 40;
      this.scrollTop += e.deltaY > 0 ? scrollAmount : -scrollAmount;
    });

    closeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((b) => b.id !== book.id);
      saveLibrary();
      displayBook();
      updateStats();
    });
  });

  updateStats();
}

function updateStats() {
  const totalBooks = myLibrary.length;
  const totalPages = myLibrary.reduce((sum, book) => sum + book.pages, 0);
  const totalRead = myLibrary.filter((book) => book.read).length;
  const totalUnread = totalBooks - totalRead;

  document.getElementById("total-books").textContent = totalBooks;
  document.getElementById("total-pages").textContent = totalPages;
  document.getElementById("total-read").textContent = totalRead;
  document.getElementById("total-unread").textContent = totalUnread;
}

const showPopup = document.getElementById("add-book");

showPopup.addEventListener("click", () => {
  document.getElementById("add-book-popup").classList.add("active");
});

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("add-book-popup").classList.remove("active");
});

document.getElementById("add-book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const summary = document.getElementById("summary").value;
  const read = false;

  addBookToLibrary(title, author, pages, summary, read);

  document.getElementById("add-book-popup").classList.remove("active");
  this.reset();
  document.getElementById("summary-length").innerText = "0/200";
});

const summaryInput = document.getElementById("summary");
const summaryLength = document.getElementById("summary-length");

summaryInput.addEventListener("input", () => {
  const currentLength = summaryInput.value.length;
  summaryLength.textContent = `${currentLength} / 1000`;
});
