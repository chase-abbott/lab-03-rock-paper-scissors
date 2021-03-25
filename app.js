// import functions and grab DOM elements
import { didUserWin } from './test/utils.js';

const rockInput = document.querySelector('#rock');
const paperInput = document.querySelector('#paper');
const scissorsInput = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results-div');
const winsDiv = document.querySelector('#wins-div');
const lossesDiv = document.querySelector('#losses-div');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');



console.log(reset, winsSpan, lossesSpan);
// initialize state
let wins = 0;
let total = 0;
let computerThrow = Math.random();

// set event listeners to update state and DOM