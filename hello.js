const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");
const z = Quote.getRandomQuote();
// console.log(z);

console.log(
  cowsay.say({
    text: z,
    e: "Xx",
    T: "U ",
  })
);
