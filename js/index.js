(function($){
	$(function() {				// 画面遷移時エフェクト

		$('body').css('marginLeft', -3000)
			.animate({
				marginLeft: '10px'}, 4000);

		$('.t_cart a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('.t_login a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('.t_quickjoin a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('#l_top a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('#l_item a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('#l_guide a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('#l_contact a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('.item_detail a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('.button_box a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('#Cart h2 a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
		$('.t_logo a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 2000}
		})
	});

	$(document).ready(function() {

		$('BODY').bgStretcher({
								// bodyの背景にするなら'body'
								// divに配置するならそのdivの要素名を記入
			images: [
				'images/t_bg_img_00.jpg',
				'images/t_bg_img_01.jpg',
				'images/t_bg_img_02.jpg',
				'images/t_bg_img_03.jpg',
				'images/t_bg_img_04.jpg'
			],
			imageWidth: 1024,
			imageHeight: 768

								// 配置する画像のパスと画像の横と縦のサイズを記入
		});
	});
	$(document).ready(function() {
								// カルーセル
		$("#carousel_box").carouFredSel({
			circular: false,
			infinite: false,
			auto	: false,
			prev	: {
				button: "#carousel_box_prev",
				key: "left"
			},
			next: {
				button: "#carousel_box_next",
				key: "right"
			},
			pagination: "#carousel_box_pag"
		});
	});

})(jQuery);