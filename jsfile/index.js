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


$(function() {
    $('img').click(function() {
        $('img:first').appendTo('#wdphotography');
    });
});