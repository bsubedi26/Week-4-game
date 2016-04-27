$(document).ready(function() {
var randomNumber = $("#randomNumber");
var winsId = $("#wins");
var lossesId = $("#losses");
var totalscore = $("#totalscore");
var total = 0;
var wins = 0;
var losses = 0;
//function that generates a random number based on passed minimum and maximum values
var numGenerate = function (min, max) {
return Math.floor(Math.random()*(max-min)+min);
}
var randomGeneratedNumber = numGenerate(19,121);
$(randomNumber).append(randomGeneratedNumber);
//Initial crystal values ranging from 1 to 12
var random1 = numGenerate(1,13);
var random2 = numGenerate(1,13);
var random3 = numGenerate(1,13);
var random4 = numGenerate(1,13);

//Function that refreshes the crystal values with new numbers after each win/loss
var refresh = function() {
random1 = numGenerate(1,13);
random2 = numGenerate(1,13);
random3 = numGenerate(1,13);
random4 = numGenerate(1,13);
};
//Initial total score display
$(totalscore).html("Your total score is: " + total);

//Adding to total score based on user clicks, then running the check function to test the outcome
$("#crystal1").on("click", function(){
	 total += random1;
	 $(totalscore).html("Your total score is: " + total);
	 check();
})
		
$("#crystal2").on("click", function(){
	 total += random2;
	 $(totalscore).html("Your total score is: " + total);
	 check();
})
$("#crystal3").on("click", function(){
	 total += random3;
	 $(totalscore).html("Your total score is: " + total);
	 check();
})
$("#crystal4").on("click", function(){
	 total += random4;
	 $(totalscore).html("Your total score is: " + total);
	 check();
})

//Checks to see if user total score matches the random number
var check = function() {
	if (randomGeneratedNumber == total) {
		wins++;
		$(winsId).html("Wins: " + wins);
		$(randomNumber).empty();
		randomGeneratedNumber = numGenerate(19,121);
		$(randomNumber).html(randomGeneratedNumber);
		total = 0;
		$(totalscore).html("Your total score is: " + total)
		refresh();
	}
	if (randomGeneratedNumber < total) {
		losses++;
		$(lossesId).html("Losses: " + losses);
		$(randomNumber).empty();
		randomGeneratedNumber = numGenerate(19,121);
		$(randomNumber).html(randomGeneratedNumber);
		total = 0;
		$(totalscore).html("Your total score is: " + total)
		refresh();
	}
}
})





	


