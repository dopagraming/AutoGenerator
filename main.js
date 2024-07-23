let quoteId = document.querySelector(".quote-id");
let quoteDisplay = document.querySelector(".quote-display");
let quoteAuth = document.querySelector(".quote-author");
let generate = document.querySelector(".generate");
let stop = document.querySelector(".stop");
let autoGenerate = document.querySelector(".auto");
let stauts = document.querySelector(".generate-stauts");
let intervelId;

generate.addEventListener("click", generateQuote);
autoGenerate.onclick = autoGenerator;
stop.onclick = stopAutoGenerate;
async function getQuote() {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  return data;
}
async function generateQuote() {
  const quotes = await getQuote();
  let randomNum = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomNum];
  quoteDisplay.innerHTML = quote.text;
  quoteAuth.innerHTML = quote.author;
  quoteId.innerHTML = randomNum;
}

function autoGenerator() {
  intervelId = setInterval(generateQuote, 1000);
}
function stopAutoGenerate() {
  clearInterval(intervelId);
}
