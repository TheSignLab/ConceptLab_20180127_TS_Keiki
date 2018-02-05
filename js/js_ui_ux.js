document.querySelector("viewButton.main").parentElement.style.display = "block";

function ctrlRst() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector("viewButton.main").parentElement.style.display = "block";
        document.querySelector("viewButton.fx").parentElement.style.display = "none";
           document.querySelector("viewButton.snap").parentElement.style.display = "none";
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
document.querySelector("viewButton.main").parentElement.style.display = "none";
        document.querySelector("viewButton.fx").parentElement.style.display = "none";
        document.querySelector("viewButton.snap").parentElement.style.display = "block";
    }, 200);
}

function ctrlFx() {
    isPaused = true;
    setTimeout(function () {
        document.querySelector("viewButton.main").parentElement.style.display = "none";
        document.querySelector("viewButton.fx").parentElement.style.display = "block";
           document.querySelector("viewButton.snap").parentElement.style.display = "none";
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
        document.querySelector("viewButton.main").parentElement.style.display = "block";
        document.querySelector("viewButton.fx").parentElement.style.display = "none";
        document.querySelector("viewButton.snap").parentElement.style.display = "none";
    }, 200);
}
