export default class NavCustom extends HTMLElement {
	constructor () {
		super()
		let titre = this.getAttribute("data-titre").split("/")
		for (let index = 0; index !== titre.length; index++) {
			this.innerHTML += `
				<a href="#section${index + 1}">${titre[index]}</a>
			`
		}
		let first = this.firstElementChild
		first.classList.add('active')
	}
}