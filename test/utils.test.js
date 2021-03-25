// IMPORT MODULES under test here:
import { didUserWin } from './utils.js';

const test = QUnit.test;

test('This should return scissors', (expect) => {
    expect.equal(didUserWin(.2), 'paper');
});

test('This should return paper', (expect) => {
    expect.equal(didUserWin(.5), 'scissors');
});

test('This should return rock', (expect) => {
    expect.equal(didUserWin(.7), 'rock');
});

