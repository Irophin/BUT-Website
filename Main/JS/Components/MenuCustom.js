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
					<a id="Caroussel" href="Caroussel.html">
						<span>Caroussel</span>
					</a>
				</li>
				<li>
					<a id="Graphique" href="Graph.html">
						<span>Graphique</span>
					</a>
				</li>
				<li>
					<a id="A propos" href="Info.html">
						<span>A propos</span>
					</a>
				</li>
			</ul>`
		let id = document.querySelector('menu-custom').getAttribute('nom-page')
		this.current = document.getElementById(id)
		this.current.className = 'current'
	}
}