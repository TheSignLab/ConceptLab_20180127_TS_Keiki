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

function goBackInit() {

    
    
        setTimeout(function () {

          $(".covers").animate({
        top: 0,
    }, 650);

    $(".covers .footer-wrapper").show();

    }, 250);

}



function ctrlAcceptTerms() {
    $(".covers").animate({
        top: -2500,
    }, 650);

    $(".covers .footer-wrapper").hide();
    $(".cover.intro").fadeIn();
    $(".cover.legal").fadeOut();

}

function ctrlSeeTerms() {
    $(".cover.intro").fadeOut();
    $(".cover.legal").fadeIn();
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
