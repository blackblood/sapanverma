$(document).ready(function() {
	var path = window.location.pathname
	$('nav a').each(function(link) {
		var ref = $(this).attr('href')
		if(ref == path) {
			$(this).addClass('active')
		}
	})
	$('header .fa-align-justify').on('click', function() {
		$('aside.mobile-navbar').addClass('showNavbar')
		$('aside.mobile-navbar').removeClass('hideNavbar')
		$('.dim-cloak').show()
	})

	$('aside.mobile-navbar .fa-remove').on('click', function() {
		$('aside.mobile-navbar').removeClass('showNavbar')
		$('aside.mobile-navbar').addClass('hideNavbar')
		$('.dim-cloak').hide()
	})
})