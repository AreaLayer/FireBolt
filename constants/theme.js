// theme.js

// Constants for theme-related values
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Function to set the theme in localStorage
function setTheme(theme) {
  localStorage.setItem('theme', theme);
}

// Function to get the current theme from localStorage
function getTheme() {
  return localStorage.getItem('theme') || THEMES.LIGHT; // Default to 'light' if not set
}

// Export the functions and constants
module.exports = {
  THEMES,
  setTheme,
  getTheme,
};

