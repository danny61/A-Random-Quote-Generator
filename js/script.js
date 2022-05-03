/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"",
    source: "-Mother Teresa",
  },
  
  {
    quote: "\"When you reach the end of your rope, tie a knot in it and hang on.\"",
    source: "-Franklin D. Roosevelt",
    citation: "https://philosiblog.com/2014/01/30/when-you-get-to-the-end-of-your-rope-tie-a-knot-in-it-and-hang-on/",
    year: "1919"
  },

  {
    quote: "\"Whoever is happy will make others happy too.\"",
    source: "-Anne Frank",
    citation: "https://www.citatum.org/book/Anne_Frank_-_The_Diary_of_a_Young_Girl",
    year: "1947"
  },

  {
    quote: "\"You will face many defeats in life, but never let yourself be defeated.\"",
    source: "-Maya Angelou",
  },

  {
    quote: "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
    source: "-Abraham Lincoln",
  }
];

/***
 * `getRandomQuote` function
 * Random number associated with the number of objects in array
***/
const getRandomQuote = (arr) => {
	let randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
}



/***
 * `printQuote` function
 * adds randomly selected quote to the DOM
 * if the selected object has .year or .citation it'll add the HTML for it
 * then it closes the HTML <p> tag and displays it on the DOM
***/
function printQuote(){
  let ranQuote = getRandomQuote();
  let html = `<p class="quote"> ${ranQuote.quote} </p><p class="source"> ${ranQuote.source}`;
  
  if ( ranQuote.citation !== undefined ) {
    html = html + `<span class="citation">${ranQuote.citation}</span>`;
  } if ( ranQuote.year !== undefined ) {
    html = html + `<span class="year">${ranQuote.year}</span>`;
  }

  html = html + "</p>";

  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);