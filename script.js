fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
    .then((response) => response.json())
    .then((data) => {
        const quotes = data;

        const author = document.getElementById("author");
        const quote = document.getElementById("quote");

        function displayRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            author.innerText = quotes[randomIndex].author;
            quote.innerText = quotes[randomIndex].quote;
        }

        displayRandomQuote();

        document
            .getElementById("random")
            .addEventListener("click", displayRandomQuote);

        document
            .getElementById("share")
            .addEventListener("click", () => {
                navigator.clipboard.writeText(quote.innerText);
            })

    })
    .catch((error) => {
        console.error("Error fetching quotes: ", error);
    })
