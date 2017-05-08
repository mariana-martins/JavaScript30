var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled");
var toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");

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
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    var percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + "%";
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(function (button) {
    button.addEventListener("click", skip);
});

ranges.forEach(function (range) {
    range.addEventListener("change", handleRangeUpdate);
});


var mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", function(e) {
    if (mousedown){
        scrub(e);
    }

});
progress.addEventListener("mousedown", function () {
    mousedown = true;
});
progress.addEventListener("mouseup", function () {
    mousedown = false;
});

