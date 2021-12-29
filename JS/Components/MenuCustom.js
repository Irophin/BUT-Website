export default class MenuCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a aria-label="Aller sur la page d'acceuil" class="Accueil" href="index.html">
						Accueil
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page du BUT" class="Formation" href="BUT.html">
						Formation
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page de l'IUT" class="Institut" href="IUT.html">
						Institut
					</a>
				</li>
				<li>
					<a aria-label="Aller sur la page pour nous contacter" class="Contact" href="Info.html">
						Contact
					</a>
				</li>
			</ul>`
		let nom = document.body.getAttribute('data-page')
		try {
			this.current = document.querySelector(`.${nom}`)
			this.current.setAttribute('aria-current', 'page')
		} catch (e) {}
	}
}