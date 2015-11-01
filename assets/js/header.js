$(document).ready(function() {
	var path = window.location.pathname
	$('nav a').each(function(link) {
		var ref = $(this).attr('href')
		if(ref == path) {
			$(this).addClass('active')
		}
	})
})