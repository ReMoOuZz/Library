# My Library 📚

A modern, responsive web application for managing your personal book collection. Built with vanilla JavaScript, HTML, and CSS, this library app provides an intuitive interface for tracking your reading progress and organizing your books with beautiful animations, smooth interactions, and a comprehensive CSS variables system.

![Library Screenshot](images/Screenshot.png)

## ✨ Features

- **Complete Book Management**: Add, view, and delete books with detailed information
- **Automatic Cover Images**: Fetches book covers automatically from Open Library API with fallback images
- **Reading Progress Tracking**: Mark books as read or unread with real-time status updates
- **Live Statistics Dashboard**: View total books, pages, and reading progress with instant updates
- **Modern UI Design**: Clean, dark theme with purple accents and smooth animations
- **Interactive 3D Flip Cards**: Hover to flip cards and view book details with 3D animations
- **Responsive Design**: Works seamlessly across different screen sizes and devices
- **Custom Scroll Behavior**: Smooth scrolling in book summaries with optimized wheel events
- **Data Persistence**: Books are automatically saved locally using localStorage
- **Form Validation**: Real-time character counting and validation for book summaries
- **Error Handling**: Robust error handling with fallback images and graceful degradation
- **Performance Optimized**: Efficient DOM manipulation and optimized API calls

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
   - **Title**: The book's title (required)
   - **Author**: The book's author (required)
   - **Pages**: Number of pages (required)
   - **Summary**: A brief description (max 200 characters, required)
3. Click **"Add Book"** to save - the cover will be automatically fetched

### Managing Books

- **View Details**: Hover over any book card to flip it and see complete details
- **Change Status**: Use the dropdown to mark books as "Read" or "Unread"
- **Delete Books**: Click the "×" button to remove books from your library
- **Scroll Summary**: Use mouse wheel for smooth scrolling in book summaries
- **Automatic Saving**: All changes are automatically saved to localStorage

### Viewing Statistics

The sidebar displays real-time statistics that update instantly:

- Total number of books in your library
- Total pages across all books
- Number of books read
- Number of books unread

## 🛠️ Technical Details

### Architecture

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API Integration**: Open Library API for book cover images
- **Data Storage**: localStorage for data persistence
- **Styling**: Custom CSS with CSS Grid, Flexbox, and comprehensive CSS Variables
- **Animations**: CSS transitions, transforms, and 3D effects
- **Performance**: Optimized DOM manipulation and efficient API calls

### CSS Variables System

The project uses a comprehensive CSS variables system for consistent theming and easy customization:

```css
:root {
  /* Colors */
  --primary-bg: #1b1b2f;
  --secondary-bg: #2d1b3a;
  --accent-color: #c084fc;
  --accent-hover: #a855f7;
  --text-color: #e5e5e5;
  --text-muted: #9ca3af;
  --border-color: #3f3f5f;

  /* Gradients */
  --header-gradient: linear-gradient(90deg, #2d1b3a 0%, #3b2f4c 100%);
  --main-gradient: linear-gradient(180deg, #1b1b2f 0%, #151522 100%);
  --select-gradient: linear-gradient(135deg, #2d1b3a 0%, #3b2f4c 100%);

  /* Shadows */
  --shadow-light: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-heavy: 0 8px 32px rgba(0, 0, 0, 0.4);

  /* Spacing */
  --spacing-xs: 0.3em;
  --spacing-sm: 0.5em;
  --spacing-md: 1em;
  --spacing-lg: 1.5em;
  --spacing-xl: 2em;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

### File Structure

```
Library/
├── features/
│   └── reset.css          # CSS reset styles
├── images/
│   ├── Screenshot.png     # Application screenshot
│   └── default-image.png  # Default book cover
├── index.html             # Main HTML file
├── main.css              # Main stylesheet with CSS variables
├── main.js               # JavaScript functionality
└── README.md             # This file
```

### Key Components

- **Book Constructor**: Creates book objects with unique IDs
- **Cover Image Fetcher**: Integrates with Open Library API with error handling
- **Popup Modal**: Smooth animations for adding books
- **Statistics Calculator**: Real-time updates of library metrics
- **Local Storage Manager**: Handles data persistence and retrieval
- **Custom Scroll Handler**: Smooth scrolling in book summaries
- **Form Validator**: Real-time validation and character counting
- **Error Handler**: Graceful fallbacks for API failures

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with purple accents
- **CSS Variables**: Centralized theming system for easy customization
- **Smooth Animations**: CSS transitions and 3D transforms for enhanced UX
- **3D Flip Cards**: Interactive book cards with hover effects and perspective
- **Grid Layout**: Responsive book card grid with CSS Grid
- **Modal Design**: Clean popup for adding books with form validation
- **Custom Scrollbars**: Styled scrollbars for better aesthetics
- **Hover Effects**: Interactive elements with visual feedback
- **Gradient Backgrounds**: Beautiful gradient effects throughout the interface
- **Box Shadows**: Layered shadows for depth and modern appearance

## 🔧 Development

### Current Status

- ✅ Complete book management system
- ✅ Cover image integration with API and fallback
- ✅ Statistics dashboard with real-time updates
- ✅ Modern UI design with CSS variables
- ✅ Responsive layout with CSS Grid and Flexbox
- ✅ Interactive 3D flip cards with animations
- ✅ Local storage for data persistence
- ✅ Custom scroll behavior for summaries
- ✅ Form validation and character counting
- ✅ Book deletion functionality
- ✅ Reading status management
- ✅ Error handling and graceful degradation
- ✅ Performance optimizations
- ✅ Comprehensive documentation

### Planned Features

- [ ] Search and filter functionality
- [ ] Book editing capabilities
- [ ] Export/import library data
- [ ] Multiple reading lists
- [ ] Book ratings and reviews
- [ ] Reading progress tracking (pages read)
- [ ] Book categories and tags
- [ ] Reading goals and challenges
- [ ] Dark/light theme toggle
- [ ] Mobile app version
- [ ] Offline support with Service Workers
- [ ] Book recommendations
- [ ] Reading time estimates

## 🎯 Performance Optimizations

- **Efficient DOM Manipulation**: Minimal re-renders and optimized updates
- **Optimized API Calls**: Single API call per book with caching
- **CSS Variables**: Reduced CSS file size and improved maintainability
- **Smooth Animations**: Hardware-accelerated transforms and transitions
- **Local Storage**: Fast data access and persistence
- **Custom Scroll**: Optimized wheel event handling
- **Error Handling**: Graceful fallbacks prevent app crashes
- **Lazy Loading**: Images loaded on demand

## 🚀 Advanced Features

### 3D Flip Animation

- CSS transforms with `perspective` and `transform-style: preserve-3d`
- Smooth transitions with `transition: transform 0.6s`
- Hover-triggered animations

### Custom Scroll Implementation

- JavaScript wheel event handling
- Configurable scroll amount (10px per wheel event)
- Prevents default scroll behavior for smooth experience

### API Integration

- Open Library API for book covers
- Error handling with fallback images
- Automatic image loading and caching

### Form Validation

- Real-time character counting
- Required field validation
- Visual feedback for user input

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing CSS variables system
- Maintain the dark theme aesthetic
- Ensure responsive design compatibility
- Add smooth animations for new interactions
- Test localStorage functionality
- Implement proper error handling
- Optimize for performance
- Add comprehensive documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for providing book cover images
- CSS Grid and Flexbox for responsive layouts
- Vanilla JavaScript community for best practices
- CSS Variables for modern theming approaches
- CSS 3D Transforms for interactive animations

---

**Happy Reading! 📖✨**
