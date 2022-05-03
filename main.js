const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 'paper' || 'scissors'){
        return userInput;
    } else {
        console.log(`Error input must be rock, paper or scissors!`);
    }
};

const getComputerChoice = () => {
    num = Math.floor(Math.random() * 3);
    let choice = num === 0 ? 'rock' : num === 1 ? 'paper' : 'scissors';
    return choice;
};

const determineWinner = (userChoice, computerChoice) => {
    let winner = 
    userChoice === computerChoice 
    ? 'tie' 
    : userChoice === 'paper' && computerChoice === 'rock' 
    ? 'User Won!' 
    : userChoice === 'scissor' && computerChoice === 'paper' 
    ? 'User Won!' 
    : userChoice === 'rock' && computerChoice === 'scissors' 
    ? 'User Won!' 
    : 'Computer Won!';
    return winner;
};

const playGame = () => {
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice();
    console.log(`${userChoice} vs ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();

