//***************Toggle du menu***************

function menu() {
	
	const body = document.body; 													// sélection du body

    body.classList.toggle("menu-visible"); 										// toggle la classe .menu-visible sur le body

}

// test avec .has() si body a le menu
// si oui .remove() pour l'enlever du body
// si non .append() child sur le body