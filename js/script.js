/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('source')
const getQuoteBtn = document.getElementById('load-quote')

function randomQuote () {
  fetch ('https://api.quotable.io/random') 
  .then(response => response.json())
  .then (data => {
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author
  })
}

randomQuote();
getQuoteBtn.addEventListener('click', ()=>{
  randomQuote();
})
