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
    videoElement.addEventListener('loadeddata', function() {
   videoElement.play();
        
        video2canvas();
         //anvas_clip();
           
}, false);
};

if (navigator.getUserMedia) {
    navigator.getUserMedia({
        video: true
    }, function (stream) {
        videoElement.src = stream;
            videoElement.load();
    videoElement.addEventListener('loadeddata', function() {
   videoElement.play();
        
        video2canvas();
         //anvas_clip();
           
}, false);
    }, onFailSoHard);
} else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia('video', function (stream) {
        videoElement.src = window.webkitURL.createObjectURL(stream);
            videoElement.load();
    videoElement.addEventListener('loadeddata', function() {
   videoElement.play();
        
        video2canvas();
         //anvas_clip();
           
}, false);
    }, onFailSoHard);
} else {
    videoElement.src = 'video/ts-video-sample.mp4'; // fallback.
        videoElement.load();
    videoElement.addEventListener('loadeddata', function() {
   videoElement.play();
        
        video2canvas();
         //anvas_clip();
           
}, false);
}



// ---------------------------- //
function video2canvas(){
    var tsVideo = document.querySelector('video');
    var tsCanvas = document.getElementById('cnOut');
    var tsContext = tsCanvas.getContext('2d');
    
    var vw = $("views").width();
    var vh = $("views").height();
    
    var vidW = $("video").width();
    var vidH = $("video").height();
    var vidProp = vidW/vidH;
    var vProp = vw/vh;
    console.log(vidProp)
    $(tsCanvas).width(vw);
    $(tsCanvas).height(vw/vidProp);
    
setInterval(function(){
    tsContext.drawImage(tsVideo, 0, 0,vw,vw/vidProp);
},0);
    
}
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
