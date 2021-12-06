export default class NavCustom extends HTMLElement {
	constructor () {
		super()
		var nb = this.getAttribute('nb')
		for (let index = 1; index <= nb; index++) {
			var text = this.getAttribute(`t${index}`)
			this.innerHTML += `
				<a href="#section${index}">${text}</a>`
			if (index === 1) {
				var first = this.firstElementChild
				first.classList.add('active')
			}
		}
	}
}

// var hauteur = this.clientHeight
// this.style.setProperty('--hauteur', hauteur + "px");

// faire la même avec la hauteur du header pour le top du hr et le top du parallax
// et peut-être pour la scroll detection en adaptant les top du hr, du parallax quand .hidden est là