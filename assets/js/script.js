/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "#b20a2c";
        $('.collapse').collapse('hide');
    }else{
        document.getElementById("navbar").style.top = "-100px";
        $('.collapse').collapse('hide');
    }
    prevScrollpos = currentScrollPos;
}


$(".bar").each(function () {
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    }, 2000)
});
