var video = document.querySelector('.player');
var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');
var strip = document.querySelector('.strip');
var snap = document.querySelector('.snap');

// Add video from webcam
function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function (localMediaStream) {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(function (error) {
            console.error("This is a error message!", error);
        });
}

// Display a big image from webcam
function paintToCanvas() {
    var width = video.videoWidth;
    var height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(function () {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

// Play audio when take a photo
function takePhoto() {
    snap.currentTime = 0;
    snap.play();
}

getVideo();

