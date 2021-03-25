
## HTML Elements
1) radio buttons with value and name
    a) Why? to determine what the user will choose, name makes it exclusive
    b) photos as a stretch
2)  Explain rules
    a) How? maybe a list
3) Button
    a) Why? To let the script know when to run
4) Div that holds the result of the game that was just played    
5) Div that holds wins and losses

## State
1) wins
2) computerThrow
    a) How? Math.random()
3) losses/total

## Javascript functionality
1) get value of radio button
    a) How? document.querySelector('input:checked');
2) didUserWin function
    a) What is it? Assigns the random number to 'rock' 'paper' or 'scissors'
        a) How? x < .334 = paper, .334 < x < .667 = scissors, .667 < x = rock
3) Compare didUserWin function to user input
    a) How? 3 if/else statements calling didUserWin comparing userInput to computerThrow
        i) Switch statement once if/else figured out
4) reset button
    a) reset screenshot