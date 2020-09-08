// Rock Paper Scissor Game
// Joshua Wong
// Created On 9/2/2020 (Updated On 9/8/2020)

// Color Button, Colors, and Body Selector
const colorBTN = document.querySelector("#changeColor");
const body = document.querySelector("body");
const colors = ['yellow', 'orange', 'purple', 'darkgray', 'skyblue', 'darkred', 'black'];

// Computer Random Choices
const computerChoice = document.getElementById("computerChoice");
var choiceArray = ['Rock', 'Paper', 'Scissor']; //Options

// All Texts and Scoreboard
var playerScore = document.getElementById("playerNum");
var computerScore = document.getElementById("computerNum");
const allText = document.querySelectorAll(".text");

// Scores and Score Color
var playerNum = 0;
var computerNum = 0;

playerScore.style.color = 'green';
computerScore.style.color = 'red'; 

// Random Background Color
colorBTN.addEventListener("click", function(){ //Change Background Color
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];

    if(body.style.backgroundColor === colors[6]){ //If the background color is black, changes all text to white for player to see.
        for(var x = 0; x <= 4; x++){
            allText[x].style.color = 'white';
        }
    }else{
        for(x = 0; x <= 4; x++){
            allText[x].style.color = colors[6];
        }
    }
})

// Score Reset To 0
function resetScore(){ //Changes Value To 0.
    playerScore.innerHTML = playerNum = 0;
    computerScore.innerHTML = computerNum = 0;
}

// When You Click On Rock
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
            alert("Error! There could be something wrong with the code, or page didn't load in properly. Please reload the page!");
            break;
    }
}

// When You Click On Paper
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
            alert("Error! There could be something wrong with the code, or page didn't load in properly. Please reload the page!");
            break;
    }
}

// When You Click On Scissor
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
            alert("Error! There could be something wrong with the code, or page didn't load in properly. Please reload the page!");
            break;
    }
}