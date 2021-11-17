export default class MenuCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a href="../HTML/Index.html">Acceuil</a>
				</li>
				<li>
					<a href="#">Page 2</a>
				</li>
				<li>
					<a href="Graph.html">Graphique</a>
				</li>
				<li>
					<a href="#">Page 4</a>
				</li>
			</ul>`
	}

}