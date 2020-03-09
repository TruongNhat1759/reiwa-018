$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
        },

        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 75
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 105
                        }, 600);
                    }
                }
                return false;
            });

            //Anchor scroll
            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({scrollTop: top01 - 75}, 600);
                    } else {
                        $root.animate({scrollTop: top01 - 105}, 600);
                    }
                }
            });

        },

        toTop: function () {
            $('#totop').hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    $('.footer-sp ul').css('display', 'flex').fadeIn();
                } else {
                    $('#totop').fadeOut();
                    $('.footer-sp ul').fadeOut();
                }
            });
        },

        Gnavi: function () {
            $('.over').hover(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideToggle();
                }
            });

            $('.over').click(function () {
                if($(this).hasClass('flag')){
                    if($(this).hasClass('active')){
                        $('.submenu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.submenu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.submenu').stop().slideToggle();
                    }
                }
            });

            $('.isSelf a').click(function () {
                if($(this).parent().hasClass('flag')){
                    $('.over').removeClass('active');
                    $('.submenu').stop().slideUp();
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().slideToggle();
                }
            });
            

            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().slideToggle();
                    $('.submenu').slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle();
                }
            });
            $('.close-menu').click(function () {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().slideUp();
                $('.over').removeClass('active');
                $('.submenu').slideUp();
            });

            // gnavi fixed on pc
            if ($('body').hasClass('under')) {
                var hH = $('#header').outerHeight();
                $(window).bind("load resize scroll", function() {
                    var wWidth = $(window).width(),
                        wScroll = $(window).scrollTop(),
                        posB01 = $('.mainvisual').offset().top + $('.mainvisual').outerHeight();
                    if(wWidth > 640){
                        if(wScroll > posB01){
                            $('#header').addClass('fixed');
                            $('.mainvisual').css('margin-top', hH);
                        }
                        else{
                            $('#header').removeClass('fixed');
                            $('.mainvisual').css('margin-top', '');
                        }
                    }
                    else {
                        $('#header').removeClass('fixed');
                        $('.mainvisual').css('margin-top', '');
                    }
                });
            } else {
                var hH = $('#header').outerHeight();
                $(window).bind("load resize scroll", function() {
                    var wWidth = $(window).width(),
                        wScroll = $(window).scrollTop(),
                        posB01 = $('.b01-blog').offset().top + $('.b01-blog').outerHeight();
                    if(wWidth > 640){
                        if(wScroll > posB01){
                            $('#header').addClass('fixed');
                            $('#index #mainvisual').css('margin-top', hH);
                        }
                        else{
                            $('#header').removeClass('fixed');
                            $('#index #mainvisual').css('margin-top', '');
                        }
                    }
                    else {
                        $('#header').removeClass('fixed');
                        $('#index #mainvisual').css('margin-top', '');
                    }
                });
            }

            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon').removeClass('active');
                    $('.isSelf').removeClass('flag');
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
                } else {
					$('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('.isSelf').addClass('flag');
                    $('.over').addClass('flag');
					$('.over').removeClass('active');
                    $('.submenu').removeAttr('style');
   				}
            });
        },

    };

    obj.init();

});
