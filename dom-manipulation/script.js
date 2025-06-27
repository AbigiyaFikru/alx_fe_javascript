// List of initial quotes
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Stay hungry, stay foolish.", category: "Inspiration" }
];

// Show a random quote based on selected category
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const categoryFilter = document.getElementById('categoryFilter');
  const selectedCategory = categoryFilter.value;

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category.toLowerCase() === selectedCategory.toLowerCase());

  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No quotes found for this category.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" — [${quote.category}]`;
}

// Add new quote to array and update UI
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');
  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text === '' || category === '') {
    alert("Please enter both quote and category.");
    return;
  }

  const newQuote = { text, category };
  quotes.push(newQuote);

  textInput.value = '';
  categoryInput.value = '';

  updateCategoryOptions();
  alert("New quote added!");
}

// Update dropdown options with unique categories
function updateCategoryOptions() {
  const categoryFilter = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(q => q.category))];

  categoryFilter.innerHTML = '<option value="all">All</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.toLowerCase();
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Setup listeners on load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  document.getElementById('addQuoteBtn').addEventListener('click', addQuote);
  document.getElementById('categoryFilter').addEventListener('change', showRandomQuote);

  updateCategoryOptions();
});

