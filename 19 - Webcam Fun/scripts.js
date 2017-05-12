var video = document.querySelector('.player');
var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');
var strip = document.querySelector('.strip');
var snap = document.querySelector('.snap');

// Add video from webcam
function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function (localMediaStream) {
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
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = '<img src="'+ data + '">';
    strip.insertBefore(link, strip.firsChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);

