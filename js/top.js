// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.topJS();
			this.Overnotes();
			this.Kijkaku();
		},
		topJS : function () {
			$(window).bind('load', function () {
				new WOW().init();
				$('.fadeUpTxt').lettering();
				$('.idx-slider').slick({
					autoplay: true,
					autoplaySpeed: 4000,
					dots: false,
					arrows: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					pauseOnDotsHover: false,
					fade: true
				});
				function fadeTxt(element) {
					var _this = element.find('.fadeUpTxt');
				  	_this.find('span').each(function(index) {
						var transitionDelayElement = index*50;
						$(this).css('transition-delay', transitionDelayElement + 'ms');
					});
					_this.addClass('show');
				}
				fadeTxt($('.slick-current'));
				$('.idx-slider').on('afterChange', function(){
				 	$('.slick-slide').find('.fadeUpTxt').removeClass('show');
				 	$('.slick-slide').find('.fadeUpTxt span').removeAttr('style');
				 	fadeTxt($('.slick-current'));
				});
				$('.fadeUpTxt:not(.isMain)').one('inview', function(event, isInView) {
				  if (isInView) {
				  	var _this = $(this);
				  	_this.find('span').each(function(index) {
						var transitionDelayElement = index*50;
						$(this).css('transition-delay', transitionDelayElement + 'ms');
					});
				    _this.addClass('show');
				  }
				});
			});
		},

		
		Overnotes : function() {
			$.ajax({
				'url' : 'property/_custom/?limit=4&cat=1',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.img01? $(val.img01).attr('src')	: 'images/under_img.jpg';
						var $li = $('<li><dl><dt><img src="'+thumb+'" alt="'+val.title+'"></dt><dd><p class="b04-ttl">'+tlt+'</p><p class="b04-des">地域：'+val.txt14+'<br>金額：'+val.txt01+'万円</p><p class="idx-btn"><a href="'+val.url+'">詳しくはこちら</a></p></dd></dl></li>');
						$li.appendTo( '#tab01-ctn .b04-tab-ctn' );	
					});
				}
			});
			$.ajax({
				'url' : 'property/_custom/?limit=4&cat=2',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.img01? $(val.img01).attr('src')	: 'images/under_img.jpg';
						var $li = $('<li><dl><dt><img src="'+thumb+'" alt="'+val.title+'"></dt><dd><p class="b04-ttl">'+tlt+'</p><p class="b04-des">地域：'+val.txt14+'<br>金額：'+val.txt01+'万円</p><p class="idx-btn"><a href="'+val.url+'">詳しくはこちら</a></p></dd></dl></li>');
						$li.appendTo( '#tab02-ctn .b04-tab-ctn' );	
					});
				}
			});
			$.ajax({
				'url' : 'property/_custom/?limit=4&cat=3',
				'dataType' : 'jsonp',
				'success' : function(json){
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var thumb = val.img01? $(val.img01).attr('src')	: 'images/under_img.jpg';
						var $li = $('<li><dl><dt><img src="'+thumb+'" alt="'+val.title+'"></dt><dd><p class="b04-ttl">'+tlt+'</p><p class="b04-des">地域：'+val.txt14+'<br>金額：'+val.txt01+'万円</p><p class="idx-btn"><a href="'+val.url+'">詳しくはこちら</a></p></dd></dl></li>');
						$li.appendTo( '#tab03-ctn .b04-tab-ctn' );	
					});
				}
			});
		},

		Kijkaku : function (){
			$.ajax({
				'url' : 'blog/_custom/',
				'dataType' : 'jsonp',
				'success' : function(json){
					console.log(json.data);
					$.each(json.data, function(i,val){
					 	var tlt = val.title.length < 20 ? val.title : val.title.substr(0,15)+'...';
						var $li = $('<li><a href="blog/'+val.url+'"><span>' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span>'+tlt+'</a></li>');
						$li.appendTo( '.b01-blog dd > ul' );	
					});
				}
			});
		}

	};
	
	obj.init();
	
});