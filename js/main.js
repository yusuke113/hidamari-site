'use strict';

$(function() {

	var $left  = '-350px';
	var $top = '0';
	var $fade_speed = 600; // フェード処理の早さ（ミリ秒）

	//////////////////////////////
	// スライドショー
	/////////////////////////////
	// var $width = 100; // 横幅
	var $height = 450; // 高さ
	var $interval = 4000; // 切り替わりの間隔（ミリ秒）
	$fade_speed = 4000; // フェード処理の早さ（ミリ秒）

	function slideShow() {
		$('#slide ul li').css({
			position: 'relative',
			overflow: 'hidden',
			width: $width,
			height: $height
		});
		$('#slide ul li')
			.hide()
			.css({ position: 'absolute', top: 0, left: 0 });
		$('#slide ul li:first')
			.addClass('active')
			.show();
		setInterval(function() {
			var $active = $('#slide ul li.active');
			var $next = $active.next('li').length
				? $active.next('li')
				: $('#slide ul li:first');
			$active.fadeOut($fade_speed).removeClass('active');
			$next.fadeIn($fade_speed).addClass('active');
		}, $interval);
	}
	//////////////////////////////
	// スライドショー
	/////////////////////////////

  slideShow();

});
