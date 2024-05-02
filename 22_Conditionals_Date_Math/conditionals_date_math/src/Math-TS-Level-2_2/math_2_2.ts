const randomNu = Math.ceil(Math.random() * 10);
let myGuess = parseInt(prompt('Let\'s guess a number between 1 and 10!!!'));

function game(guess:number) {
    if (guess === randomNu) {
        return 'You win!!!';
    } else {
        return 'Keep trying';
    }
}

let randomElement = document.querySelector('.random');
if (randomElement) {
    randomElement.innerHTML = randomNu.toString();;
}

let myGuessElement = document.querySelector('.myGuess');
if (myGuessElement) {
    myGuessElement.innerHTML = myGuess.toString();
}

let result = game(myGuess);

let myAnswerElement = document.querySelector('.answer');
if (myAnswerElement) {
      myAnswerElement.innerHTML = result;
}

console.log(result)

