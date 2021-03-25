// IMPORT MODULES under test here:
import { numberGenerator } from './utils.js';

const test = QUnit.test;

test('This should return scissors', (expect) => {
    expect.equal(numberGenerator(.2), 'paper');
});

test('This should return paper', (expect) => {
    expect.equal(numberGenerator(.5), 'scissors');
});

test('This should return rock', (expect) => {
    expect.equal(numberGenerator(.7), 'rock');
});


