   // ---//

   var vw = $("views").width();
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

   function video2canvas() {

       setInterval(function () {

           vw = $(document).width();
           vh = $(document).height();

           vidW = $("video").width();
           vidH = $("video").height();
           vidProp = vidW / vidH;
           vProp = vw / vh;

           tsContextIn.drawImage(tsVideo, 0, 0, vw, vw / vidProp);

           tsContextFx1.drawImage(tsCanvasIn, 0, 0);
           tsCanvasFx1 = applyFx1(CurrentFx, tsCanvasIn);
           tsContextFx1 = tsCanvasFx1.getContext('2d');

           tsContextFx2.drawImage(tsCanvasIn, 0, 0);
           tsCanvasFx2 = applyFx2(CurrentFx, tsCanvasIn);
           tsContextFx2 = tsCanvasFx2.getContext('2d');



           tsCanvasFx2Masked = masked(tsCanvasFx2);
           tsContextFx2Masked = tsCanvasFx2Masked.getContext('2d');


           tsCanvasMerged = merged(tsCanvasFx1, tsCanvasFx2Masked);
           tsContextMerged = tsCanvasMerged.getContext('2d');


           tsContextOut.drawImage(tsCanvasMerged, 0, 0);



       }, 0);



   }


















   function applyFx1(CurrentFx, tsCanvasIn) {
       return tsCanvasIn
   }

   function applyFx2(CurrentFx, tsCanvasIn) {
       return tsCanvasIn
   }

   function masked(tsCanvas) {
       return tsCanvas
   }

   function merged(tsCanvas) {
       return tsCanvas
   }
