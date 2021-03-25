## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

## HTML Elements
1) radio buttons with value and name
    a) Why? to determine what the user will choose, name makes it exclusive
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
2) didUserWine function
    a) What is it? Assigns the random number to 'rock' 'paper' or 'scissors'
        a) How? 
3) reset button
    a) reset screenshot