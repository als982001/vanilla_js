const quotes = [
    {
        quote: "If I don't wield the sword, I can't protect you. If I keep wielding the sword, I can't embrace you.",
        author:"Tite Kubo",
    },
    {
        quote: "People can possess hope because our eyes are unable to see death.",
        author:"Tite Kubo",
    },
    {
        quote: "Ah, we all dream. that we are flying through the skies with our eyes open.",
        author:"Tite Kubo",
    },
    {
        quote: "I am merely practicing saying goodbye to you.",
        author:"Tite Kubo",
    },
    {
        quote: "That's right, nothing else can change my world.",
        author:"Tite Kubo",
    },
    {
        quote: "This entire world exists for the sake of cornering you.",
        author:"Tite Kubo",
    },
    {
        quote: "That voice that pierces my chest so deeply resembles a never-ending cry of ecstacy.",
        author:"Tite Kubo",
    },
    {
        quote: "All people, imitations of apes. All gods, imitations of people.",
        author:"Tite Kubo",
    },
    {
        quote: "I wonder, can I keep up with it? The speed of the world without you in it.",
        author:"Tite Kubo",
    },
]

const quote = document.querySelector("#quote .line");
const author = document.querySelector("#quote .speaker");
const quotesLen = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random()*quotesLen)];



quote.innerText = todaysQuote.quote;
author.innerText =`  -${todaysQuote.author}-`;