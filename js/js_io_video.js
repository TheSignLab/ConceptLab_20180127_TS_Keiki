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
    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);
}



video2canvas()

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
