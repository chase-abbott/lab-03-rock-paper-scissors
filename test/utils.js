export function numberGenerator(randomNumber) {
    if (randomNumber < .334) return 'paper';
    if (.334 < randomNumber && randomNumber < .667) return 'scissors';
    return 'rock';
}

// export function didUserWin(userInput, numberGenerator(randomNumber)) {
//     if (userInput === 'paper' && numberGenerator(randomNumber) === 'scissors') return true;
//     if (userInput === 'paper' && numberGenerator(randomNumber) === 'rock') return false;
//     if (userInput === 'rock' && numberGenerator(randomNumber) === 'scissors') return false;
//     if (userInput === 'rock' && numberGenerator(randomNumber) === 'paper') return true;
//     if (userInput === 'scissors' && numberGenerator(randomNumber) === 'paper') return true;
//     if (userInput === 'scissors' && numberGenerator(randomNumber) === 'rock') return false;
//     return false;
// }