const colors = [
  "\x1b[31m", // red
  "\x1b[33m", // yellow
  "\x1b[32m", // green
  "\x1b[36m", // cyan
  "\x1b[34m", // blue
  "\x1b[35m", // magenta
];
const reset = "\x1b[0m";

const text = "Hello World!";
const colorfulText = text
  .split("")
  .map((char, i) => `${colors[i % colors.length]}${char}`)
  .join("");

console.log(colorfulText + reset);

const goodbyeText = "Good bye!";
const colorfulGoodbye = goodbyeText
  .split("")
  .map((char, i) => `${colors[i % colors.length]}${char}`)
  .join("");

console.log("This is from A!!!!")

console.log("In-between")
console.log("Another one in-between")
console.log("Yet another one!!!!")

console.log(colorfulGoodbye + reset);
