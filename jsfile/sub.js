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
    $('.tech .tech_1').each(function() {
        var $p = $(this).find('p');
        var $circle2_1 = $(this).find('.circle2 .circle2_1');
        
        $p.hide();

        $circle2_1.mouseenter(function() {
            $p.stop().slideDown();
        }).mouseleave(function() {
            $p.stop().slideUp();
        });
    });

    $(".circle2_1").mousemove(function(event) {
        var s = event.offsetX;
        var j = event.offsetY;
        
        $(".over", this).css({left: s +30, top: j -10}).addClass("on");
    }).on("mouseleave", function() {
        $(".over", this).removeClass("on");
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