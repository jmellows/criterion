Template.header.rendered = function () {
	$('#nav').affix({
		offset: {
			top: $('header').height()
		}
	});

	$('#scrolllogo a').on('click', function() {
		
		
		var scrollAnchor = $(this).attr('data-scroll'),
		scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

		$('body,html').animate({
			scrollTop: scrollPoint
		},700);
		
		$("ul").show("slow");
		
		return false;
		
		
	});
};