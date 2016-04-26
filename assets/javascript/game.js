$(document).ready(function() {
	

	var game = {
		randomNumber: $("#randomNumber"),
		winsLosses: $("#winsLosses"),
		totalscore: $("#totalscore"),
		numGenerate: function (min, max) {
    	return Math.floor(Math.random()*(max-min)+min);

	},	

	}
var randomGeneratedNumber = game.numGenerate(19,121);
$(randomNumber).html(randomGeneratedNumber);
var random1 = Math.floor(Math.random()*(13-1)+1);
var random2 = Math.floor(Math.random()*(13-1)+1);
var random3 = Math.floor(Math.random()*(13-1)+1);
var random4 = Math.floor(Math.random()*(13-1)+1);
var total = 0;
var wins = 0;
var losses = 0;
$(totalscore).html("Your total score is: " + total)
$(winsLosses).html("Wins: " + wins + "<br>" + "Losses: " + losses)
function start() {
$("#crystal1").on("click", function(){
	 total += random1;
	 console.log(total);
	 $(totalscore).html("Your total score is: " + total)
	 	if (total == randomGeneratedNumber) {
			wins++;
			$(winsLosses).html("Wins: " + wins + "<br>" + "Losses: " + losses)
			$(randomNumber).html(game.numGenerate(19,121));
			total = 0;
			$(totalscore).html("Your total score is: " + total)
			start();
			}
})
$("#crystal2").on("click", function(){
	 total += random2;
	 console.log(total);
	 $(totalscore).html("Your total score is: " + total)
	 if (total == randomGeneratedNumber) {
			wins++;
			$(winsLosses).html("Wins: " + wins + "<br>" + "Losses: " + losses)
			$(randomNumber).html(game.numGenerate(19,121));
			total = 0;
			$(totalscore).html("Your total score is: " + total)
			start();
		}
})
$("#crystal3").on("click", function(){
	 total += random3;
	 console.log(total);
	 $(totalscore).html("Your total score is: " + total)
	 if (total == randomGeneratedNumber) {
			wins++;
			$(winsLosses).html("Wins: " + wins + "<br>" + "Losses: " + losses)
			$(randomNumber).html(game.numGenerate(19,121));
			total = 0;
			$(totalscore).html("Your total score is: " + total)
			start();
		}
})
$("#crystal4").on("click", function(){
	 total += random4;
	 console.log(total);
	 $(totalscore).html("Your total score is: " + total)
	 if (total == randomGeneratedNumber) {
			wins++;
			$(winsLosses).html("Wins: " + wins + "<br>" + "Losses: " + losses)
			$(randomNumber).html(game.numGenerate(19,121));
			total = 0;
			$(totalscore).html("Your total score is: " + total)
			start();
		}
})
}
start();


	



});