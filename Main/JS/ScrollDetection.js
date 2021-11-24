var lastScrollTop = 0;

$(window).scroll(function(event){

	var scrollTop = $(this).scrollTop();

	if (scrollTop > lastScrollTop) {
    	console.log('scroll down') // pour le debug

	} else {
		console.log('scroll up') // pour le debug
	}

	lastScrollTop = scrollTop;
});