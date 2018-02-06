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
var onFailSoHard = function (e) {
    console.log('Reeeejected!', e);
    videoElement.src = 'video/ts-video-sample.mp4'; // fallback.

    videoElement.load();
    videoElement.addEventListener('loadeddata', function () {
        videoElement.play();
        video2canvas();
    }, false);
};



if (navigator.getUserMedia) {
    try {
        navigator.getUserMedia({
            video: true
        }, function (stream) {
            videoElement.src = window.URL.createObjectURL(stream);
            videoElement.srcObject = stream;
            videoElement.load();
            videoElement.addEventListener('loadeddata', function () {
                videoElement.play();
                video2canvas();
                
            }, false);
        }, onFailSoHard);
    } catch (e) {
        alert(e.message)
        alert("Error")
    }
} else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia('video', function (stream) {
        videoElement.src = window.webkitURL.createObjectURL(stream);
        videoElement.load();
        videoElement.addEventListener('loadeddata', function () {
            videoElement.play();
            video2canvas();
        }, false);
    }, onFailSoHard);
} else {
    videoElement.src = 'video/ts-video-sample.mp4'; // fallback.

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
