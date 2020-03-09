$(document).ready(function(){
 "use strict";   
$('.slider-big').slick({
	 autoplay: true,
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
	dots: false,
 	asNavFor: '.slider-thum',
 });

 $('.slider-thum').slick({
 	slidesToShow: 10,
 	slidesToScroll: 1,	
 	asNavFor: '.slider-big',
 	dots: false,
 	focusOnSelect: true
 });

 $('.slider-thum .slick-slide').removeClass('slick-active');
 $('.slider-thum .slick-slide').eq(0).addClass('slick-active');

 $('.slider-big').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-thum .slick-slide').removeClass('slick-active');
 	$('.slider-thum .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
});