export default class NavCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `
			<a href="#section1" class="active">Acceuil</a>
			<a href="#section2">Le BUT</a>
			<a href="#section3">Lyon 5</a>
			<a href="#section4">Avenir</a>`
		var hauteur = this.clientHeight
		this.style.setProperty('--hauteur', hauteur + "px");
		// faire la même avec la hauteur du header pour le top du hr et le top du parallax
		// et peut-être pour la scroll detection en adaptant les top du hr, du parallax quand .hidden est là

		// passer le top du nav-custom::before en attribut comme ça je peux faire le calcul 0/25/50/75 0/33/66 directement içi
	}

}