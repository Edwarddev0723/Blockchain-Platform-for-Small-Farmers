$(document).ready(function() {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
});

$(document).ready(function() {
    // 點擊登入按鈕時顯示彈出視窗
    $(".login-btn").click(function() {
        $("#login-modal").fadeIn();
    });

    // 點擊關閉按鈕時隱藏彈出視窗
    $(".close").click(function() {
        $("#login-modal").fadeOut();
    });

    // 點擊彈出視窗外部時隱藏彈出視窗
    $(window).click(function(event) {
        if (event.target == $("#login-modal")[0]) {
            $("#login-modal").fadeOut();
        }
    });
});