$(function(){
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

})