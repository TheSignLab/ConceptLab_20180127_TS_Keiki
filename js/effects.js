var glfx_canvas,
    glfx_texture,
    glfx_videoraw,
    glfx_interval,
    glfx_paused;

var glfx_w,
    glfx_h;

var ctx;

var glfx_canvas2,
    glfx_texture2,|
    glfx_videoraw2,
    glfx_interval2,
    glfx_paused2;

var glfx_w2,
    glfx_h2;

var ctx2;


var regFitler = 1;

function updateFilter(n) {



    if (n == 1 && regFitler != 1) {
        clearInterval(glfx_interval);
        apply_filter_1();
        regFitler = 1;

    }

    if (n == 2 && regFitler != 2) {
        
        clearInterval(glfx_interval);
        apply_filter_2();
        regFitler = 2;
    }

    if (n == 3 && regFitler != 3) {
        clearInterval(glfx_interval);
        apply_filter_1();
        regFitler = 3;
    }

    if (n == 4 && regFitler != 4) {
        clearInterval(glfx_interval);
        apply_filter_2();
        regFitler = 4;
    }


}









function apply_filter_1() {
    
    //Interval
    glfx_interval = setInterval(function () {

        if (!glfx_paused) {
            
            glfx_texture.loadContentsOf(glfx_videoraw);
            glfx_canvas.draw(glfx_texture, glfx_w, glfx_h).colorHalftone(320, 239.5, 0.37, 8.47).update();
            glfx_texture2.loadContentsOf(glfx_videoraw2);
            glfx_canvas2.draw(glfx_texture2, glfx_w2, glfx_h2).denoise(0).update();
            
        }


    }, 10);



}







function apply_filter_2() {
   
    //Interval
    glfx_interval = setInterval(function () {

        if (!glfx_paused) {
               glfx_texture.loadContentsOf(glfx_videoraw);
            glfx_canvas.draw(glfx_texture, glfx_w, glfx_h).denoise(0).update();
            glfx_texture2.loadContentsOf(glfx_videoraw2);
            glfx_canvas2.draw(glfx_texture2, glfx_w2, glfx_h2).colorHalftone(320, 239.5, 0.37, 8.47).update();
        }



    }, 10);
    

}






$(document).ready(function () {

    apply_filter_1();
    
    // Check WebGL Support
    try {
        glfx_canvas = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }
    // Get Dimensions
    glfx_w = $($("main")[0]).innerWidth();
    glfx_h = $($("main")[0]).innerHeight();
    // Construct GLFX Objects
    glfx_videoraw = $(".raw-video video")[0];
    glfx_texture = glfx_canvas.texture(glfx_videoraw);
    // Append Canvas
    $(".back-canvas")[0].appendChild(glfx_canvas);
    
     canvasOutput = $(".ui-layer.back-canvas canvas")[0];
    
    glfx_videoraw.play();
    
    ctx = glfx_canvas.getContext("webgl", {preserveDrawingBuffer: true});
    
     // Check WebGL Support
    try {
        glfx_canvas2 = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }
    // Get Dimensions
    glfx_w2 = $($("main")[0]).innerWidth();
    glfx_h2 = $($("main")[0]).innerHeight();
    // Construct GLFX Objects
    glfx_videoraw2 = $(".raw-video video")[0];
    glfx_texture2 = glfx_canvas2.texture(glfx_videoraw2);
    // Append Canvas
    $(".front-canvas")[0].appendChild(glfx_canvas2);
    
     canvasOutput2 = $(".ui-layer.front-canvas canvas")[0];
    
    glfx_videoraw2.play();
    
    ctx2 = glfx_canvas2.getContext("webgl", {preserveDrawingBuffer: true,drawingBufferWidth:250,drawingBufferHeight:250});
    



})









/*

// declare our variables
var seriously, // the main object that holds the entire composition
    colorbars, // a wrapper object for our source image
    vignette, // a vignette effect
    target; // a wrapper object for our target canvas




var glfx_canvas,
    glfx_texture,
    glfx_videoraw,
    glfx_interval;

var glfx_w,
    glfx_h;

function updateFilter(current_tab) {


    $(".frame-container-BackLayer canvas").remove();
        clearInterval(glfx_interval)
    
    if(current_tab == 0){
        apply_filter_0();
    }else{
        
    }
    
    if(current_tab == 1){
        apply_filter_1();
    }
    
    if(current_tab == 2){
        apply_filter_2();
    }
    
    if(current_tab == 3){
        apply_filter_3();
    }





};









function apply_filter_0() {

    $(".frame-container").css({
        backgroundColor: "rgba(100,100,200,0.5)"
    })

}


function apply_filter_1() {

    // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-BackLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-BackLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
    glfx_interval = setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).dotScreen(glfx_w, glfx_h, 1.19, 13.48).update();
    }, 10);
    
    glfx_videoraw.play();

}

function destroy_filter_1(){
    // Append Canvas
    try{
        $(".frame-container-OutputVideoLayer canvas").remove();
        clearInterval(glfx_interval)
    }catch(e){
        console.log(e)
    }

}



function apply_filter_2() {

       // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-OutputVideoLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-OutputVideoLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
     glfx_interval =  setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).colorHalftone(320, 239.5, 1.35, 13.69).update();
    }, 10);
    
    glfx_videoraw.play();
}






function apply_filter_3() {

       // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-OutputVideoLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-OutputVideoLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
     glfx_interval =  setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).lensBlur(18, 1, 1.96841).update();
    }, 10);
    
    glfx_videoraw.play();
}















*/





/*
function apply_filter_1() {
    try {
        var canvas = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }

    // convert the image to a texture
    var canvas = fx.canvas();
    var videoraw = document.getElementById('id_video_raw_camera');
    var texture = canvas.texture(videoraw);

    $(".frame-container-OutputVideoLayer")[0].appendChild(canvas);
    setInterval(function () {
        texture.loadContentsOf(videoraw);
        canvas.draw(texture).swirl(canvas.width / 2, canvas.height / 2, 100, -2).ink(0.5).update();
    }, 10);
    videoraw.play();
}
*/
