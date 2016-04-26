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

});