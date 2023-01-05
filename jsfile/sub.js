// 슬라이드 토글
$(function () {
    $('.btn button').click(function () {
        $('.btn button').addClass('on');
        $('.form1').slideToggle(800, 'swing');
    });
});


// 버튼 클릭 유도
$(document).ready(function() {
    $(".btn button").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".click").css({left: x +10 , top: y - 40}).addClass("on");
    }).mouseleave(function() {
        $(".click").removeClass("on");
    });
});