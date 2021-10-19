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
                swiper = new Swiper('.swiper-container', {
                    slidesPerView: 2.0,
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