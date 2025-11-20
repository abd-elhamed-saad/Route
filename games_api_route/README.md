# 🎮 Games API Route - Free-to-Play Games Browser

A modern, responsive web application for discovering and exploring free-to-play games across multiple genres. Built with vanilla JavaScript using Object-Oriented Programming principles and clean architecture.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Code Organization](#code-organization)

## ✨ Features

- **Dynamic Category Filtering** - Browse games across 6 different categories:
  - MMORPG
  - Shooter
  - Sailing
  - Permadeath
  - Superhero
  - Pixel

- **Game Details View** - Click any game to view:
  - Full description
  - Screenshots carousel
  - Platform information
  - Game status
  - Direct link to play

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Loading States** - Visual feedback during API calls
- **Interactive Carousel** - Mouse wheel support for screenshot browsing

## 🛠️ Technologies Used

### Frontend
- **Vanilla JavaScript (ES6+)** - Pure OOP, no frameworks
- **Bootstrap 5** - Responsive layout and components
- **Fetch API** - For HTTP requests
- **ES6 Modules** - Code organization
- **jQuery** - Owl Carousel dependency
- **Owl Carousel** - Screenshot slider

### API
- **RapidAPI** - Free-to-Play Games Database
- **RESTful API** - Games data and metadata

## 📁 Project Structure

```
games_api_route/
├── index.html                      # Main HTML file
├── README.md                       # Project documentation
├── css/                            # Stylesheets
│   ├── styles.css                  # Custom styles
│   ├── owl.carousel.min.css        # Carousel styles
│   └── owl.theme.default.min.css   # Carousel theme
├── img/                            # Images and logos
│   ├── logo-sm.png
│   └── wraper.png
├── webfonts/                       # Font files
└── js/                             # JavaScript modules
    ├── app.js                      # Main application controller
    ├── ui.controller.js            # UI rendering logic
    ├── models/                     # Data models
    │   ├── game.js                 # Game model
    │   └── game-details.js         # GameDetails model
    ├── services/                   # Service layer
    │   ├── api.service.js          # API communication
    │   └── game.service.js         # Business logic
    ├── bootstrap.bundle.min.js     # Bootstrap framework
    ├── jquery-3.7.1.min.js         # jQuery library
    └── owl.carousel.min.js         # Carousel plugin
```

## 🏗️ Architecture

This project follows a **layered architecture** with clear separation of concerns:

### Layer 1: API Service
**File:** `js/services/api.service.js`
- Handles all HTTP requests
- Centralizes API configuration
- Manages error handling

### Layer 2: Business Logic
**File:** `js/services/game.service.js`
- Transforms raw API data to model instances
- Manages application state
- Coordinates between API and UI

### Layer 3: Data Models
**Files:** `js/models/game.js`, `js/models/game-details.js`
- Defines data structures
- Encapsulates game data
- Provides utility methods

### Layer 4: UI Controller
**File:** `js/ui.controller.js`
- Handles DOM manipulation
- Renders data to the page
- Manages UI components

### Layer 5: Application Controller
**File:** `js/app.js`
- Main entry point
- Event handling
- Application initialization

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Live Server, Python HTTP server, etc.)

### Installation

1. **Clone or download the project:**
   ```bash
   cd /opt/odoo/learn_JS/github_route/games_api_route
   ```

2. **Start a local web server:**

   **Option 1: Using Python 3**
   ```bash
   python3 -m http.server 8000
   ```

   **Option 2: Using VS Code Live Server**
   - Install Live Server extension
   - Right-click `index.html` → Open with Live Server

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Usage

1. **Browse Games:**
   - Click on category links in the navbar
   - Games will load dynamically

2. **View Details:**
   - Click on any game card
   - View full details and screenshots

3. **Navigate:**
   - Click the close button (×) to return to games list

## 🔌 API Integration

### API Source
- **Provider:** RapidAPI
- **API:** Free-to-Play Games Database
- **Base URL:** `https://free-to-play-games-database.p.rapidapi.com/api`

### Endpoints Used

#### 1. Get Games by Category
```
GET /games?category={category}
```
**Response:** Array of game objects

#### 2. Get Game Details
```
GET /game?id={id}
```
**Response:** Single game object with detailed information

### API Configuration
Located in: `js/services/api.service.js`

**Headers:**
- `X-RapidAPI-Key`: API authentication key
- `X-RapidAPI-Host`: API host

## 📚 Code Organization

### Object-Oriented Principles

1. **Encapsulation**
   - Data and methods bundled in classes
   - Private methods prefixed with underscore

2. **Separation of Concerns**
   - Each layer has a single responsibility
   - API, business logic, and UI are separated

3. **Modularity**
   - ES6 modules for code organization
   - Reusable components

4. **Singleton Pattern**
   - Services exported as singleton instances
   - Shared state across the application

### Key Classes

**ApiService**
```javascript
- fetchGamesByCategory(category)
- fetchGameById(id)
```

**GameService**
```javascript
- loadGamesByCategory(category)
- loadGameDetails(id)
- getGamesList()
- getCurrentGame()
```

**Game Model**
```javascript
- getTruncatedDescription(maxLength)
- isValid()
```

**GameDetails Model**
```javascript
- openGame()
- getScreenshotUrls()
- hasScreenshots()
- isValid()
```

**UIController**
```javascript
- renderGames()
- renderGameDetails()
- showError(message)
```

**App**
```javascript
- init()
- loadGames(category)
- loadGameDetails(gameId)
```

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Object-Oriented Programming in JavaScript
- ✅ ES6+ Features (classes, modules, async/await)
- ✅ Clean Architecture and SOLID principles
- ✅ API Integration with Fetch API
- ✅ DOM Manipulation
- ✅ Event-Driven Programming
- ✅ Responsive Web Design
- ✅ Error Handling
- ✅ Code Organization and Modularity

## 🔮 Future Improvements

- [ ] Search functionality
- [ ] Favorites system with localStorage
- [ ] Pagination for better performance
- [ ] Advanced filtering options
- [ ] Unit tests (Jest)
- [ ] Environment variables for API keys
- [ ] Service Worker for offline support
- [ ] TypeScript migration

## 📝 License

This is an educational project. The games data is provided by the Free-to-Play Games Database API.

## 👨‍💻 Author

Games API Route Project

---

**Made with ❤️ using Vanilla JavaScript and OOP principles**
