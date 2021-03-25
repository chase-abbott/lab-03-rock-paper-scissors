export function numberGenerator(randomNumber) {
    if (randomNumber < .334) return 'paper';
    if (.334 < randomNumber && randomNumber < .667) return 'scissors';
    return 'rock';
}

// export function didUserWin(userInput, computerThrow) {
//     if (userInput === 'paper' && computerThrow === 'scissors') return true;
//     if (userInput === 'paper' && computerThrow === 'rock') return false;
//     if (userInput === 'rock' && computerThrow === 'scissors') return false;
//     if (userInput === 'rock' && computerThrow === 'paper') return true;
//     if (userInput === 'scissors' && computerThrow === 'paper') return true;
//     if (userInput === 'scissors' && computerThrow === 'rock') return false;
//     return false;
// }