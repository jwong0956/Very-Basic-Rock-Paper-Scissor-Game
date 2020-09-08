// Rock Paper Scissor Game
// Joshua Wong
// 9/2/2020

//Game Text
const gameTitle = document.querySelector("#gameTitle");
const computerText = document.querySelector("#computerText");
const chooseMoveText = document.querySelector("#chooseMoveText");
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

// Colors
const colorBTN = document.querySelector("#changeColor");
const body = document.querySelector("body");
const colors = ['yellow', 'orange', 'purple', 'darkgray', 'skyblue', 'darkred', 'black'];

//Status Of Computer
const computerChoice = document.getElementById("computerChoice");
var choiceArray = ["Rock", "Paper", "Scissor"]; //All Answer Options

// Scoreboard
var playerScore = document.getElementById("playerNum");
var computerScore = document.getElementById("computerNum");
let playerNum = 0;
let computerNum = 0;

// Text Colors
playerScore.style.color = 'green';
computerScore.style.color = 'red'; 

// Background Color Button
colorBTN.addEventListener("click", function(){ //Change Background Color
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];

    if(body.style.backgroundColor === colors[6]){ //If the background color is black, changes all text to white for player to see.
        gameTitle.style.color = 'white';
        computerText.style.color = 'white';
        chooseMoveText.style.color = 'white';
        playerScoreText.style.color = 'white';
        computerScoreText.style.color = 'white';
    }
    else{
        gameTitle.style.color = 'black';
        computerText.style.color = 'black';
        chooseMoveText.style.color = 'black';
        playerScoreText.style.color = 'black';
        computerScoreText.style.color = 'black';
    }
})

// When You Choose Rock 
function rockAnswer(){
    let computerRandom = Math.floor(Math.random() * choiceArray.length);
    computerChoice.innerHTML = choiceArray[computerRandom];
    switch(computerChoice.innerHTML){
        case choiceArray[0]:
            alert("You're tied!");
            break;
        case choiceArray[1]:
            alert("You lose!");
            computerScore.innerHTML = computerNum += 1;
            break;
        case choiceArray[2]:
            alert("You win!");
            playerScore.innerHTML = playerNum += 1;
            break;
        default:
            alert("Error. Could be something wrong with the code or you did something wrong. Please reload the page!");
            break;
    }
}

// When You Choose Paper
function paperAnswer(){
    let computerRandom = Math.floor(Math.random() * choiceArray.length);
    computerChoice.innerHTML = choiceArray[computerRandom];
    switch(computerChoice.innerHTML){
        case choiceArray[0]:
            alert("You win!");
            playerScore.innerHTML = playerNum += 1;
            break;
        case choiceArray[1]:
            alert("You're tied!");
            break;
        case choiceArray[2]:
            alert("You lose!");
            computerScore.innerHTML = computerNum += 1;
            break;
        default:
            alert("Error. Could be something wrong with the code or you did something wrong. Please reload the page!");
            break;
    }
}

// When You Choose Scissor
function scissorAnswer(){
    let computerRandom = Math.floor(Math.random() * choiceArray.length);
    computerChoice.innerHTML = choiceArray[computerRandom];
    switch(computerChoice.innerHTML){
        case choiceArray[0]:
            alert("You Lose!");
            computerScore.innerHTML = computerNum += 1;
            break;
        case choiceArray[1]:
            alert("You Win!");
            playerScore.innerHTML = playerNum += 1;
            break;
        case choiceArray[2]:
            alert("You're tied!");
            break;
        default:
            alert("Error. Could be something wrong with the code or you did something wrong. Please reload the page!");
            break;
    }
}