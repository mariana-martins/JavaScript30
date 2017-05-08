// Get our elements
var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled");
var toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");

//Build our functions
function togglePlay() {
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    if (video.paused){
        toggle.textContent = "►"
    } else {
        toggle.textContent = "▌▌";
    }
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}
// Hook up the event listners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(function (button) {
    button.addEventListener("click", skip);
});