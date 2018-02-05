   // ---//
try{
   var vw = $("footer").width();
   var vh = $("views").height();

   var vidW = $("video").width();
   var vidH = $("video").height();

   var vidProp = vidW / vidH;
   var vProp = vw / vh;

   var tsVideo = document.querySelector('video');

   var tsCanvasIn = document.getElementById('cnIn');
   var tsContextIn = tsCanvasIn.getContext('2d');

   var tsCanvasFx1 = document.getElementById('cnFx1');
   var tsContextFx1 = tsCanvasFx1.getContext('2d');

   var tsCanvasFx2 = document.getElementById('cnFx2');
   var tsContextFx2 = tsCanvasFx1.getContext('2d');

   var tsCanvasFx2Masked = document.getElementById('cnFx2Masked');
   var tsContextFx2Masked = tsCanvasFx1.getContext('2d');

   var tsCanvasMerged = document.getElementById('cnMerged');
   var tsContextMerged = tsCanvasFx1.getContext('2d');

   var tsCanvasOut = document.getElementById('cnOut');
   var tsContextOut = tsCanvasOut.getContext('2d');

   var CurrentFx = "Default";

   var isPaused = true;

   function video2canvas() {



       tsCanvasOut.width = vw;
       tsCanvasOut.height = vw / vidProp;

       tsCanvasIn.width = vw;
       tsCanvasIn.height = vw / vidProp;

       tsCanvasFx1.width = vw;
       tsCanvasFx1.height = vw / vidProp;

       tsCanvasFx2.width = vw;
       tsCanvasFx2.height = vw / vidProp;



       setInterval(function () {
           if (isPaused) {
               vw = $("footer").width();
               vh = $("views").height();
               vidW = $("video").width();
               vidH = $("video").height();

               vidProp = vidW / vidH;
               vProp = vw / vh;

               sx = 0;
               sy = 0;
               sw = 0;
               sh = 0;
               dx = vw;
               dy = vh;
               dw = vw;
               dh = vh;


               tsContextIn.drawImage(tsVideo, 0, 0, vw, vw / vidProp);

               tsCanvasFx1 = applyFx1(CurrentFx, tsCanvasIn, tsContextFx1);
               tsContextFx1 = tsCanvasFx1.getContext('2d');

               tsCanvasFx2 = applyFx2(CurrentFx, tsCanvasFx1, tsContextFx2);
               tsContextFx2 = tsCanvasFx2.getContext('2d');


               tsContextOut.drawImage(tsCanvasFx2, 0, 0, vw, vw / vidProp);

               /*
                          tsContextFx1.drawImage(tsCanvasIn,0,0,sx,sy,sw,sh,dx, dy, dw,dh)

                          tsCanvasFx1 = applyFx1(CurrentFx, tsCanvasIn);
                          tsContextFx1 = tsCanvasFx1.getContext('2d');

                          tsContextFx2.drawImage(tsCanvasIn,0,0,sx,sy,sw,sh,dx, dy, dw,dh)

                          tsCanvasFx2 = applyFx2(CurrentFx, tsCanvasIn);
                          tsContextFx2 = tsCanvasFx2.getContext('2d');



                          tsCanvasFx2Masked = masked(tsCanvasFx2);
                          tsContextFx2Masked = tsCanvasFx2Masked.getContext('2d');




                          tsCanvasMerged = merged(tsCanvasFx1, tsCanvasFx2Masked);
                          tsContextMerged = tsCanvasMerged.getContext('2d');



                          tsContextOut.drawImage(tsCanvasMerged,0,0,sx,sy,sw,sh,dx, dy, dw,dh)


               */
           }
       }, 0);



   }



   var toogleColorized = false;


   setInterval(function () {
       if (toogleColorized == true) {
           toogleColorized = false;
       } else {
           toogleColorized = true;
       }
       console.log(toogleColorized)
   }, 13)


   function applyFx1(CurrentFx, tsCanvasIn, tsContextFx1) {
       // load image from data url
       var imageObj = new Image();


       if (CurrentFx == "Default") {
          imageObj.src = "img/fx1_gradient1.png";
           imageObj.onload = function () {
                tsContextFx1.globalCompositeOperation = "xor";
               tsContextFx1.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
               tsContextFx1.drawImage(imageObj, 0, 0, vw, vw / vidProp);
           };
           
       }
       if (CurrentFx == "ColorizedParty") {
         
           if (toogleColorized == true) {
               imageObj.src = "img/fx1_gradient2_b.png";
               imageObj.onload = function () {
                     tsContextFx1.globalCompositeOperation = "xor";
                   tsContextFx1.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
                   tsContextFx1.drawImage(imageObj, 0, 0, vw, vw / vidProp);
               };
           } else {
               imageObj.src = "img/fx1_gradient2_a.png";
               imageObj.onload = function () {
                     tsContextFx1.globalCompositeOperation = "xor";
                   tsContextFx1.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
                   tsContextFx1.drawImage(imageObj, 0, 0, vw, vw / vidProp);
               };
           }


       }
       if (CurrentFx == "TVNoise") {
          
           imageObj.onload = function () {
                tsContextFx1.globalCompositeOperation = "xor";
               tsContextFx1.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
               tsContextFx1.drawImage(imageObj, 0, 0, vw, vw / vidProp);
           };
           imageObj.src = "img/fx1_gradient3.png";
       }
       if (CurrentFx == "HueCarnival") {
         
           imageObj.onload = function () {
                 tsContextFx1.globalCompositeOperation = "xor";
               tsContextFx1.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
               tsContextFx1.drawImage(imageObj, 0, 0, vw, vw / vidProp);
           };
           imageObj.src = "img/fx1_gradient4.png";
       }

       return tsCanvasFx1;
   }



   var imageObjOut;
   var nh, nw;


   function applyFx2(CurrentFx, tsCanvasFx1, tsContextFx2) {
       // load image from data url
       var imageObj = new Image();
       imageObj.onload = function () {
           nh = vw / vidProp;
           nw = (imageObj.width / imageObj.height) * nh;
           sx = vw / 2 - nw / 2;
           sy = 0;

           tsContextFx2.drawImage(tsCanvasIn, 0, 0, vw, vw / vidProp);
           tsContextFx2.drawImage(imageObj, sx, sy, nw, nh);
           tsContextFx2.drawImage(tsCanvasFx1, 0, 0, vw, vw / vidProp);
           tsContextFx2.globalCompositeOperation = "destination-atop";



       };

       imageObj.src = "img/fx_mask_inv.png";

       return tsCanvasFx2;
   }




   function masked(tsCanvas) {


       return tsCanvas
   }

   function merged(tsCanvas) {
       /*
              var ctx = tsCanvas.getContext("2d");
              var data = ctx.getImageData(0, 0, vw, vh);

              for (var i = 0, length = data.data.length; i < length; i += 4) {
                  data.data[i] = Math.max(255, data.data[i]);
              }

              tsContextMerged.putImageData(data, 0, 0);
         */

       return tsCanvas

   }
}
catch(e){
    alert(e.toString())
}