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

var BLOCK = 'fotorama',
ELEM_WRAP = BLOCK + '__wrap',
ELEM_THUMB = BLOCK + '__thumbs'
ELEM_ARROW = BLOCK + '__arrow',
ELEM_SWITCHER = BLOCK + '__switcher',
MOD_ARROW_PREV = ELEM_ARROW + '--prev',
MOD_ARROW_NEXT = ELEM_ARROW + '--next',
ICON = 'icon',
ICON_IMG = ICON + '__img',
ICON_TEXT = ICON + '__text';



function createSwitcher(className, showParam, content) {
	return $('<div/>', {'class': className, tabindex: 0, role: 'button'})
		.addClass(ELEM_SWITCHER)
		.data('show-param', showParam)
		.append(content);
}		

$(function() {
	var renderedMachines = [], thumbs = [];
	for (var i = 0; i < 8; i++) {
		var machine = machines[i % 2];
		renderedMachines.push({html: renderMachine(machine)});
		thumbs.push(createSwitcher(ICON, i, [
			$('<div/>', {'class': ICON_IMG}).append($('<img/>', {src: machine.url})),
			$('<div/>', {'class': ICON_TEXT}).text(machine.name)
		]));
	}

	var $fotorama = $('.' + BLOCK)
		.fotorama({
			width: 816,
			height: 380,
			loop: true,
			keyboard: true,
			swipe: true,
			transitionduration: 1000,
			spinner: false,
			nav: false,
			arrows: false,
			data: renderedMachines
		});

	$fotorama.find('.' + ELEM_WRAP)
		.append(thumbs)
		.append(createSwitcher([ELEM_ARROW, MOD_ARROW_PREV].join(' '), '<'))
		.append(createSwitcher([ELEM_ARROW, MOD_ARROW_NEXT].join(' '), '>'))
		.on('click', '.' + ELEM_SWITCHER, function() {
			$fotorama.data('fotorama').show($(this).data('show-param'));
		});
	
});


