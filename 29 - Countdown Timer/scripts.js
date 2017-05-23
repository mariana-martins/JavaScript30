var countdown;

function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;

    countdown = setInterval(function () {
        var secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        console.log(secondsLeft);
    }, 1000);

}