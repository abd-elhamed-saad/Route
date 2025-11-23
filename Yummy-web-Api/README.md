# Yummy Web API - Meal Recipe Application

A clean, well-documented meal recipe application that uses TheMealDB API to search and display recipes with various filtering options.

## 📁 Project Structure

```
Yummy-web-Api/
├── index.html              # Main HTML file with semantic structure
├── README.md               # Project documentation
├── css/
│   ├── all.min.css        # Font Awesome icons
│   ├── bootstrap.min.css  # Bootstrap 5 framework
│   └── style.css          # Custom styles (well-commented)
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap JavaScript
│   ├── jquery-3.7.0.min.js      # jQuery library
│   └── index.js                  # Main application logic (well-commented)
├── imgs/
│   └── logo.png           # Application logo
└── webfonts/              # Font Awesome web fonts
    ├── fa-brands-400.ttf
    ├── fa-brands-400.woff2
    ├── fa-regular-400.ttf
    ├── fa-regular-400.woff2
    ├── fa-solid-900.ttf
    ├── fa-solid-900.woff2
    ├── fa-v4compatibility.ttf
    └── fa-v4compatibility.woff2
```

## 🚀 Features

### 1. **Search Functionality**
- Search meals by name
- Search meals by first letter
- Real-time search results

### 2. **Browse by Categories**
- View all meal categories
- Filter meals by selected category
- Display category descriptions and images

### 3. **Browse by Area/Region**
- Explore meals from different countries
- Filter meals by geographical area (Italian, Chinese, etc.)

### 4. **Browse by Ingredients**
- View available ingredients
- Filter meals by specific ingredient
- See ingredient descriptions

### 5. **Meal Details**
- Complete cooking instructions
- List of ingredients with measurements
- Meal tags and categories
- Links to recipe source and YouTube video

### 6. **Contact Form**
- Real-time form validation
- Validates: name, email, phone, age, password
- Submit button enables only when all fields are valid

### 7. **Animated Side Menu**
- Smooth slide-in/out animation
- Toggle hamburger menu icon
- Responsive navigation links

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom styling with animations
- **JavaScript (ES6+)** - Async/await for API calls
- **jQuery** - DOM manipulation and animations
- **Bootstrap 5** - Responsive grid system
- **Font Awesome** - Icons
- **TheMealDB API** - Meal data source

## 📖 Code Structure

### HTML (index.html)
- Well-organized sections with descriptive comments
- Semantic HTML5 elements
- Clear separation of concerns

### JavaScript (js/index.js)
- **Organized into logical sections:**
  - Global variables
  - Initialization
  - Side menu animations
  - Meal display functions
  - Search functionality
  - Category/Area/Ingredient filters
  - Contact form with validation
  - Regex validation functions

- **Clean code practices:**
  - JSDoc-style comments for functions
  - Descriptive variable and function names
  - Separated concerns (fetch vs display)
  - Reusable display functions

### CSS (css/style.css)
- Organized into logical sections
- Clear comments for each style block
- Consistent naming conventions
- Responsive design considerations

## 🔌 API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `/search.php?s={query}` | Search meals by name |
| `/lookup.php?i={id}` | Get meal details by ID |
| `/categories.php` | List all categories |
| `/filter.php?c={category}` | Filter by category |
| `/list.php?a=list` | List all areas |
| `/filter.php?a={area}` | Filter by area |
| `/list.php?i=list` | List all ingredients |
| `/filter.php?i={ingredient}` | Filter by ingredient |

## 🎯 Form Validation Rules

| Field | Validation Rule |
|-------|----------------|
| **Name** | Letters only (A-Z, a-z) |
| **Email** | Standard email format (example@domain.com) |
| **Phone** | 10 or 11 digits |
| **Age** | Between 18 and 60 |
| **Password** | Minimum 8 characters, at least 1 letter and 1 number |
| **Re-password** | Must match password |

## 🚦 How to Run

1. Open the project folder
2. Open `index.html` in a web browser
3. No build process required - it's a static website!

## 📱 Responsive Design

- Mobile-first approach using Bootstrap grid
- Responsive navigation menu
- Adaptive layout for different screen sizes

## 💡 Key Improvements from Original

1. **Better Code Organization** - Logical sections with clear comments
2. **Improved Documentation** - JSDoc-style function descriptions
3. **Enhanced Readability** - Descriptive comments throughout
4. **Clear Structure** - Separated HTML sections with headers
5. **Professional Comments** - Explains "why" not just "what"

## 🔗 API Credits

This project uses the free [TheMealDB API](https://www.themealdb.com/api.php)

## 📄 License

Free to use for educational purposes.

---

**Enjoy exploring delicious recipes! 🍽️**
