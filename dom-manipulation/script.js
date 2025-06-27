document.addEventListener('DOMContentLoaded', function () {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteBtn = document.getElementById('newQuote');
  const addQuoteBtn = document.getElementById('addQuoteBtn');
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');
  const categoryFilter = document.getElementById('categoryFilter');

  let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
    { text: "Stay hungry, stay foolish.", category: "Inspiration" }
  ];

  // Display a random quote
  function showRandomQuote() {
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

  // Add a new quote to the array and update UI
  function addQuote() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (text === "" || category === "") {
      alert("Please enter both quote text and category.");
      return;
    }

    const newQuote = { text, category };
    quotes.push(newQuote);
    updateCategoryOptions();

    newQuoteText.value = '';
    newQuoteCategory.value = '';
    alert("Quote added!");
  }

  // Populate or update the category dropdown
  function updateCategoryOptions() {
    const categories = [...new Set(quotes.map(q => q.category))];
    categoryFilter.innerHTML = '<option value="all">All</option>';
    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.toLowerCase();
      option.textContent = cat;
      categoryFilter.appendChild(option);
    });
  }

  // Event listeners
  newQuoteBtn.addEventListener('click', showRandomQuote);
  addQuoteBtn.addEventListener('click', addQuote);
  categoryFilter.addEventListener('change', showRandomQuote);

  // Initial setup
  updateCategoryOptions();
});
