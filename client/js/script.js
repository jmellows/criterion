Template.index.rendered = function () {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage'],
		menu: '#menu'
	});

	$( "#menu1" ).click(function() {
		$.fn.fullpage.moveTo("secondPage");
		$('#mainnav1').hide();
		$('#mainnav2').fadeIn(1000);
		/*$("#mainnav").removeClass("navbar-fixed-bottom").addClass( "navbar-fixed-top" );*/
	});

	$( "#menu2" ).click(function() {
		$.fn.fullpage.moveTo("firstPage");
		$('#mainnav1').fadeIn(1000);
		$('#mainnav2').hide();
		/*$("#mainnav").removeClass("navbar-fixed-bottom").addClass( "navbar-fixed-top" );*/
	});
};