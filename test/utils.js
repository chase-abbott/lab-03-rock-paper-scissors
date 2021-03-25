export function didUserWin(userInput) {
    if (userInput < .334) return 'paper';
    if (.334 < userInput && userInput < .667) return 'scissors';
    return 'rock';
}