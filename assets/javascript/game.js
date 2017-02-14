var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guesses = 9;

document.getElementById("wins").innerHTML = "wins";
document.getElementById("losses").innerHTML = "losses";
document.getElementById("guesses").innerHTML = "guesses"; 

var computerLetter = letters[Math.floor(Math.random() * letters.length)]
console.log(computerLetter)

document.onkeyup = function(event) {
	var userLetter = event.key;

	if(computerLetter === userLetter){
		wins++;
		console.log(wins)
		computerLetter = letters[Math.floor(Math.random() * letters.length)];
		console.log(computerLetter);

	}else{
		document.getElementById("guessDisplay").innerHTML += " " + userLetter;
		if(userLetter !== computerLetter){
			guesses--;
			console.log(guesses)
		}

		if (guesses === 0){
			alert("You Lose! The correct letter was " + computerLetter);
			losses++;
			console.log("number of losses " + losses);
			document.getElementById("guessDisplay").innerHTML = " "
			guesses = 9;
			computerLetter = letters[Math.floor(Math.random() * letters.length)]; 
		}

	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML = guesses;
}































