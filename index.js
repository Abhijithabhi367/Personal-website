var randomNo01 = Math.floor((Math.random()*6)+1);
var randomNo02 = Math.floor((Math.random()*6)+1);
var dice01 = "dice" + randomNo01 + ".png";
var dice02 = "dice" + randomNo02 + ".png";
var randomDice01  = "images\\" + dice01 ;
var randomDice02  = "images\\" + dice02 ;
 document.querySelector(".img1").setAttribute("src",randomDice01 );
 document.querySelector(".img2").setAttribute("src",randomDice02 );
    if (randomNo01 > randomNo02 ) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (randomNo01 < randomNo02){
        document.querySelector("h1").textContent = "Player 2 Wins";
    } else if (randomNo01 = randomNo02) {
        document.querySelector("h1").textContent = "Draw !";
    }