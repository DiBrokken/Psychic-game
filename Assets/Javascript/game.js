var alphaLett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessSoFar = [];


document.querySelector("#wins").innerText = wins;

document.querySelector("#losses").innerText = losses;

document.querySelector("#guessesLeft").innerText = guessesLeft;

document.querySelector("#guessSoFar").innerText = guessSoFar;


var computerOptionIndex = alphaLett[Math.floor(Math.random()*alphaLett.length)];
console.log("computerOptionIndex " + computerOptionIndex)

	function resetGame() {
		guessesLeft=9;
		guessesSoFar=[];
		computerOptionIndex = alphaLett[Math.floor(Math.random()*alphaLett.length)];
		console.log("computerOptionIndex " + computerOptionIndex)
	}


function psych(event){
    var keyUserPressed = event.key;

    if(computerOptionIndex == keyUserPressed){
        wins++;
        document.querySelector("#wins").innerText = wins;
    }else{
        guessSoFar.push(keyUserPressed);
        document.querySelector("#guessSoFar").innerText = guessSoFar;
        guessesLeft--;
    if (guessesLeft==0);{
        losses++;
        resetGame()
        document.querySelector("#losses").innerText = losses;
    }
    document.querySelector("#guessesLeft").innerText = guessesLeft;
    
    }

}

    document.onkeypress==psych;





    