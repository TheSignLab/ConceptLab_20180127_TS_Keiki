var btnClose = $($("nav img")[1]);

var uiMainControl = $(".ui-default-buttons");
var uiFxControl = $(".ui-effects-buttons");
var uiSnapControl = $(".ui-snapped-buttons");
var uiShareControl = $(".ui-sharing-buttons");
var uiContactControl = $(".ui-seemore-buttons");

var viewSeeMore = $(".ui-layer.seemore");



var btnSelectFx = $(".button.select-effect");
var btnTakeSnapshot = $(".button.take-snap");
var btnSwitchCamera = $(".button.button-share");

var btnFx1 = $(".button.fx1");
var btnFx2 = $(".button.fx2");
var btnFx3 = $(".button.fx3");
var btnFx4 = $(".button.fx4");

var btnShare = $($("#id_share_btn")[0]);
var btnDownload = $($(".button.left > img")[1]);
var btnQuieroSaberMas = $($(".button.right .txt")[0]);





var videoBack = document.querySelector('.ui-layer.back-video video');
var videoFront = document.querySelector('.ui-layer.front-video video');
var canvasOutput;





// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);

    return canvas;
}

// Converts canvas to an image
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}




function getRoundedCanvas(sourceCanvas) {

    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas1.width = width;
    canvas1.height = height;

    var canvas2 = document.createElement('canvas');
    var context2 = canvas2.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas2.width = width;
    canvas2.height = height;

    d = 0.75 * height / 4;

    eps = 0;

    P0_x = width / 2;
    P1_x = width / 2;

    P0_y = d + eps;
    P1_y = height - (d + eps);


    context1.beginPath();
    context1.arc(P0_x, P0_y, d, 0, 2 * Math.PI);
    context1.strokeStyle = 'rgba(0,0,0,0.51)';
    context1.stroke();

    context2.beginPath();
    context2.arc(P1_x, P1_y, d, 0, 2 * Math.PI);
    context2.strokeStyle = 'rgba(0,0,0,0.51)';
    context2.stroke();


    context1.clip();
    context2.clip();


    context1.drawImage(sourceCanvas, 0, 0, width, height);
    context2.drawImage(sourceCanvas, 0, 0, width, height);


    var canvas3 = document.createElement('canvas');
    var context3 = canvas3.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas3.width = width;
    canvas3.height = height;

    var backCanvas = document.createElement('canvas');
    var context4 = backCanvas.getContext('2d');
    var width4 = sourceCanvas.width;
    var height4 = sourceCanvas.height;
    backCanvas.width = width4;
    backCanvas.height = height4;
    context4.drawImage(SnapImg1, 0, 0, width4, height4);


    context3.drawImage(backCanvas, 0, 0, width, height);
    context3.drawImage(canvas1, 0, 0, canvas1.width, canvas1.height);
    context3.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height);

    //context3.clip();

    SnapImg2.src = canvas3.toDataURL();





    return canvas2;

}

function drawDataURIOnCanvas(strDataURI, canvas) {
    "use strict";
    var img = new window.Image();
    img.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img, 0, 0);
        canvas = getRoundedCanvas(canvas);
    });
    img.setAttribute("src", strDataURI);
};



var w, h, ratio;
videoFront.addEventListener('loadedmetadata', function () {
    ratio = videoFront.videoWidth / videoFront.videoHeight;
    w = videoFront.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvasOutput.width = w;
    canvasOutput.height = h;
}, false);


var SnapImg1, SnapImg2;
var outCanvasFx;

function uiMethod_TakeSnap() {

    glfx_paused = true;


    var img = new Image();
    img.src = glfx_canvas.update().toDataURL();


    var img2 = new Image();
    img2.src = glfx_canvas2.update().toDataURL();


    SnapImg1 = img;
    SnapImg2 = img2;


    $("#imgTarget")[0].src = img2.src;

    var canvas = document.getElementById('newCanvas');
    canvas.width = $("main").width();
    canvas.height = $("main").height();
    drawDataURIOnCanvas(img2.src, canvas);



}




function cloneCanvas(oldCanvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
}


function uiMethod_DeleteSnap() {

}









function uiControl_go2Init() {

    viewSeeMore.hide();

    uiMainControl.show();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.hide();
    uiMethod_DeleteSnap();

    glfx_paused = false;



}

