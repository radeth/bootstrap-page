'use strict';
(function () {
    AOS.init();
    $(".buttonMore").on('click', function () {
        $('html,body').animate({
            scrollTop: $("section").offset().top
        }, 1000)
    })

    $('.project').on('mouseenter', function () {
        $(this).find('.blurLayer').css('filter', 'blur(3px)')
        $(this).find('.layer').fadeToggle('slow')
    })
    $('.project').on('mouseleave', function () {
        $(this).find('.blurLayer').css('filter', 'blur(0px)')
        $(this).find('.layer').fadeToggle('slow')

    })
    $('#send').on('click', function () {
        $.ajax({
            url: './../mail.php'
            , type: 'POST'
            , data: {
                email: $('#email').val()
                , message: $('#message').val()
                ,
            }
            , success: function (result) {
                alert(result)
            }
            , error: function (error) {
                console.log(error);
            }
        })
    })
})();

