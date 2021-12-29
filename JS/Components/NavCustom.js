export default class NavCustom extends HTMLElement {
	constructor () {
		super()
		let titres = document.querySelectorAll('[data-spy]')
		for (let index = 0; index !== titres.length; index++) {
			let id = titres[index].getAttribute('id')
			this.innerHTML += `
				<a aria-label="Aller à l'ancre ${id}" href="#${id}">${id}</a>
			`
		}
		let first = this.firstElementChild
		first.classList.add('active')
	}
}