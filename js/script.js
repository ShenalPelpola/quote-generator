let quotes = [];
const quoteButton = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterButton = document.querySelector("#twitter");

// Show New Quote
function NewQuote() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    if (quote.author == null) {
        authorText.textContent = `- Unknown`;
    } else {
        authorText.textContent = `-  ${quote.author}`;
    }

    if (quote.text.length > 100) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
const getQuotes = async () => {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        quotes = await response.json();
        NewQuote();
    } catch (error) {
        console.log(error);
    }
}

// Tweet quote
const tweetQuote = () => {
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_black');
}

quoteButton.addEventListener("click", NewQuote)

twitterButton.addEventListener("click", tweetQuote)

// On load
getQuotes();