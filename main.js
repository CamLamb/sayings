const quoteContainer = document.getElementById("quote");

const quotes = Object.keys(sayings).reduce(
  (quoteArray, key) => [...quoteArray, sayings[key]],
  []
);

// Get random quote
randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Update DOM with quote
updateQuote = () => {
  const selectedQuote = randomQuote();
  quoteContainer.innerHTML = `
    <div>${selectedQuote.author}</div>
    ${selectedQuote.saying}
  `;
};

// On load
document.addEventListener("DOMContentLoaded", () => {
  updateQuote();
});

// On space bar
document.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    updateQuote();
  }
});

// On mobile button tap
document.querySelector("[data-button]").addEventListener("click", () => {
  updateQuote();
});