function uiControl_go2Fx() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.show();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.hide();

    uiMethod_DeleteSnap();
}

function uiControl_go2Snap() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.show();
    uiShareControl.hide();
    uiContactControl.hide();


    uiMethod_TakeSnap();


}

function uiControl_go2Share() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.show();
    uiContactControl.hide();
    uiMethod_DeleteSnap();


}

function uiControl_go2Contact() {
    viewSeeMore.show();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.show();
    uiMethod_DeleteSnap();
}






function uiControl_SwitchCamera() {}

function uiControl_ApplyFx1() {
    updateFilter(1);
    uiControl_go2Init()
}

function uiControl_ApplyFx2() {
    updateFilter(2);
    uiControl_go2Init()
}

function uiControl_ApplyFx3() {
    updateFilter(3);
    uiControl_go2Init()
}

function uiControl_ApplyFx4() {
    updateFilter(4);
    uiControl_go2Init()
}

function uiControl_DownloadPic() {

    var link = document.getElementById('link');
    link.setAttribute('download', 'TheSignLabCo1.png');
    link.setAttribute('href', SnapImg1.src);
    link.click();
    link.setAttribute('download', 'TheSignLabCo2.png');
    link.setAttribute('href', SnapImg2.src);
    link.click();
}

uiControl_go2Init();

btnClose.click(function () {
    uiControl_go2Init();


    regFitler = 10000;

    updateFilter(1)

});

btnSelectFx.click(function () {
    uiControl_go2Fx()
});
btnTakeSnapshot.click(function () {
    uiControl_go2Snap();
});
btnSwitchCamera.click(function () {
    uiControl_SwitchCamera()
});


btnFx1.click(function () {
    uiControl_ApplyFx1()
});
btnFx2.click(function () {
    uiControl_ApplyFx2()
});
btnFx3.click(function () {
    uiControl_ApplyFx3()
});
btnFx4.click(function () {
    uiControl_ApplyFx4()
});


btnShare.click(function () {
    uiControl_go2Share();
    uiMethod_Share();
});
btnDownload.click(function () {
    uiControl_DownloadPic()
});


btnQuieroSaberMas.click(function () {
    uiControl_go2Contact();
})









$("#id_input_name").click(function () {
    $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[0]).addClass("wbox-active");
})
$("#id_input_email").click(function () {
    $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[1]).addClass("wbox-active");
})




$("#id_btn_share_fb").click(function () {
    $(".fb-share-button")[0].click();
});



/*
$(function () {
    var dev_width = $(".frame-container-FrontLayer").width();
    var nSlideEffect = 0;
    $(".effect-titles").slidesjs({
        width: dev_width,
        height: 50,
        navigation: {
            active: false,
            effect: "slide"
        },
        pagination: {
            active: false,
            effect: "slide"
        },
        play: {
            active: false,
            effect: "slide",
            interval: 5000,
            auto: false,
            swap: false,
            pauseOnHover: false,
            restartDelay: 2500
        },
        callback: {
            complete: function (number) {
                updateFilter(number)
            }
        }
    });
});



    <div class="frame-container-RawLayer">
                    <video autoplay nocontrols height="100%">
                    <source src="example_video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                
                <div class="frame-container-BackLayer">
                    <video autoplay nocontrols height="100%">
                    <source src="example_video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>

                </div>
*/









function update_mask() {

};

function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}


function uiMethod_Share() {

  // Get the form element withot jQuery
var form = document.getElementById("myAwesomeForm");

var ImageURL = "data:image/gif;base64,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";
// Split the base64 string in data and contentType
var block = ImageURL.split(";");
// Get the content type of the image
var contentType = block[0].split(":")[1];// In this case "image/gif"
// get the real base64 content of the file
var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

// Convert it to a blob to upload
var blob = b64toBlob(realData, contentType);

// Create a FormData and append the file with "image" as parameter name
var formDataToUpload = new FormData(form);
formDataToUpload.append("image", blob);
    
    $.ajax({
    url:"http://thesign.jlmayorga.com.co/launch/upload_photo.php",
    data: formDataToUpload,// Add as Data the Previously create formData
    type:"POST",
    contentType:false,
    processData:false,
    cache:false,
    dataType:"json", // Change this according to your response from the server.
    error:function(err){
        console.error(err);
    },
    success:function(data){
        console.log(data);
    },
    complete:function(){
        console.log("Request finished.");
    }
});

}
