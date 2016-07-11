// WINNING NUMBER

	function generateWinningNumber(){
		return Math.ceil(Math.random()*100)
	};

	var winningNumber = generateWinningNumber();


jQuery(document).ready(function(){
	
	//write javascript in here

	//COUNTER
	var counter = 5;

	


	// RECEIVE PLAYER PICK


	$(".checker").on("click", function(){
		var userSub = Number($(".field").val());

		var dif = Math.abs(userSub - winningNumber);

		$(".field").val("");

		// if(counter < 0){
		// 	alert("")
		// }

		function isEven(n){
			if(n % 2 === 0){
				return "even"
			} else {
				return "odd"
			}
		}

		var hintCounter = 0;

		$(".hint").on("click", function(){
			if(userSub > winningNumber && hintCounter == 0){
				$(".tries").text("Too high...")
				hintCounter++;
			} else if (userSub < winningNumber && hintCounter == 0) { 
				$(".tries").text("Too low...")
				hintCounter++;
			} else if (userSub > winningNumber && hintCounter > 0) {
				$(".tries").text("Try an " + isEven(winningNumber) + " number.")
			} else if (userSub < winningNumber && hintCounter > 0) {
				$(".tries").text("Try an " + isEven(winningNumber) + " number.")
			}
		});


		if(counter < 0){
			alert("No more tries left!\nThe winning number was [" + winningNumber + "]\nRestart to try again...")
		} else {

		if(userSub > 100 || userSub < 0 || Number.isInteger(userSub) === false){
			alert("Ha! Nice try...");
		} else {
			if (userSub === winningNumber) {
				alert("You're correct!\nThe correct number is [" + userSub + "]");
				$(".tries").text("Good Job!");
			} else {
				if(counter === 0){
				$(".tries").text("You have " + counter + " tries left!");	
				} else if(dif >= 90){
				$(".tries").text("You have " + counter + " tries left!\nYou're SUPER COLD!");
				} else if (dif < 90 && dif >= 50) {
				$(".tries").text("You have " + counter + " tries left!\nYou're COLD!");
				} else if (dif < 50 && dif >= 25) {
				$(".tries").text("You have " + counter + " tries left!\nYou're WARM!");	
				} else if (dif < 25 && dif >= 10){
				$(".tries").text("You have " + counter + " tries left!\nYou're HOT!");	
				} else {
				$(".tries").text("You have " + counter + " tries left!\nYou're BURNING HOT!");
				}
			}
			counter--;
		}
	}
		});

$(".retry").on("click", function(){
		location.reload()
	});

	});

	

	





