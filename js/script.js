/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array 'quotes' - holds all of the quotes 
 * with their properties, if applicable:
 * quote, source, citation, and year.
***/

var quotes = [
  {
    quote: 'If you always do what interests you, at least one person is pleased.',
    source: 'Katharine Hepburn',
    year: 1999 // This date is made up for the purpose of testing the code.
  },
  {
    quote: 'All our dreams can come true – if we have the courage to pursue them.',
    source: 'Walt Disney',
    citation: 'Interview with W. Disney', // This citation is made up for the 
                                        // purpose of testing the code.
    tags: 'Disney'
  },
  {
    quote: 'Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.',
    source: 'Jose Luis Borges'
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    tags: 'Famous People'
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: 'Oprah Winfrey',
    tags: 'Famous People'
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: 'John Lennon',
    tags: 'Famous People'
  },
  {
    quote: "May the force be with you.",
    source: 'General Dodonna',
    citation: 'Star Wars',
    year: 1977,
    tags: 'Disney'
  },
  {
    quote: "Just keep swimming.",
    source: 'Dory',
    citation: 'Finding Nemo',
    year: 2003,
    tags: 'Disney'
  },
  {
    quote: 'The flower that blooms in adversity is the most rare and beautiful of them all.',
    source: 'The Emperor',
    citation: 'Mulan',
    year: 1998,
    tags: 'Disney'
  }
];

/***
 * `getRandomQuote` function
 * This function creates a random number 'randomNumber' between 0 and 
 * the length of the 'quotes' array. The function uses the random 
 * number created to choose a randomQuote from the array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length );
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// Testing code.
console.log(getRandomQuote());

/***
 * `printQuote` function
 * This function creates the HTML string that is printed to the webpage.
 * It gathers the quote and the source from the randomly chosen quote.
 * Then, it gathers the citation and year of the quote if it has those objects.
***/

function printQuote() {
  var quoteChosen = getRandomQuote();
  var HTMLstring = `
    <p class = "quote"> ${quoteChosen.quote}</p> 
    <p class = "source"> ${quoteChosen.source}`;

    if (quoteChosen.citation) {
      HTMLstring += `<span class = "citation"> ${quoteChosen.citation}</span>`;
    }

    if (quoteChosen.year) {
      HTMLstring += `<span class = "year"> ${quoteChosen.year}</span>`;
    }

    if (quoteChosen.tags) {
      HTMLstring += `<span class = "tags"> ${quoteChosen.tags}</span>`;
    }

    HTMLstring += `</p>`;

    randomColor();
    document.getElementById('quote-box').innerHTML = HTMLstring; 

    // Testing code.
    console.log(quoteChosen);
    console.log(quoteChosen.quote);
    console.log(quoteChosen.year);
    console.log(HTMLstring);
}

// Testing code.
printQuote();

/***
 * `randomColor` function. From w3resource.
 * This function gets 3 random numbers between 0 and 256 to use as "red", 
 * "green" and "blue" values. It then sets the body of the document to this
 * color. Function is called in printQuote() function.
***/
function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

/***
 * `timing` function. 
 * This function runs the printQuote function automatically after 10 seconds.
***/
function timing() {
  setInterval(printQuote, (1000*10));
}

timing();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);