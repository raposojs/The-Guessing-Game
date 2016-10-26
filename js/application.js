// WINNING NUMBER

function generateWinningNumber() {
    return Math.ceil(Math.random() * 100)
};

var winningNumber = generateWinningNumber();



// WAIT FOR PAGE TO FULLY LOAD

jQuery(document).ready(function() {

    //COUNTER
    var counter = 5;

    var userSub = Number($(".field").val());

    function isEven(n) {
        if (n % 2 === 0) {
            return "even"
        } else {
            return "odd"
        }
    }

    $(".checker").on("click", function() {

        // RECEIVE PLAYER PICK
        userSub = Number($(".field").val());

        // DIFFERENCE BETWEEN PLAYER SUB AND WINNING NUMBER	
        var dif = Math.abs(userSub - winningNumber);

        if (counter <= 0) {
        	$(".tries").text("You have " + 0 + " tries left! Try again...");
            alert("No more tries left!\nThe winning number was [" + winningNumber + "]\nRestart to try again...")
        } else {

            if (userSub > 100 || userSub < 0 || Number.isInteger(userSub) === false) {
                alert("Ha! Nice try...");
            } else {
                if (userSub === winningNumber) {
                    alert("You're correct!\nThe correct number is [" + userSub + "]");
                    $(".tries").text("Good Job!");
                } else {
                    if (counter === 0) {
                        $(".tries").text("You have " + counter + " tries left!");
                    } else if (dif >= 90) {
                        $(".tries").text("You have " + counter + " tries left!\nYou're SUPER COLD!");
                    } else if (dif < 90 && dif >= 50) {
                        $(".tries").text("You have " + counter + " tries left!\nYou're COLD!");
                    } else if (dif < 50 && dif >= 25) {
                        $(".tries").text("You have " + counter + " tries left!\nYou're WARM!");
                    } else if (dif < 25 && dif >= 10) {
                        $(".tries").text("You have " + counter + " tries left!\nYou're HOT!");
                    } else {
                        $(".tries").text("You have " + counter + " tries left!\nYou're BURNING HOT!");
                    }
                }
                counter--;
            }
        }
    });

    var hints = 2;

    $(".hint").on("click", function() {

        if (hints === 2) {

            if (userSub > winningNumber) {
                $(".tries").text("Too high...")
                $(".hint").text("1 Hint Left")
                hints--
            } else if (userSub < winningNumber) {
                $(".tries").text("Too low...")
                $(".hint").text("1 Hint Left")
                hints--
            }

        } else if (hints === 1) {
            if (userSub > winningNumber) {
                $(".tries").text("Try an " + isEven(winningNumber) + " number.")
                $(".hint").text("No more hints left")
                hints--
            } else if (userSub < winningNumber) {
                $(".tries").text("Try an " + isEven(winningNumber) + " number.")
                $(".hint").text("No more hints left")
                hints--
            }
        }
    });

    $(".retry").on("click", function() {
        location.reload()
    });

});
