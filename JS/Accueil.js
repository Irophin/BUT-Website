function Indication(){
	const indication = document.querySelector('.scroll-indication');	// sélection l'element d'indication de scroll

	if (indication != null) {
		if (window.scrollY < 25 ){										// Test si l'utilisateur est en haut de la page
			indication.classList.add('active');							// Si oui active l'indication de scroll
		}else{
			indication.classList.remove('active');						// Sinon la désactive
		}
	}
	window.requestAnimationFrame(Indication);
}

Indication();