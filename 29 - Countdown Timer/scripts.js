var countdown;
var timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(function () {
        var secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    var display = minutes + ':' + (remainderSeconds < 10 ? '0' : '') + remainderSeconds;
    document.title = display;
    timerDisplay.textContent = display;
}