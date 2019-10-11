/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },
  {
    quote: "The Worst Sin Towards Our Fellow Creatures Is Not To Hate Them, But To Be Indifferent To Them",
    source: "George Bernard Shaw",
    citation: "Play",
    year: 1897
  },
  {
    quote: "Chess: As Elaborate a Waste of Human Intelligence as You Could Find Anywhere Outside an Advertising Agency",
    source: "Raymond Chandler",
    citation: "Novel",
    year: 1953
  },
  {
    quote: "Humans need two years to learn to speak and sixty years to learn to shut up.",
    source: "Ernest Hemingway",
    year: 1909
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  }
]

console.log(quotes)


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = () => {
  NumOfQuotes = quotes.length;
  randomQuoteIndex = Math.floor(Math.random() * NumOfQuotes)
  return quotes[randomQuoteIndex]
}

console.log(getRandomQuote());



/***3
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {
  currentQuote = getRandomQuote();
  let message = '';
  message = `<p class="quote"> ${currentQuote.quote} </p>`
  message += `<p class="source"> ${currentQuote.source} </p>`

  if (getRandomQuote().citation) {
    message += `<p class="citation"> ${currentQuote.citation} </p>`
  }

  if (getRandomQuote().year) {
    message += `<p class="year"> ${currentQuote.year} </p>`
  }
}

// <span class="citation"> [citation here] </span>
// <span class="year"> [year here] </span>
// </p>



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
