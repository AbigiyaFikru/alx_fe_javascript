// ✅ Array to hold quotes
let quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "JavaScript is amazing!", category: "Programming" }
];

// ✅ Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerText = `${randomQuote.text} [${randomQuote.category}]`;
}

// ✅ Function to add a new quote from the form inputs
function addQuote() {
    const newText = document.getElementById('newQuoteText').value.trim();
    const newCategory = document.getElementById('newQuoteCategory').value.trim();

    // ✅ Check for empty fields
    if (!newText || !newCategory) {
        alert("Please fill in both fields.");
        return;
    }

    // ✅ Add new quote to the array
    quotes.push({ text: newText, category: newCategory });

    // ✅ Clear the input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    // ✅ Show confirmation
    alert("Quote added successfully!");

    // ✅ Optionally show the newly added quote immediately
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerText = `${newText} [${newCategory}]`;
}

// ✅ Add event listeners to the buttons (no inline onclick!)
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);

// ✅ Optional: show a random quote on page load
showRandomQuote();
