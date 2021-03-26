// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from './utils.js';

const test = QUnit.test;

test('This should return scissors', (expect) => {
    expect.equal(getRandomThrow(.2), 'paper');
});

test('This should return paper', (expect) => {
    expect.equal(getRandomThrow(.5), 'scissors');
});

test('This should return rock', (expect) => {
    expect.equal(getRandomThrow(.7), 'rock');
});

test('This should return true', (expect) => {
    expect.equal(didUserWin('rock', 'scissors'), 'win');
    expect.equal(didUserWin('paper', 'rock'), 'win');
    expect.equal(didUserWin('scissors', 'paper'), 'win');
});

test('This should return false', (expect) => {
    expect.equal(didUserWin('rock', 'paper'), 'loss');
    expect.equal(didUserWin('paper', 'scissors'), 'loss');
    expect.equal(didUserWin('scissors', 'rock'), 'loss');
});

test('This should return null', (expect) => {
    expect.equal(didUserWin('rock', 'rock'), 'draw');
});


