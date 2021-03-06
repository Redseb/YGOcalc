var display = document.getElementById("display");
display.innerHTML = 0; //Initialize the display

var chanceDisplay = document.getElementById("chanceDisplay");

var p1Icon = document.getElementById("p1Icon");
var p1Lp = document.getElementById("p1Lp");
var p2Icon = document.getElementById("p2Icon");
var p2Lp = document.getElementById("p2Lp");

p1Icon.addEventListener("click", function(){calculate(p1Lp);}, false);
p2Icon.addEventListener("click", function(){calculate(p2Lp);}, false);

var sevenButton = document.getElementById("7Button");
var eightButton = document.getElementById("8Button");
var nineButton = document.getElementById("9Button");

sevenButton.addEventListener("click", function(){digitPressed(7);}, false);
eightButton.addEventListener("click", function(){digitPressed(8);}, false);
nineButton.addEventListener("click", function(){digitPressed(9);}, false);

var fourButton = document.getElementById("4Button");
var fiveButton = document.getElementById("5Button");
var sixButton = document.getElementById("6Button");
var diceButton = document.getElementById("diceButton");

fourButton.addEventListener("click", function(){digitPressed(4);}, false);
fiveButton.addEventListener("click", function(){digitPressed(5);}, false);
sixButton.addEventListener("click", function(){digitPressed(6);}, false);
diceButton.addEventListener("click", rollAnimation, false);

var oneButton = document.getElementById("1Button");
var twoButton = document.getElementById("2Button");
var threeButton = document.getElementById("3Button");
var coinButton = document.getElementById("coinButton");

oneButton.addEventListener("click", function(){digitPressed(1);}, false);
twoButton.addEventListener("click", function(){digitPressed(2);}, false);
threeButton.addEventListener("click", function(){digitPressed(3);}, false);
coinButton.addEventListener("click", flippingAnimation, false);

var plusButton = document.getElementById("plusButton");
var zeroButton = document.getElementById("0Button");
var minusButton = document.getElementById("minusButton");
var clearButton = document.getElementById("clearButton");

plusButton.addEventListener("click", setAddFlag, false);
zeroButton.addEventListener("click", function(){digitPressed(0);}, false);
minusButton.addEventListener("click", setSubFlag, false);
clearButton.addEventListener("click", clear, false);

var addFlag = false; //flags used for calculate() and flagSetting functions
var subFlag = false;

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset, false);


function digitPressed(digit){
    if(display.innerHTML == 0){ //If the display is empty overwrite the 0
        display.innerHTML = digit;
    } else { //else append the digit to the digit on display already
        display.innerHTML = display.innerHTML + digit;
    }
    console.log("Display: " + display.innerHTML);
}

function clear(){
    display.innerHTML = 0;
    console.log("Display: " + display.innerHTML);
}

function setAddFlag(){ //sets flag
    addFlag = true;
    console.log("addFlag: True");
}

function setSubFlag(){ //setsflag
    subFlag = true;
    console.log("subFlag: True");
}

function calculate(playerLp){
    if(addFlag && !subFlag){
        //Do calculation and apply result
        console.log("Adding: " + playerLp.innerHTML + " with " + display.innerHTML);
        playerLp.innerHTML = parseInt(playerLp.innerHTML) + parseInt(display.innerHTML);
        //Reset flags and display
        addFlag = false;
        clear();
    } else if (subFlag && !addFlag){
        //Do calculation and apply result
        console.log("Subtracting: " + playerLp.innerHTML + " with " + display.innerHTML);
        playerLp.innerHTML = parseInt(playerLp.innerHTML) - parseInt(display.innerHTML);
        //Reset flags and display
        subFlag = false;
        clear();
    } else {
        //Neither flag is selected
        alert("First select \'+\' or \'-\'");
    }
}

function reset(){
    console.log("Resetting player's LP and display")
    p1Lp.innerHTML = 4000;
    p2Lp.innerHTML = 4000;
    display.innerHTML = 0;
    addFlag = false;
    subFlag = false;
    chanceDisplay.src = "";
}

function rollAnimation(){
    chanceDisplay.src = "images/diceRoll.gif";
    setTimeout(roll, 2000);

}

function roll() {
    var randomNumber = Math.floor(Math.random() * Math.floor(6)) + 1; //Generate random number
    if(randomNumber == 1){
        chanceDisplay.src = "images/d1.png"
    } else if(randomNumber == 2){
        chanceDisplay.src = "images/d2.png";
    } else if(randomNumber == 3){
        chanceDisplay.src = "images/d3.png";
    } else if(randomNumber == 4){
        chanceDisplay.src = "images/d4.png";
    } else if(randomNumber == 5){
        chanceDisplay.src = "images/d5.png";
    } else if(randomNumber == 6){
        chanceDisplay.src = "images/d6.png";
    }
}

function flippingAnimation(){
    chanceDisplay.src = "images/coinFlip.gif";
    setTimeout(flip, 2000);
}

function flip(){
    var randomNumber = Math.floor(Math.random() * Math.floor(2)) + 1; //Generate random number
    if (randomNumber == 1){
        chanceDisplay.src = "images/coinHeads.png";
    } else if (randomNumber == 2){
        chanceDisplay.src = "images/coinTails.png";
    }
}