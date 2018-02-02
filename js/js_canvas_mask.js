function canvas_clip(varCanOut, varCtxOut) {
    var mask = document.createElement('img');
    mask.src = "/img/fx_mask.png";
    mask.onload = function () {
        varCanOut.width = varCanIn.width;
        varCanOut.height = varCanIn.height;
        varCtxOut.drawImage(mask, 0, 0, varCanIn.width, varCanIn.width);
        varCtxOut.globalCompositeOperation = 'source-atop';
        varCtxOut.drawImage(varCanIn, 0, 0);
    }

}






