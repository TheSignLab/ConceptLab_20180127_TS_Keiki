/* ------------------------------------------------------
    Javascript Handler Script for Input Outpu video
    Author:Jorge luis mayorga
    Update: 31/01/18
    Email : wallamejorge@hotmail.com
  ------------------------------------------------------ */






// ---------------------------- //
//  Cam or Video File on canIn
// ---------------------------- //
var videoElement = document.querySelector('video');
<<<<<<< HEAD

var constraints = {
    audio: false,
    video: {
        facingMode: 'user'
    }
}

if (navigator.getUserMedia) {
    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
        videoElement.src = window.URL.createObjectURL(stream);
        videoElement.srcObject = stream;
        videoElement.load();
        videoElement.addEventListener('loadeddata', function () {
            videoElement.play();
            video2canvas();
        }, false);
    });
} else {
    videoElement.src = 'video/ts-video-sample.mp4'; // fallback.
=======
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');

var constraints = {
    audio: false,
    video: true
};

function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console
    videoElement.srcObject = stream;
    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);
}

function handleError(error) {
    
    videoElement.src = 'video/ts-video-sample.mp4';
    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);

}




    var vw = $(".footer").width();
    var vh = $("views").height();

    var vidW = $("video").width();
    var vidH = $("video").height();


    tsCanvasOut.width = vw;
    tsCanvasOut.height = vw / vidProp;

    tsCanvasIn.width = vw;
    tsCanvasIn.height = vw / vidProp;

    tsCanvasFx1.width = vw;
    tsCanvasFx1.height = vw / vidProp;

    tsCanvasFx2.width = vw;
    tsCanvasFx2.height = vw / vidProp;

window.onload = function() {
    navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);

    video2canvas();
}

/*

var constraints = {
    audio: false,
    video: {
        facingMode: 'user'
    }
}

var pCam = navigator.mediaDevices.getUserMedia(constraints);
pCam.then(stream => pCamSuccessful(stream));
pCam.catch(e => pCamError(e));


function pCamSuccessfu(stream) {
    videoElement.srcObject = stream;
    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);
}

function pCamError(e) {

    videoElement.src ='video/ts-video-sample.mp4';
>>>>>>> 83c46ebced142a0e4738e53181fc028490ce68bd
    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);
}

<<<<<<< HEAD


video2canvas()
=======
>>>>>>> 83c46ebced142a0e4738e53181fc028490ce68bd

video2canvas();
// ---------------------------- //

/*


function video2canvas() {

        var v = document.getElementById('v');
        var canvas = document.getElementById('c');
        var context = canvas.getContext('2d');

        var cw = Math.floor(canvas.clientWidth / 100);
        var ch = Math.floor(canvas.clientHeight / 100);
        canvas.width = cw;
        canvas.height = ch;

        draw(this, context, cw, ch);
        
}

    function draw(v, c, w, h) {
        if (v.paused || v.ended) return false;
        c.drawImage(v, 0, 0, w, h);
        setTimeout(draw, 20, v, c, w, h);
    }
}
*/
