//***************Variable globale***************

var body = document.body; 														// sélection du body

//***************Toggle du menu***************

function menu() {

    body.classList.toggle("menu-visible"); 										// toggle la classe .menu-visible sur le body
}

//***************Test en boucle pour chaque éléments avec .show-on-scroll si il est sur l'écran***************

function loop() {

    var scroll = window.requestAnimationFrame;								// assigne à la variable la demande au navigateur d'exécuter une animation
    var elementsToShow = document.querySelectorAll('.show-on-scroll');      // sélection de tous les éléments portant la class .show-on-scroll
    var elementsBackColor = document.querySelectorAll('.back-color'); 		// sélection de tous les éléments portant la class .back-color

    elementsToShow.forEach(function(element) { 								// exécute la fonction pour chaque éléments de elementsToShow
        if (isElementInViewPort(element)) { 								// si l'élément est affiché à l'écran
            element.classList.add('is-visible');							// ajoute la class .is-visible à l'élément
        }
        // décommenter si on veux faire les animations plus d'une fois
        // else {
        //     element.classList.remove('is-visible')
        // }
    });
    
    elementsBackColor.forEach(function(element) {							// exécute la fonction pour chaque éléments de elementsBackColor
        if (isElementInViewPort(element)) {									// si l'élément est affiché à l'écran
            body.classList.add('dark-back');								// ajoute la class .dark-back au body
        }
        else																// sinon
        {
            body.classList.remove('dark-back');								// enlève la class .dark-back au body
        }
    });
    
    scroll(loop);															// demande au navigateur d'exécuter une animation sur le prochain rafraichissement
}

loop();																		// appelle la fonction loop à l'infini

//***************Obtient la position de l'écran sur la page***************

function isElementInViewPort(element) {

    var rect = element.getBoundingClientRect();								// assigne à la variable la position de element par rapport à la zone d'affichage

    return (
        (rect.top <= 0 && rect.bottom >=0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}