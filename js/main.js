$(".toggle-bar").click(function() {
	if($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.navbar-holder').removeClass('side-navigation-left');
		$('.navbar').css('margin-left','0');
	} else {
		$(this).addClass('open');
		$('.navbar-holder').addClass('side-navigation-left');
		$('.navbar').css('margin-left','-235px');
	}
});


$(window).scroll(function() {
	if($(window).scrollTop()>10){
		$('.navbar').addClass('navbar-top');
		$('.navbar-holder').addClass('navbar-holder-top');
		$('.mobile-navigation').addClass('mobile-nav-top');
	} else{
		$('.navbar').removeClass('navbar-top');
		$('.navbar-holder').removeClass('navbar-holder-top');
		$('.mobile-navigation').removeClass('mobile-nav-top');
	}
});