// JavaScript code to apply CSS styles

// Get all elements with the 'page' class
const pages = document.querySelectorAll('.page');

// Apply styles to the 'page' class elements
for (const page of pages) {
  page.style.display = 'none';
  page.style.textAlign = 'center';
  page.style.padding = '20px';
}

// Add 'visible' class to show an element
function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = 'block';
}

// Add 'visible' class to hide an element
function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = 'none';
}
