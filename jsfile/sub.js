// 슬라이드 토글
$(function(){
    $('.btn button').click(function(){
        $('.form1').slideToggle(800, 'swing');
        $('.btn button').stop().addClass('on').stop().removeClass('on');
    });
});