//***************Test en boucle pour chaque éléments avec .show-on-scroll si il est sur l'écran***************

function loop() {

	const scroll = window.requestAnimationFrame;							// assigne à la variable la demande au navigateur d'exécuter une animation
	const imagesToShow = document.querySelectorAll('.show-on-scroll');      // sélection de tous les éléments portant la class .show-on-scroll
	const indication = document.querySelector('.scroll-indication');		// sélection l'element d'indication de scroll

	if (indication != null) {
		if (window.scrollY < 10 ){												// Test si l'utilisateur est en haut de la page
			indication.classList.add('active');									// Si oui active l'indication de scroll
		}else{
			indication.classList.remove('active');								// Sinon la désactive
		}
	}

	imagesToShow.forEach(function (element) { 								// exécute la fonction pour chaque éléments de elementsToShow
		if (isElementXPercentInViewport(element, 33)) { 					// si l'élément est affiché à l'écran
			element.classList.add('is-visible');							// ajoute la class .is-visible à l'élément
		}
	});

	scroll(loop);															// demande au navigateur d'exécuter une animation sur le prochain rafraichissement
}

loop();																		// appelle la fonction loop à l'infini

//***************Obtient la position de l'écran sur la page***************

function isElementXPercentInViewport(el, percentVisible) { //fonction qui determine le poucentage de l'element dans le viewport
	let
		rect = el.getBoundingClientRect(),
		windowHeight = (window.innerHeight || document.documentElement.clientHeight);

	return !(
		Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / + -rect.height) * 100)) < percentVisible ||
		Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
	)
};