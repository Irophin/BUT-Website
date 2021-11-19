export default class MenuCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a href="index.html">Acceuil</a>
				</li>
				<li>
					<a href="Caroussel.html">Caroussel</a>
				</li>
				<li>
					<a href="Graph.html">Graphique</a>
				</li>
				<li>
					<a href="Info.html">A propos</a>
				</li>
			</ul>`
	}

}