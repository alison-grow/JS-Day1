// rock paper scissors game
// 2 players
// players get to choose between 3 choices
// compare choices to see who wins
// we play against a computer

let players = ['us', 'computer'];
let choices = ['rock', 'paper', 'scissors'];

const rockButton = document.createElement('button');
rockButton.innerText = 'Rock';
document.body.append(rockButton);

const paperButton = document.createElement('button');
paperButton.innerText = 'Paper';
document.body.append(paperButton);

const scissorsButton = document.createElement('button')
scissorsButton.innerText = 'Scissors';

function chooseRandomOption() {
    const randomNumber = Math.random() * options.length;
    const randomIndex = Math.floor(randomNumber);
    return options[randomIndex];
}

rockButton.addEventListener('click', () => {
    playersChoice = 'rock';
    playersChoiceElement.innerText = 'player chose ' + playersChoice;
    setTimeout(computerPlay, 2000);
    resultElement.innerText = ''
});

paperButton.addEventListener('click', () => {
    playersChoice = 'paper';
    playersChoiceElement.innerText = 'player chose ' + playersChoice;
    setTimeout(computerPlay, 2000);
});

scissorsButton.addEventListener('click', () => {
    playersChoice = 'scissors';
    playersChoiceElement.innerText = 'player chose ' + playersChoice;
    setTimeout(computerPlay, 2000);
});

function playerPlay(choice) {
    playersChoice = choice;
    playersChoiceElement.innerText = 'player chose ' + playersChoice;
    setTimeout(computerPlay, 2000);
}

function computerPlay() {
    computerChoice = chooseRandomOption();
    computerChoiceElement.innerText = 'computer chose ' + chooseRandomOption();
}

const playersChoiceElement = document.createElement('h2');
document.body.append(playersChoiceElement);

const computerChoiceElement = document.createElement('h2');
document.body.append(computerChoiceElement);

const resultElement = document.createElement('h2');
document.body.append(resultElement);

function compareChoices() {
    if (playersChoice === computerChoice){
        Tie();
    } else if (playersChoice === 'rock' && computerChoice === 'scissors'){
        resultElement.innerText = 'player wins!';
    } else if (playersChoice === 'scissors' && computerChoice === 'rock'){
        resultElement.innerText = 'computer wins!';
    } else if (playersChoice === 'paper' && computerChoice === 'rock'){
        resultElement.innerText = 'player wins!'
    } else if (playersChoice === )
}

function tie() {
    resultElement.innerText = 'tie!';
}

voices = window.speechSynthesis.getVoices();

const startButton = document.createElement('button');
startButton.innerText = 'start';
document.body.append(startButton);

startButton.addEventListener('click', => {

})