// Quote list
const data = {
  1: {
    author: "Sam D",
    saying: "Firebreak is where good ideas go to die",
  },
};

const quoteContainer = document.getElementById("quote");

const quotes = Object.keys(data).reduce(
  (quoteArray, key) => [...quoteArray, data[key]],
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
