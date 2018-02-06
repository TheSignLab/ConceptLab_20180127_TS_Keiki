document.querySelector(".viewButton.main").parentElement.style.display = "block";

function ctrlRst() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector(".viewButton.main").parentElement.style.display = "block";
        document.querySelector(".viewButton.fx").parentElement.style.display = "none";
        document.querySelector(".viewButton.snap").parentElement.style.display = "none";
        document.querySelector("view").classList.remove("view-on-top");
        document.querySelector("view.vw-live").classList.add("view-on-top");
    }, 200)

}

function ctrlSwitch() {
    isPaused = true;
    setTimeout(function () {



    }, 200);
}

function ctrlSnap() {
    isPaused = false;
    setTimeout(function () {
        document.querySelector(".viewButton.main").parentElement.style.display = "none";
        document.querySelector(".viewButton.fx").parentElement.style.display = "none";
        document.querySelector(".viewButton.snap").parentElement.style.display = "block";
        document.querySelector(".view").classList.remove("view-on-top");
        document.querySelector(".view.vw-live").classList.add("view-on-top");


    }, 200);
}

function ctrlFx() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector(".vb-main").style.display = "none";
        document.querySelector(".vb-fx").parentElement.style.display = "block";
        document.querySelector(".vb-snap").parentElement.style.display = "none";
        document.querySelector(".vb-form").parentElement.style.display = "none";

    }, 200);
}

function ctrlSeemore() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector(".vb-main").style.display = "block";
        document.querySelector(".vb-fx").parentElement.style.display = "none";
        document.querySelector(".vb-snap").parentElement.style.display = "none";
        document.querySelector(".vb-form").parentElement.style.display = "none";
        document.querySelector("view").classList.remove("view-on-top");
        document.querySelector("view.vw-form").classList.add("view-on-top");
    }, 200);
}


function ctrlMain() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector(".vb-main").style.display = "block";
        document.querySelector(".vb-fx").parentElement.style.display = "none";
        document.querySelector(".vb-snap").parentElement.style.display = "none";
        document.querySelector(".vb-form").parentElement.style.display = "none";

    }, 200);
}

function updateFx(n) {
    if (n == 1) {
        CurrentFx = "Default"
    }
    if (n == 2) {
        CurrentFx = "ColorizedParty"
    }
    if (n == 3) {
        CurrentFx = "TVNoise"
    }
    if (n == 4) {
        CurrentFx = "HueCarnival"
    }
    setTimeout(function () {
        document.querySelector(".vb-main").style.display = "block";
        document.querySelector(".vb-fx").parentElement.style.display = "none";
        document.querySelector(".vb-snap").parentElement.style.display = "none";
        document.querySelector(".vb-form").parentElement.style.display = "none";
    }, 200);
}






function downloadCanvas(link, canvasId, filename) {
    link.href = tsCanvasOut.toDataURL();
    link.download = filename;
}
document.getElementById('idDown').addEventListener('click', function () {
    downloadCanvas(this, 'canvas', 'test.png');
}, false);
