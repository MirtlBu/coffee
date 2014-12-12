$(function() {
	var ELEMS = ['img-step', 'title', 'info', 'text'];
	var ADDCLASS = '--clicked';
	$('.steps__item').on('mouseenter', function(){
		var that = this;
		$.map(ELEMS, function(val) {
			$(that).closest('.steps__item').find('.' + val).addClass(val + ADDCLASS);
		})
	});
	$('.steps__item').on('mouseleave', function(){
		var that = this;
		$.map(ELEMS, function(val) {
			$(that).closest('.steps__item').find('.' + val).removeClass(val + ADDCLASS);
		})
	});
});
// $(function() {
// 	$('button').on('click', function() {
// 		var mysorts = sorts;
// 		console.log(mysorts.africa[1].url);
// 	})
// })


var BLOCK = 'fotorama',
ELEM_WRAP = BLOCK + '__wrap',
ELEM_THUMB = BLOCK + '__thumbs'
ELEM_TEMPL = '<div><div class="icon__img"><img src="img/coffeemachine-2.jpg"></div><div class="icon__text">Delonghi ECO 310</div></div>';
ELEM_ARROW = BLOCK + '__arrow',
MOD_ARROW_PREV = ELEM_ARROW + '--prev',
MOD_ARROW_NEXT = ELEM_ARROW + '--next';

function createArrow(mod, showParam) {
	return $('<div/>', {
		'class': ELEM_ARROW,
		tabindex: 0,
		role: 'button'
	}).addClass(mod).on('click', function() {
		$('.fotorama').data('fotorama').show(showParam);
	});
}

function createThumb(showParam) {
	return $(ELEM_TEMPL, {
		'class': ELEM_THUMB,
		tabindex: 0,
		role: 'button'
	}).addClass('icon__item').on('click', function() {
		$('.fotorama').data('fotorama').show(showParam);
	});
}		

$('.fotorama').on('fotorama:ready', function (e, fotorama) {
  $('.fotorama').find('.fotorama__wrap')
		.append(createThumb(0))
		.append(createThumb(1))
		.append(createThumb(2))
		.append(createThumb(3))
		.append(createThumb(4))
		.append(createThumb(5))
		.append(createThumb(6))
		.append(createThumb(7))
		.append(createArrow(MOD_ARROW_PREV, '<'))
		.append(createArrow(MOD_ARROW_NEXT, '>'));
}).fotorama({
	width: 816,
	height: 380,
	loop: true,
	keyboard: true,
	swipe: true,
	transitionduration: 1000,
	auto: false,
	spinner: false,
	nav: false,
	arrows: false
});



