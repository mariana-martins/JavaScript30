var video = document.querySelector('.player');
var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');
var strip = document.querySelector('.strip');
var snap = document.querySelector('.snap');

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

getVideo();