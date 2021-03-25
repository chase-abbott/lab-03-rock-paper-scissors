export function numberGenerator(randomNumber) {
    if (randomNumber < .334) return 'paper';
    if (.334 < randomNumber && randomNumber < .667) return 'scissors';
    return 'rock';
}

export function didUserWin(userGuess, computerThrow) {
    if (userGuess === 'rock' && computerThrow === 'scissors') return 'win';
    if (userGuess === 'rock' && computerThrow === 'paper') return 'loss';
    if (userGuess === 'paper' && computerThrow === 'scissors') return 'loss';
    if (userGuess === 'paper' && computerThrow === 'rock') return 'win';
    if (userGuess === 'scissors' && computerThrow === 'paper') return 'win';
    if (userGuess === 'scissors' && computerThrow === 'rock') return 'loss';
    if (userGuess === computerThrow) return 'draw';
};