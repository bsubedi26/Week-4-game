$(document).ready(function() {
	

	var game = {
		randomNumber: $("#randomNumber"),
		winsLosses: $("#winsLosses"),
		numGenerate: function (min, max) {
    	return Math.floor(Math.random()*(max-min)+min);

	}	
		
	}
$(randomNumber).html(game.numGenerate(19,121));
$(winsLosses).html("Wins: " + "<br>" + "Losses: ")
var random1 = Math.floor(Math.random()*(13-1)+1);
var random2 = Math.floor(Math.random()*(13-1)+1);
var random3 = Math.floor(Math.random()*(13-1)+1);
var random4 = Math.floor(Math.random()*(13-1)+1);
$("#crystal1").on("click", function(){
	 console.log(random1);
})
$("#crystal2").on("click", function(){
	 console.log(random2);
})
$("#crystal3").on("click", function(){
	 console.log(random3);
})
$("#crystal4").on("click", function(){
	 console.log(random4);
})	

});