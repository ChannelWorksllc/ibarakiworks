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

//バリデーション//
$(function(){
    $(".postform").validate({
        rules : {
            name: {
                required: true
            },
            kana: {
                required: true
            },
            sex: {
                required: true
            },
            birthday: {
                required: true
            },
            phone: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            communityname: {
                required: true
            },
            manager: {
                required: true
            },
            checkadress: {
                required: true
            },
            active: {
                required: true
            },
            work: {
                required: true
            },
            scale: {
                required: true
            },
            request: {
                required: true
            },
            companyname: {
                required: true
            }
        },
        messages: {
            name: {
                required: "※ お名前は必須入力項目です。"
            },
            kana: {
                required: "※ ふりがなは必須入力項目です。"
            },
            sex: {
                required: "※ 性別は必須入力項目です。"
            },
            birthday: {
                required: "※ 生年月日は必須入力項目です。"
            },
            phone: {
                required: "※ 電話番号は必須入力項目です。"
            },
            email: {
                required: "※ メールアドレスは必須入力項目です。"
            },
            communityname: {
                required: "※ コミュニティ名は必須入力項目です。"
            },
            manager: {
                required: "※ ご担当者様のお名前は必須入力項目です。"
            },
            checkadress: {
                required: "※ ご住所は必須入力項目です。"
            },
            active: {
                required: "※ 活動内容は必須入力項目です。"
            },
            work: {
                required: "※ 職歴は必須入力項目です。"
            },
            scale: {
                required: "※ 人数規模は必須入力項目です。"
            },
            request: {
                required: "※ ご要望は必須入力項目です。"
            },
            companyname: {
                required: "※ 御社名は必須入力項目です。"
            }
        },
        //表示位置設定
        
        errorPlacement: function(error, element) {
            //住所
            if(element.attr("name")=="checkadress")
            {
                error.insertAfter("#checkadress_error");	
            }
            //人数規模
            else if (element.attr("name")=="scale")
            {
                error.insertAfter("#scale_error");
            }
            //性別
            else if (element.attr("name")=="sex")
            {
                error.insertAfter("#sex_error");
            }
            //生年月日
            else if (element.attr("name")=="birthday")
            {
                error.insertAfter("#birthday_error");
            }
            else{
                error.insertAfter(element);	
            }
        }
    });
});