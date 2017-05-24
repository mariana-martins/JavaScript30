var countdown;
var timerDisplay = document.querySelector('.display__time-left');
var endTime = document.querySelector('.display__end-time');
var buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countdown);

    var now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

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

function displayEndTime(timestamp) {
    var end = new Date(timestamp);
    var hour = end.getHours();
    var minutes = end.getMinutes();
    endTime.textContent = 'Be back at ' + (hour > 12 ? hour - 12 : hour) + ':' + (minutes < 10 ? '0' : '') + minutes;
}

function startTimer() {
    var seconds = parseInt(this.dataset.time);
    timer(seconds);
}

function submitForm(e) {
    e.preventDefault();
    var mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
}

// Start the timer from buttons
buttons.forEach(function (button) {
    button.addEventListener('click', startTimer);
});

// Get minutes from the form
document.customForm.addEventListener('submit', submitForm);