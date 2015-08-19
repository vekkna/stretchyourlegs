/*
    A website that reminds your to move about a bit every hour. 
    It starts a one hour timer. At the end of the hour an alert
    reminds your to stretch your legs. If you click cancel the
    timer is reset for 15 minutes, if you click OK it's reset
    for an hour. If you stretch your legs before the hour is 
    up you can click the reset button.
*/

// A suggestion is chosen at random in each alert.
var suggestions = ["Have a stroll.", "Go get the blood flowing.", "Get up and about for a few minutes.", "Would you like to dance?", "Time for a quick break.", "I don't want to freak you out, but toxins are building up in your extremities.", "Health is wealth."];

// the color of the time-remaining text blends from green to red as time passes
var red,
    green,

    // used to cancel the setInterval
    intervalID;

$(document).ready(function () {

    startTimer(60);
});

function startTimer(timeRemaining) {

    intervalID = setInterval(function () {

        red = 240 - timeRemaining;
        green = timeRemaining * 4;

        $('#time-remaining').text(--timeRemaining);

        $('#time-remaining').css('color', rgbToHex(red, green, 0));

        if (timeRemaining <= 0) {
            clearInterval(intervalID);
            if (confirm(suggestions[Math.floor(Math.random() * suggestions.length)] + ' When you come back click OK. Clicking cancel will reset the timer for fifteen minutes.')) {
                startTimer(60);
            } else {
                startTimer(15);
            }
        }
    }, 100);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}