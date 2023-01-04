// 슬라이드 토글
$(function(){
    $('.btn button').click(function(){
        $('.btn button').addClass('on');
        $('.form1').slideToggle(800, 'swing');
    });
});

$(function(){
    $('.btn button').removeClass('on');
});