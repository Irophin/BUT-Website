export default class MenuCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a id="Accueil" href="index.html">
						<span>Accueil</span>
					</a>
				</li>
				<li>
					<a id="Formation" href="BUT.html">
						<span>Formation</span>
					</a>
				</li>
				<li>
					<a id="Institut" href="IUT.html">
						<span>Institut</span>
					</a>
				</li>
				<li>
					<a id="Contact" href="Info.html">
						<span>Contactez-nous</span>
					</a>
				</li>
			</ul>`
		let id = document.body.getAttribute('data-page')
		if (id != 'Confirmation' && id != 'Recherche')
		{
			this.current = document.querySelector(`#${id}`)
			this.current.className = 'current'
		}
	}
}