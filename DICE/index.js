var dice1;
var dice2;

function rollDice () {
    dice1 = (Math.floor(Math.random() * 6) + 1);
    console.log(dice1);
    dice2 = (Math.floor(Math.random() * 6) + 1);
    console.log(dice2);
    if ( dice1 === dice2 ) {
        rollDice();
    } else {
        setDice1(dice1);
        setDice2(dice2);
    }
    
}
    
function setDice1(diceNum) {
    if (diceNum === 1 ) {
        document.querySelector(".dice1").setAttribute("src", "./images/dice1.png")
    } else if (diceNum === 2 ) { 
        document.querySelector(".dice1").setAttribute("src", "./images/dice2.png") 
    } else if (diceNum === 3 ) { 
        document.querySelector(".dice1").setAttribute("src", "./images/dice3.png") 
    } else if (diceNum === 4 ) { 
        document.querySelector(".dice1").setAttribute("src", "./images/dice4.png") 
    } else if (diceNum === 5 ) { 
        document.querySelector(".dice1").setAttribute("src", "./images/dice5.png") 
    } else if (diceNum === 6 ) { 
        document.querySelector(".dice1").setAttribute("src", "./images/dice6.png") 
    }
}

function setDice2(diceNum) {
    if (diceNum === 1 ) {
        document.querySelector(".dice2").setAttribute("src", "./images/dice1.png")
    } else if (diceNum === 2 ) { 
        document.querySelector(".dice2").setAttribute("src", "./images/dice2.png") 
    } else if (diceNum === 3 ) { 
        document.querySelector(".dice2").setAttribute("src", "./images/dice3.png") 
    } else if (diceNum === 4 ) { 
        document.querySelector(".dice2").setAttribute("src", "./images/dice4.png") 
    } else if (diceNum === 5 ) { 
        document.querySelector(".dice2").setAttribute("src", "./images/dice5.png") 
    } else if (diceNum === 6 ) { 
        document.querySelector(".dice2").setAttribute("src", "./images/dice6.png") 
    }
}

function addFlag() {
    if ( dice1 > dice2 ) {
        document.querySelector(".player1Trophy").classList.toggle("visible");

    } else {
        document.querySelector(".player2Trophy").classList.toggle("visible");
     
    }

}

rollDice();
addFlag();
