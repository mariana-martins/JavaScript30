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
// Hook up the event listners