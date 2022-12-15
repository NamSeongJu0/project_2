// 윈도우 너비가 768px 밑에일 시 메뉴바 보임

$(function(){
    $(".a").click(function(){
     $(".b").slideToggle();
    });
   });

   $(window).resize(function(){
    if(window.innerWidth>=768){
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



// 컨셉 사진 z-index 위치 전환
$(function() {
    $('.wdphotography img').click(function() {
        $('.wdphotography img:first').animate({left:150},600).appendTo('.wdphotography');
        $('.wdphotography img:nth-of-type(1)').animate({left: 0},600);
        $('.wdphotography img:nth-of-type(2)').animate({left: 50},600);
        $('.wdphotography img:nth-of-type(3)').animate({left: 100},600);
        $('.wdphotography img:nth-of-type(4)').animate({left: 150},600);
    });
});



$(function() {
    $('.ntphotography img').click(function() {
        $('.ntphotography img:first').appendTo('.ntphotography');
        $('.ntphotography img:nth-of-type(1)').animate({right: 0},600);
        $('.ntphotography img:nth-of-type(2)').animate({right: 50},600);
        $('.ntphotography img:nth-of-type(3)').animate({right: 100},600);
        $('.ntphotography img:nth-of-type(4)').animate({right: 150},600);
    });
});



$(function() {
    $('.crphotography img').click(function() {
        $('.crphotography img:first').appendTo('.crphotography');
        $('.crphotography img:nth-of-type(1)').animate({left: 0},600);
        $('.crphotography img:nth-of-type(2)').animate({left: 50},600);
        $('.crphotography img:nth-of-type(3)').animate({left: 100},600);
        $('.crphotography img:nth-of-type(4)').animate({left: 150},600);
    });
});