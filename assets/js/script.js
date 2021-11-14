//ページトップへ戻る//
$(function(){
    $('#arrow').click(function () {
        $("html,body").animate({scrollTop:0},"300");
    });
});

//ピックアップコンテンツ//
$(function() {
    var swiper; 
    $(window).on('load resize', function(){
        var w = $(window).width();
        if (w <= 979) {
            if (swiper) {
                return;
            } else {
                swiper = new Swiper('.slide1', {
                    slidesPerView: 2,
                    centeredSlides: true,
                    initialSlide: 1,
                });
            }
        } else {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            } 
        } 
    });
});

//応募フロー//
$(function() {
    var swiper; 
    $(window).on('load resize', function(){
        var w = $(window).width();
        if (w <= 979) {
            if (swiper) {
                return;
            } else {
                swiper = new Swiper('.slide2', {
                    slidesPerView: 3,
                    setWrapperSize: true,
                });
            }
        } else {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            } 
        }
    });
});

//SPハンバーガーメニュー//
$(document).ready(function() {
    $('.drawer').drawer();
});

//検索機能//
$(function(){
    $("#search-button").on("click", function() {
        $(this).toggleClass("on-click");
        $("#recruit-search").slideToggle(1000);
    });
});