// 윈도우 너비가 768px 밑에일 시 메뉴바 보임

$(function(){
    $("#a").click(function(){
     $(".b").slideToggle();
    });
   });

   $(window).resize(function(){
    if(window.innerWidth > 767){
       $('.b').show();
    }
    else{
        $('.b').hide();
    }
   });


   // li(BLOG)를 hover하면 안에 있던 subblog가 보여지는 기능
   $(document).ready(function () {
    $('.subblog').hide();

    $('.blog').hover(function () {
        $(this).children('.subblog').stop().slideDown();
    }, function () {
        $(this).children('.subblog').stop().slideUp();
    });
});


// 헤더 위치에 따른 변화
$(document).ready(function (){
    $(window).scroll(function () {
        if ($(window).scrollTop() < 100 || $(window).scrollTop() > 700) {
            $('header').fadeIn(500).css('backgroundColor', 'none');
            $('#wrap').css('backgroundColor', 'rgba(0, 0, 0, 0.9)');
        } else {
            $('header').fadeOut(500).css('backgroundColor', 'rgba(0, 0, 0, 0.9)');

        }
    });
})


// 스크롤 위치에 따른 탑버튼 변화
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.topbtn').fadeIn(500);
        } else {
            $('.topbtn').fadeOut(500);
        }
    });

    
// 탑 버튼 속도 조절
    $('.topbtn').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1800);
    });
});


$(function() {           
    $(".Us").delay(1000).animate({opacity : 1, top: 80}, 800, "swing", function() {
        $(".home_1").delay(500).animate({opacity : 1, top: 150}, 800, "swing"); 
    });
});

// 슬라이드 토글
$(function(){
    $('.btn button').click(function(){
        $('form1').slideToggle();
    });
});