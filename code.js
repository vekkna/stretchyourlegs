$(document).ready(function () {
    var intervalID;
    startTimer(60);
});

function startTimer(timeRemaining) {

    intervalID = setInterval(function () {

        if (timeRemaining == 60) {
            setTimeColor('green');
        }
        if (timeRemaining == 15) {
            setTimeColor('orange');
        } else if (timeRemaining == 5) {
            setTimeColor('red');
        }
        $('#time-remaining').text(--timeRemaining);
        if (timeRemaining <= 0) {
            clearInterval(intervalID);
            if (confirm('Time to stretch the legs. Clicking cancel will reset the timer for fifteen minutes.')) {
                  startTimer(60);
            } else {
                   startTimer(15);
            }
        }

    }, 100);
}

$('#reset-timer-btn').click(function () {
   clearInterval(intervalID);
    startTimer(60);
});

function setTimeColor(color) {
    $('#time-remaining').css('color', color);
}