'use strict';
(function () {
    AOS.init();
    $(".buttonMore").on('click', function () {
        $('html,body').animate({
            scrollTop: $("section").offset().top
        }, 1000)
    })
    $('.blurLayer').on('mouseenter',function(){
        console.log('test1')
        $(this).parent().find('.layer').slideDown('slow')
    })
    $('.blurLayer').on('mouseleave',function(){
        console.log('test2')
        $(this).find('div:first').slideUp('slow')
    })
})();

