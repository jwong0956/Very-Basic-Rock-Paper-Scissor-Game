// Rock Paper Scissor Game
// Joshua Wong
// Created On 9/2/2020 (Updated On 9/15/2020)

// Color Button, Colors, and Body Selector
const colorBTN = document.querySelector("#changeColor");
const body = document.querySelector("body");
const colors = ['yellow', 'orange', 'purple', 'darkgray', 'skyblue', 'darkred', 'black', '#89ff90'];

//Pictures
var picture = document.getElementById("changePicture");
var pictureText = document.getElementById("PictureNum");
var numOfThePic = document.getElementById("numOfPic");
let pictureArray = ['images/picture1.jpg', 'images/picture2.jpg', 'images/picture3.jpg', 'images/picture4.jpg', 'images/picture5.jpg']; // All The Images
const pictureBTN = document.querySelector("#pictures");
var picNum = 0; // Increases the count when you change picture.

// Computer Random Choices
const computerChoice = document.getElementById("computerChoice");
const choiceArray = ['Rock', 'Paper', 'Scissor']; //Options

// Texts, Scoreboard and Scores
var playerScore = document.getElementById("playerNum");
var computerScore = document.getElementById("computerNum");
var tiedScore = document.getElementById("tieNum");
const tiedText = document.getElementById("tiedScore");
const allText = document.querySelectorAll(".text");
var playerNum = 0;
var computerNum = 0;
var tiedNum = 0;

playerScore.style.color = 'green'; // Player Score Color 
computerScore.style.color = 'red'; // Computer Score Color
tiedScore.style.color = 'brown'; // When you're tied

// Random Background Color
colorBTN.addEventListener("click", function(){ //Change Background Color
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];

    if(body.style.backgroundColor === colors[6]){ //If the background color is black, changes all text to white for player to see.
        for(var x = 0; x <= 4; x++){
            allText[x].style.color = 'white';
            pictureText.style.color = 'white';
            tiedText.style.color = 'white';
        }
    }else{
        for(x = 0; x <= 4; x++){
            allText[x].style.color = colors[6];
            pictureText.style.color = colors[6];
            tiedText.style.color = colors[6];
        }
    }
})

// Score Reset To 0
function resetScore(){ //Changes Value To 0.
    playerScore.innerHTML = playerNum = 0;
    computerScore.innerHTML = computerNum = 0;
    tiedScore.innerHTML = tiedNum = 0;
}

// When You Click On Rock
function rockAnswer(){
    let computerRandom = Math.floor(Math.random() * choiceArray.length);
    computerChoice.innerHTML = choiceArray[computerRandom];
    switch(computerChoice.innerHTML){
        case choiceArray[0]:
            alert("You're tied!");
            tiedScore.innerHTML = tiedNum += 1;
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
            tiedScore.innerHTML = tiedNum += 1;
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
            tiedScore.innerHTML = tiedNum += 1;
            break;
        default:
            alert("Error! There could be something wrong with the code, or page didn't load in properly. Please reload the page!");
            break;
    }
}

// Change Pictures
pictureBTN.addEventListener("click", function(){
   picNum++;
   console.log(picNum);

   picture.src = pictureArray[picNum];
   switch(picNum){
       case 5:
           picture.src = pictureArray[0];
           numOfThePic.innerHTML = picNum = 0;
       default:
           numOfThePic.innerHTML = '1';
           break;
   }
   numOfThePic.innerHTML = picNum + 1;
})