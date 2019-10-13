/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
  Create an array [] named 'quotes' and add 7 objects within it.
  All 7 objects will have a "quote" and "source" propterty
  and at least one object will have an additonal "citation" and "year" property.
***/

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    tag: "Politics"
  },
  {
    quote: "The Worst Sin Towards Our Fellow Creatures Is Not To Hate Them, But To Be Indifferent To Them",
    source: "George Bernard Shaw",
    citation: "Play",
    year: 1897,
    tag: "Politics"
  },
  {
    quote: "Chess: As Elaborate a Waste of Human Intelligence as You Could Find Anywhere Outside an Advertising Agency",
    source: "Raymond Chandler",
    citation: "Novel",
    year: 1953,
    tag: "Politics"

  },
  {
    quote: "Humans need two years to learn to speak and sixty years to learn to shut up.",
    source: "Ernest Hemingway",
    year: 1909,
    tag: "Humor"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tag: "Business"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt",
    tag: "Life"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    tag: "Life"
  }
]

console.log(quotes)


/***
  Create a `getRandomQuote` function that returns a random quote out of all the 7th quotes object in the array.
***/

const getRandomQuote = () => {
  let NumOfQuotes = quotes.length;
  // get random number from 0 to the length of the quotes array
  let randomQuoteIndex = Math.floor(Math.random() * NumOfQuotes)
  //  use the random number to return a quote based on array index
  return quotes[randomQuoteIndex]
}

console.log(getRandomQuote());

const currentColor = () => {
  let blue = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let color = `rgb(${blue},${red},${green})`;
  return color;
}


const printQuote = () => {
  let currentQuote = getRandomQuote();
  let message = '';
  message = `<p class="quote"> ${currentQuote.quote} </p>`
  message += `<p class="source"> ${currentQuote.source}`

// if currentQuote has a "citation" property, add citation property value to message variable
// hasOwnproperty function is from MDN. i was looking for a way to check if the currentQuote has that particular property
  if (currentQuote.hasOwnProperty('citation')) {
    message += `<span class="citation"> ${currentQuote.citation} </span>`
  }

// if currentQuote has a "year" property, add year property value to message variable
  if (currentQuote.hasOwnProperty('year')) {
    message += `<span class="year"> ${currentQuote.year} </span>`
  }

// if currentQuote has a "year" property, add year property value to message variable
  if (currentQuote.hasOwnProperty('tag')) {
    message += `<span class="year"> ${currentQuote.tag} </span>`
  }

  message += `</p>`

  let  quoteBox = document.getElementById('quote-box')

  document.body.style.backgroundColor = currentColor();

  return quoteBox.innerHTML = message;
}
// randomly run printQuote every every 25 seconds as soon as the page loads
setInterval(printQuote, 25000)

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
