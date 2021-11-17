var lastScrollTop = 0;

$(window).scroll(function(event){

	var sT = $(this).scrollTop();

	if (sT > lastScrollTop){
    	console.log('scroll down') // pour le debug

	} else {
		console.log('scroll up') // pour le debug
	}

	lastScrollTop = sT;
});