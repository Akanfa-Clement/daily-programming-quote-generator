const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Software is a great combination of artistry and engineering.", author: "Bill Gates" },
    { text: "One man’s crappy software is another man’s full-time job.", author: "Jessica Gaston" },
    { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
    { text: "Learning to write programs stretches your mind, and helps you think better.", author: "Bill Gates" },
    { text: "Good code is its own best documentation.", author: "Steve McConnell" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
    { text: "One man’s crappy software is another man’s full-time job.", author: "Jessica Gaston" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
    { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Software is a great combination of artistry and engineering.", author: "Bill Gates" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" }
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteElement.innerHTML = `<span>"${quote.text}"</span><br><em>– ${quote.author}</em>`;
});

// Optional: only run this if you have a dark mode toggle in your HTML
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
