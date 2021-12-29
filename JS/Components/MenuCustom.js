export default class MenuCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a aria-label="Aller sur la page d'acceuil" id="Accueil" href="index.html">
						Accueil
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page du BUT" id="Formation" href="BUT.html">
						Formation
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page de l'IUT" id="Institut" href="IUT.html">
						Institut
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page pour nous contacter" id="Contact" href="Info.html">
						Contact
					</a>
				</li>
			</ul>`
		let id = document.body.getAttribute('data-page')
		try {
			this.current = document.querySelector(`#${id}`)
			this.current.setAttribute('aria-current', 'page')
		} catch (e) {}
	}
}