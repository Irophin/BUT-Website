export default class MenuCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a id="Acceuil" href="index.html">
						<span>Acceuil</span>
					</a>
				</li>
				<li>
					<a id="BUT" href="BUT.html">
						<span>Le BUT</span>
					</a>
				</li>
				<li>
					<a id="IUT" href="IUT.html">
						<span>L'Institut</span>
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