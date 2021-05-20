var winner = Math.floor(Math.random() * 3) + 1;
$("#mixbuttons").hide();

function reset() {
    winner = Math.floor(Math.random() * 3) + 1;
    $("#mixbuttons").hide();
    return document.getElementById("message").innerHTML = "";
}

function check_button(id) {
    if (winner.toString() === id) {
        confetti({
            particleCount: 500,
            spread: 120,
            origin: {
                y: 0.6
            }
        });
        $("#mixbuttons").show()
        return document.getElementById("message").innerHTML = "Congratulations, You guessed it!"
    }
    $("#mixbuttons").show()
    return document.getElementById("message").innerHTML = "Sorry, Would you like to try again?"
}
