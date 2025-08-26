let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your guess!"));
let attempts = 1;
while(parseInt(guess) !== targetNum) {
    attempts++;
    console.log(attempts);
    if (guess==='q'){
        alert("You quit the game. The number was " + targetNum);
        break;
    } else if(guess > targetNum) {
        guess = prompt("Too high! Try again.");
    } else if (guess < targetNum) {
        guess = prompt("Too low! Try again.");
    } else {
        guess = prompt("That's not a number! Enter a valid number.");
    }
}

if (guess !== 'q') {
alert("Congratulations! You guessed the number " + targetNum + " correctly! It took you " + attempts + " guesses.");
}


