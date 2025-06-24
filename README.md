# My Library 📚

A modern, responsive web application for managing your personal book collection. Built with vanilla JavaScript, HTML, and CSS, this library app provides an intuitive interface for tracking your reading progress and organizing your books.

![Library Screenshot](images/Screenshot.png)

## ✨ Features

- **Book Management**: Add new books to your library with detailed information
- **Automatic Cover Images**: Fetches book covers automatically from Open Library API
- **Reading Progress Tracking**: Mark books as read or unread
- **Statistics Dashboard**: View total books, pages, and reading progress
- **Modern UI**: Clean, dark theme with smooth animations
- **Responsive Design**: Works seamlessly across different screen sizes

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - runs entirely in the browser

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ReMoOuZz/Library.git
cd library
```

2. Open `index.html` in your web browser or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## 📖 Usage

### Adding a Book

1. Click the **"+ Add Book"** button in the sidebar
2. Fill in the book details:
   - **Title**: The book's title
   - **Author**: The book's author
   - **Pages**: Number of pages
   - **Summary**: A brief description (max 200 characters)
3. Click **"Add Book"** to save

### Viewing Statistics

The sidebar displays real-time statistics:

- Total number of books in your library
- Total pages across all books
- Number of books read
- Number of books unread

## 🛠️ Technical Details

### Architecture

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API Integration**: Open Library API for book cover images
- **Data Storage**: In-memory storage (localStorage implementation planned)
- **Styling**: Custom CSS with CSS Grid and Flexbox

### File Structure

```
Library/
├── features/
│   └── reset.css          # CSS reset styles
├── images/
│   ├── Screenshot.png     # Application screenshot
│   └── default-image.png  # Default book cover
├── index.html             # Main HTML file
├── main.css              # Main stylesheet
├── main.js               # JavaScript functionality
└── README.md             # This file
```

### Key Components

- **Book Constructor**: Creates book objects with unique IDs
- **Cover Image Fetcher**: Integrates with Open Library API
- **Popup Modal**: Smooth animations for adding books
- **Statistics Calculator**: Real-time updates of library metrics

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with purple accents
- **Smooth Animations**: CSS transitions for enhanced UX
- **Grid Layout**: Responsive book card grid
- **Modal Design**: Clean popup for adding books
- **Hover Effects**: Interactive elements with visual feedback

## 🔧 Development

### Current Status

- ✅ Basic book addition functionality
- ✅ Cover image integration
- ✅ Statistics dashboard
- ✅ Modern UI design
- ✅ Responsive layout

### Planned Features

- [ ] Local storage for data persistence
- [ ] Book editing and deletion
- [ ] Search and filter functionality
- [ ] Reading progress tracking
- [ ] Export/import library data
- [ ] Multiple reading lists
- [ ] Book ratings and reviews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for providing book cover images
- CSS Grid and Flexbox for responsive layouts
- Vanilla JavaScript community for best practices

---

**Happy Reading! 📖✨**
