(function($){

										// 画面読み込み時エフェクト
	$(document).ready(function(){
		$().introtzikas({
			line: '#FFFFFF',			//ラインの色
			speedwidth: 600,			//幅の移動完了スピード
			speedheight: 600,			//高さの移動完了スピード
			bg: 'black'					//背景色
		}); 
	});

	$(function() {						// 画面遷移時エフェクト
		var userAgent = window.navigator.userAgent.toLowerCase();

										// IE7の場合
		if (userAgent.indexOf('msie 7.0') != -1) {

			$('body').css('marginLeft', -1000)
				.animate({
					marginLeft: '10px'}, 2500
				);

			$('#ProductList').css('marginLeft', -1000)
				.animate({
					marginLeft: '10px'}, 1000
				);

			$('.left_box a').css('marginLeft', 0).animate({'marginLeft': '10px'}, 10);

			$('.right_box').css('marginLeft', 10);

		} else {						// それ以外

			$('body').css('marginLeft', -1000)
				.animate({
					marginLeft: '10px'}, 2500
				);
		}

		$('li').css('marginLeft', -3000)
			.animate({
				marginLeft: '0.00000001px'}, 2000
			);

		$('.t_cart a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('.t_login a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('.t_quickjoin a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('#l_top a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})

		$('#l_item a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})

		$('#l_guide a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})

		$('#l_contact a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('.item_detail a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('.button_box a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('#Cart h2 a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
		$('.t_logo a').pageswitch({
			properties: {marginLeft: -2500},
			options: {duration: 1500}
		})
	});

										// アコーディオンメニュー
	$(function() {
		var stop = false;

/*		var userAgent = window.navigator.userAgent.toLowerCase();
								// ie7の場合、
		if (userAgent.indexOf('msie 7.0') != -1) {
			$('.contents .main #jquery-ui-accordion div .jquery-ui-accordion-contents')
				.css('overflow', 'hidden');
		}
*/

		$ ('.jquery-ui-accordion-title')
			. click (function(event) {

				if (stop){
					event . stopImmediatePropagation();
					event . preventDefault();
					//stop = false;
				}
			});

		$ ('#jquery-ui-accordion')
			.accordion ({
				icons: {
					'header': 'ui-icon-folder-collapsed',
					'headerSelected': 'ui-icon-folder-open'
				},
				header: '.jquery-ui-accordion-title'
			} )

			.sortable ({
				axis: 'y',
				handle: '.jquery-ui-accordion-title',
				stop: function() {
					//stop = true;
				}
			});

	});
										// アイテムドラッグ＆ドロップ
	$(function(){

		var sName = '';
		var sCode = '';
		var sWorkCode = '';
		var sImgNum = '';

		$('body>div>div>div>div>div>ul>li').draggable({
			revert : true,
			zIndex : 9999
		});


		$('body>.contents>.main>#Cart>ul').droppable({

			drop : function(event,ui){

				var nCount = 0;
				var nWork = 0;
				var sWorkName = '';
				var userAgent = window.navigator.userAgent.toLowerCase();
				sName = $(ui.draggable).find('h2').text();
				sCode = $(ui.draggable).find('.codeNum').text();
				sWorkCode = sCode.slice(0, 3);
				sImgNum = sCode.slice(4, 6);


										// 型番の値が6桁の場合
				if (sCode.length === 6) {

										// 商品名のバイト数取得
					for (var i = 0; i < sName.length; i++) {
						nWork = escape(sName.charAt(i));
						if (nWork.length < 4) {
							nCount++;
						} else {
							nCount+=2;
						}
					}

										// ieの場合、
					if (userAgent.indexOf('msie') != -1) {
										// カートの商品名操作
						if (nCount > 40) {

							sWorkName = sName.substr(0, 16) + '・・・';
						} else {
							sWorkName = sName;
						}
					} else {			// それ以外
										// カートの商品名操作
						if (nCount > 60) {

							sWorkName = sName.substr(0, 28) + '・・・';
						} else {
							sWorkName = sName;
						}
					}

										// 型番がCHRの場合
					if (sWorkCode === 'CHR') {
						$('<li class="chair' + sImgNum + '" id="chair' + sImgNum + '" onMouseOver="delCartElement();"><img src="images/item/chair/' + sImgNum + '_01.jpg" width="50" height="50">' + sWorkName + '<br /><span class="amount">数量<input type="text" value="1" maxlength="2" /></span></li>')
							.appendTo(this);
										// 型番がDSKの場合
					} else if (sWorkCode === 'DSK') {
						$('<li class="desk' + sImgNum + '" id="desk' + sImgNum + '" onMouseOver="delCartElement();"><img src="images/item/desk/' + sImgNum + '_01.jpg" width="50" height="50">' + sWorkName + '<br /><span class="amount">数量<input type="text" value="1" maxlength="2" /></span></li>')
							.appendTo(this);
										// 型番がBEDの場合
					} else if (sWorkCode === 'BED') {
						$('<li class="bed' + sImgNum + '" id="bed' + sImgNum + '" onMouseOver="delCartElement();"><img src="images/item/bed/' + sImgNum + '_01.jpg" width="50" height="50">' + sWorkName + '<br /><span class="amount">数量<input type="text" value="1" maxlength="2" /></span></li>')
							.appendTo(this);
										// 型番がDRSの場合
					} else if (sWorkCode === 'DRS') {
						$('<li class="dresser' + sImgNum + '" id="dresser' + sImgNum + '" onMouseOver="delCartElement();"><img src="images/item/dresser/' + sImgNum + '_01.jpg" width="50" height="50">' + sWorkName + '<br /><span class="amount">数量<input type="text" value="1" maxlength="2" /></span></li>')
							.appendTo(this);
										// 型番がLMPの場合
					} else if (sWorkCode === 'LMP') {
						$('<li class="lamp' + sImgNum + '" id="lamp' + sImgNum + '" onMouseOver="delCartElement();"><img src="images/item/lamp/' + sImgNum + '_01.jpg" width="50" height="50">' + sWorkName + '<br /><span class="amount">数量<input type="text" value="1" maxlength="2" /></span></li>')
							.appendTo(this);
										// それ以外はアラート表示
					} else {
						alert('カートにドラッグ出来るのは商品のみです。');
					}
					
					$(ui.draggable)
						.draggable('disable')
						.addClass('added')
						.fadeTo(100,0.5);
				
				}
			},
			hoverClass : 'dropHover'
		})
		
	});

										// 画面右上エフェクト
	$(document).ready(function(){
		$( '#target' ).fold({side: 'right'});
	});
										// 画像切り替え
	$(function(){
		$('.contents .main .right_box .image_box a').click(function(){
			$('.contents .main .left_box img').attr("src", $(this).attr("href"));
			return false;
		})
	});
	$(function() {
		
										//ページ内スクロール
		$(".btn_sample").click(function () {
			var i = $(".btn_sample").index(this)
			var p = $(".content").eq(i).offset().top;
			$('html,body').animate({ scrollTop: p }, 'fast');
			return false;
		});
		
										//ページ上部へ戻る
		$(".btn_top").click(function () {
			$('html,body').animate({ scrollTop: 0 }, 'fast');
			return false;
		});
		 
	});

})(jQuery);

function heightTyosei() {

	var userAgent = window.navigator.userAgent.toLowerCase();
	var element = '';
	var style = '';

	if (location.href.lastIndexOf("item") > 0) {
		element = document.getElementById('ProductList');
	} else {
		element = document.getElementById('guide_box1');
	}
	
	style = element.currentStyle || document.defaultView.getComputedStyle(element, '');

	$('.contents .main #jquery-ui-accordion div .jquery-ui-accordion-contents').css('height', 'auto');

}

function delCartElement() {
	var code = '';
										// カートの要素にドラッグ設定
	$('body>div>div>div>ul>li').draggable({
		revert : true,
		zIndex : 9998
		
	});
										// カートにある要素がコンテンツにドロップされた際の処理
	$('body>div>div>div>div>div>').droppable({

		drop : function(event,ui){
										// ID取得
			code = $(ui.draggable).attr('id');

			$('.' + code).remove();		// ドラッグされた要素を削除

										// 上で取得したIDのリストを元に戻す
			$('body>div>div>div>div>div>ul>#' + code)
				.draggable('enable')
				.fadeTo(100,1)
				.removeClass('added');
		},
		hoverClass : 'dropHover'
	})

}

function setCookie () {
		
	var nItemCnt = 0;					// カートのアイテム数
	var sItemId = '';					// カートのアイテムID
	var sKey = '';
	var s = '';


	try {
										// カートのアイテム数取得
		nItemCnt = $('#CartList li').size() - 1;

		for (var i = 0; i <= nItemCnt; i++) {
										// カートのアイテムＩＤ取得
			sItemId = $('#CartList li:eq(' + i + ')').attr('id');

			sKey = 'item' + i;

			$.cookie(sKey, sItemId);	// クッキーにアイテム格納

		}

		location.href = 'cart.html' + '?cnt=' + nItemCnt;

		return;


	} catch (e) {

		alert(e);
	
		return;
	}

}

function setPara(path) {

	var nFrom = 0;
	var sWork = '';
	var sImageNo = '';
	var sCategory = '';

	try{

		nFrom = (path.lastIndexOf('item/') + 5);

		sWork = path.slice(nFrom);

		sCategory = sWork.slice(0, sWork.indexOf('/'));

		sImageNo = sWork.slice((sWork.indexOf('/') + 1), sWork.lastIndexOf('_'));

		location.href = 'itemdetail.html' + '?cate=' + sCategory + '&no=' + sImageNo;

		return;

	} catch (e) {

		alert(e);

		return;

	}
}

function makeItemDetail() {

	if(!Array.indexOf){
		Array.prototype.indexOf = function(target){
			for(var i = 0; i < this.length; i++){
				if(this[i] === target){ 
					return i;
				}
			}
		return -1;
		}
	}
										// 画像配置
	var sCategory = '';
	var nImgNo = 0;
	var sWork1 = '';
	var sWork2 = '';
	var sWork3 = '';
	var sWork4 = '';
	var oItemData = new Array();
	var nItemNo = 0;

	try {

		sWork1 = location.href.slice(location.href.indexOf('?') + 1);
		sWork2 = sWork1.slice(0, sWork1.indexOf('&'));
		sWork3 = sWork1.slice(sWork1.indexOf('&') + 1);

		sCategory = sWork2.slice(sWork2.indexOf('=') + 1);
		nImgNo = sWork3.slice(sWork3.indexOf('=') + 1);


		oItemData = getItemData(sCategory);

		nItemNo = parseInt(nImgNo) - 1;


		$('.left_box').append('<a href ="javascript:void(0)"><img src="images/item/' + sCategory + '/' + nImgNo + '_01.jpg" width="330" height="330" /></a>');

		for (var i = 1; i <= 4; i++) {
			sWork4 = sWork4 + '<a href="images/item/' + sCategory + '/' + nImgNo + '_0' + i + '.jpg"><img src="images/item/' + sCategory + '/' + nImgNo + '_0' + i + '.jpg" width="90" height="90" /></a>';
		}

		$('.image_box').append(sWork4);

		$('.buhin_box').append('<table><tr><th><p>価格：</p></th><td><p>' + oItemData[nItemNo][1] + '</p></td><td><p>円</p></td></tr><tr><th><p>数量：</p></th><td><p><input type="text" size="2" maxlength="2" /></p></td><td><p>個</p></td></tr></table>');

		$('.bottom_box').append('<b><p>' + oItemData[nItemNo][0] + '</p></b><p>' + oItemData[nItemNo][4] + '</p>');

		return;

	} catch (e) {

		alert(e);

		return;

	}

}

function getCartList() {

	var sWork1 = '';
	var sWork2 = '';

	sWork1 = location.href.slice(location.href.indexOf('?') + 1);
	sWork2 = sWork1.slice(sWork1.indexOf('=') + 1);

	makeCart(sWork2);

	return;
}

function makeCart(nCnt) {
	
	var sCookie = '';
	var sItemId = '';
	var nItemNo = 0;
	var oItemData = new Array();


	try {
		for (var i = 0; i <= nCnt; i++) {

			sItemId = 'item' + i;

			sCookie = $.cookie(sItemId);

			sCategory = sCookie.slice(0, (sCookie.length - 2));

			nItemNo = parseInt(sCookie.slice((sCookie.length - 2), sCookie.length)) - 1;

			oItemData = getItemData(sCategory);

			$('#cart_bg').append('<div class="cart_in_item"><div class="item_head"><div class="itemname"><p>' + oItemData[nItemNo][0] + '</p></div><div class="itemcnt"><input type="text" size="4" maxlength="2" />個</div><div class="b_suuhen"><div class="b_h_suuhen"><a href="#"></a></div></div><div class="b_del"><div class="b_h_del"><a href="#"></a></div></div></div><div class="item_box"><div class="item_img"><img src="' + oItemData[nItemNo][3] + '" width="140" height="140"></div><div class="item_info"><p>' + oItemData[nItemNo][4] + '</p></div></div></div>');


		}

		return;

	} catch (e) {

		alert(e);

		return;

	}
}
