

export function getRandomThrow(randomNumber) {
    if (randomNumber < .334) return 'paper';

    if (.334 < randomNumber && randomNumber < .667) return 'scissors';
    return 'rock';
}

export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'scissors') return 'win';

    if (player === 'rock' && computer === 'paper') return 'loss';

    if (player === 'paper' && computer === 'scissors') return 'loss';

    if (player === 'paper' && computer === 'rock') return 'win';

    if (player === 'scissors' && computer === 'paper') return 'win';

    if (player === 'scissors' && computer === 'rock') return 'loss';

    if (player === computer) return 'draw';
}

