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
					<a id="BUT" href="BUT.html">
						<span>Formation</span>
					</a>
				</li>
				<li>
					<a id="L'Institut" href="IUT.html">
						<span>Institut</span>
					</a>
				</li>
				<li>
					<a id="A propos" href="Info.html">
						<span>A propos</span>
					</a>
				</li>
			</ul>`
		let id = document.body.getAttribute('data-page')
		if (id != 'Confirmation' && id != 'Recherche')
		{
			this.current = document.getElementById(id)
			this.current.className = 'current'
		}
	}
}