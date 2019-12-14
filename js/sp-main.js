$(function() {
	'use strict';

	// Menu表示,非表示  ==========================
	function MenuActive() {
		$('#Menu').click(function() {
			$('.MenuLavel').toggle();
		});
	}
	MenuActive();
	// Menu表示,非表示  ==========================
	// その他の要素クリックでMenu非表示  ==========================
	function MenuClose() {
		$('main').click(function() {
			$('.MenuLavel').hide();
		});
	}
	MenuClose();
	// その他の要素クリックでMenu非表示  ==========================

	//ページ内移動 ==========================
	function pageScloll() {
		$('a[href^="#"]').click(function() {
			var speed = 300;
			var href = $(this).attr('href');
			var target = $(href == '#' || href == '' ? 'html' : href);
			var position = target.offset().top - 55;
			$('body,html').animate({ scrollTop: position }, speed, 'swing');
			return false;
		});
	}
	pageScloll();
	//ページ内移動 ==========================

	//見ている項目のMenuのColorを変える ==========================
	function scrollChangeLinkColor() {
		// MenuItem要素の取得
		var MenuItems;
		MenuItems = $('.MenuItemContainer a');
		// heading要素の取得
		$(window).load(function() {
			var headings = [
				$('div.top').offset().top - 0,
				$('div#clinic').offset().top - 20,
				$('div#visiting-clinic').offset().top - 20,
				$('div#service').offset().top - 20,
				$('div#outpatient').offset().top - 20,
				$('div#access').offset().top - 20
			];

			$(window).scroll(function() {
				var windowScrolltop = $(window).scrollTop();
				for (var i = 0; i < headings.length; i++) {
					if (
						windowScrolltop > headings[i] - 50 &&
						windowScrolltop - headings[i] > -50
					) {
						$(MenuItems).removeClass('MenuItemActive');
						$(MenuItems[i]).addClass('MenuItemActive');
					}
				}
			});
		});
	}

	scrollChangeLinkColor();
	//見ている項目のMenuのColorを変える ==========================

	//スライドショー ==========================
	var page;
	var lastPage = parseInt($('#slide img').length - 1);
	var random = Math.round(Math.random() * lastPage);
	var nextPage;

	//初期ページをランダム設定
	page = random;
	if (page === lastPage) {
		nextPage = 0;
	} else {
		nextPage = page + 1;
	}
	console.log('random：' + random);
	console.log('page：' + page);
	console.log('nextPage：' + nextPage);

	//画像の重なり順の初期表示
	//nextPageを先頭にするのは初回のインターバルで前面に来る画像なのでこれをfadeOutするため
	$('#slide img').css('z-index', '-3');
	$('#slide img')
		.eq(nextPage)
		.css('z-index', '-1');

	//ページ切換関数
	function changePage() {
		console.log('page：' + page);
		console.log('nextPage：' + nextPage);
		//まず全部最背面へ
		$('#slide img').css('z-index', '-3');
		//pageを最前面へ
		$('#slide img')
			.eq(page)
			.css('z-index', '-1');
		//nextPageを２番目へ
		$('#slide img')
			.eq(nextPage)
			.css('z-index', '-2');
		//毎回全部display blockする
		$('#slide img').css('display', 'block');
		//最前面のpageをfadeOutすると２番目nextPageが見えてくる
		$('#slide img')
			.eq(page)
			.fadeOut(1500);
	}

	//カウントアップ関数
	function countUp() {
		if (page === lastPage) {
			page = 0;
			nextPage = 1;
			changePage();
		} else if (nextPage === lastPage) {
			page++;
			nextPage = 0;
			changePage();
		} else {
			page++;
			nextPage = page + 1;
			changePage();
		}
	}

	//～秒間隔でイメージ切換の発火設定
	var Timer;
	function startTimer() {
		Timer = setInterval(function() {
			countUp();
		}, 3000);
	}

	//～秒間隔でイメージ切換の停止設定
	function stopTimer() {
		clearInterval(Timer);
	}

	//タイマースタート
	startTimer();
});
