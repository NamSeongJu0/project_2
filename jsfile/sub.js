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


// pro circle2_1 mouse 효과
$(document).ready(function() {
    $(".choose .tech .tech_1:nth-of-type(1) .circle2 .circle2_1").mousemove(function(event) {
        var s = event.pageX;
        var j = event.pageY;
        
        $(this).find(".over").css({left: s -320 , top: j -1170}).addClass("on");
    }).mouseleave(function() {
        $(".over").removeClass("on");
    });

    $(".choose .tech .tech_1:nth-of-type(2) .circle2 .circle2_1").mousemove(function(event) {
        var s = event.pageX;
        var j = event.pageY;
        console.log(s, j);
        $(this).find(".over").css({left: s -900 , top: j -1170}).addClass("on");
    }).mouseleave(function() {
        $(".over").removeClass("on");
    });

    $(".choose .tech .tech_1:nth-of-type(3) .circle2 .circle2_1").mousemove(function(event) {
        var s = event.pageX;
        var j = event.pageY;
        console.log(s, j);
        $(this).find(".over").css({left: s -1490, top: j -1170}).addClass("on");
    }).mouseleave(function() {
        $(".over").removeClass("on");
    });
});

// pro p 슬라이드
$(function(){
    $('.choose .tech .tech_1:nth-of-type(1) p').hide();

    $('.choose .tech .tech_1:nth-of-type(1) .circle2 .circle2_1').hover(function(){
        $('.choose .tech .tech_1:nth-of-type(1) p').stop().slideDown();
    }, function(){
        $('.choose .tech .tech_1:nth-of-type(1) p').stop().slideUp();
    });  
});

$(function(){
    $('.choose .tech .tech_1:nth-of-type(2) p').hide();

    $('.choose .tech .tech_1:nth-of-type(2) .circle2 .circle2_1').hover(function(){
        $('.choose .tech .tech_1:nth-of-type(2) p').stop().slideDown();
    }, function(){
        $('.choose .tech .tech_1:nth-of-type(2) p').stop().slideUp();
    });  
});

$(function(){
    $('.choose .tech .tech_1:nth-of-type(3) p').hide();

    $('.choose .tech .tech_1:nth-of-type(3) .circle2 .circle2_1').hover(function(){
        $('.choose .tech .tech_1:nth-of-type(3) p').stop().slideDown();
    }, function(){
        $('.choose .tech .tech_1:nth-of-type(3) p').stop().slideUp();
    });  
});


// MAP 버튼 클릭 유도
$(document).ready(function() {
    $(".btn button").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".click").css({left: x +18 , top: y -30}).addClass("on");
    }).mouseleave(function() {
        $(".click").removeClass("on");
    });
});

// 슬라이드 토글
$(function () {
    $('.btn button').click(function () {
        $(this).toggleClass('on')
        $('.form1').slideToggle(800, 'swing');
    });
});