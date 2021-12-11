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
                    loop: true,
                    initialSlide: 0
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

//ページリンクずれ調整//
$(window).on('load', function() {
    var url = $(location).attr('href');
    if(url.indexOf("#") != -1){
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if(target.length){
            var pos = Math.floor(target.offset().top) - 110;
            $("html, body").animate({scrollTop:pos}, 500);
        }
    }
});

$(function() {
    var headerHeight = 110;
    $('[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHeight; 
        $("html, body").animate({scrollTop:position}, 500, "swing");
        return false;
    });
});