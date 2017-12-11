$(document).ready(function() {
    //Show navbar on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
        $('.navbar').css({'background-color': '#000', 'border-bottom': '1px solid #cdd2d8', 'transition': '0.5s'});
        } else {
        $('.navbar').css({'background': 'transparent', 'border': 'none'});
        }
    });

    //Smooth scrolling
    var page = $('html, body');
    
    $('a[href^="#"]').click(function () {
        page.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 400);
    
        return false;
    });

});