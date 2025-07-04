let quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "JavaScript is amazing!", category: "Programming" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerText = `${quotes[randomIndex].text} [${quotes[randomIndex].category}]`;
}

function addQuote() {
    const newText = document.getElementById('newQuoteText').value.trim();
    const newCategory = document.getElementById('newQuoteCategory').value.trim();

    if (newText && newCategory) {
        quotes.push({ text: newText, category: newCategory });
        alert("Quote added successfully!");
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
    } else {
        alert("Please fill in both fields.");
    }
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);
