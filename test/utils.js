// const resultsDiv = document.getElementById("results-div");
var scissors = document.createElement("img");
var paper = document.createElement("img");
var rock = document.createElement("img");

scissors.src = '../assets/scissors.png';
paper.src = '../assets/paper.png';
rock.src = '../assets/rock.png';

var src = document.getElementById("results-image")

export function getRandomThrow(randomNumber) {
    if (randomNumber < .334) return 'paper';
    if (.334 < randomNumber && randomNumber < .667) return 'scissors';
    return 'rock';
}

function insertImage(rps) {
    if (rps === 'rock') {
        src.appendChild('rock.src');
    }
    if (rps === 'paper') {
        src.appendChild('paper.src');
    }
    if (rps === 'scissors') {
        src.appendChild('scissors.src');
    }
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

