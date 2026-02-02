$(document).ready(function(){
	$(".navbar-fixed-top .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );

	$('.navigation.overlay .navbar-collapse ul li a').on('click',function() {
	    $('.navbar-toggle:visible').click();
	});

});