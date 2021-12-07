export default class NavCustom extends HTMLElement {
	constructor () {
		super()
		var index = 1
		while (this.getAttribute(`t${index}`) !== null) {
			var text = this.getAttribute(`t${index}`)
			this.innerHTML += `
				<a href="#section${index}">${text}</a>`
			index++
		}
		var first = this.firstElementChild
		first.classList.add('active')
	}
}

// var hauteur = this.clientHeight
// this.style.setProperty('--hauteur', hauteur + "px");