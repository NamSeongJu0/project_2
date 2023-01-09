// 슬라이드 토글
$(function () {
    $('.btn button').click(function () {
        $(this).toggleClass('on')
        $('.form1').slideToggle(800, 'swing');
    });
});


// #intro 부분
$(function(){
    $('.circle1').hover(function(){
        $('.circle1 a i').css('color', 'red');
        $('.circle1').css('background-color', 'white');
    }, function(){
        $('.circle1 i').css('color', 'white');
        $('.circle1').css('background-color', 'rgb(255, 118, 94)');
    });  
});


// 버튼 클릭 유도
$(document).ready(function() {
    $(".btn button").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".click").css({left: x +5 , top: y -40}).addClass("on");
    }).mouseleave(function() {
        $(".click").removeClass("on");
    });
});