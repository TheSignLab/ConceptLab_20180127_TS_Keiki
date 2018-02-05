function animAceptoTerminos() {

    console.log("sdfs")
    $(".cover .btn-acept").addClass("wobble animated");
    setTimeout(function () {
        $(".cover .btn-acept").removeClass("wobble animated");
    }, 1000);
    // enable vibration support
    navigator.vibrate = navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate;

    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}


function ctrlAcceptTerms() {
    $(".covers").animate({
        top: -2500,
    }, 650);


}

function ctrlSeeTerms() {
    $(".cover.intro").fadeOut();
    $(".cover.lega").fadeIn();
}


function animButton(obj) {
    $(obj).addClass("bounceIn animated");
    setTimeout(function () {
        $(obj).removeClass("bounceIn animated");
    }, 500);
}



function go2MainView() {
    setTimeout(function () {

        $(".covers").animate({
            top: -2500,
        }, 650);

    }, 250);
}

function go2IntroCover() {
    setTimeout(function () {

        $(".cover.intro").fadeIn();
        $(".cover.lega").fadeOut();

    }, 250);
}
