export default class MenuCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<ul>
				<li>
					<a id="Accueil" href="index.html">
						Accueil
					</a>
				</li>
				<li>
					<a id="Formation" href="BUT.html">
						Formation
					</a>
				</li>
				<li>
					<a id="Institut" href="IUT.html">
						Institut
					</a>
				</li>
				<li>
					<a id="Contact" href="Info.html">
						Contact
					</a>
				</li>
			</ul>`
		let id = document.body.getAttribute('data-page')
		try {
			this.current = document.querySelector(`#${id}`)
			this.current.className = 'current'
		} catch (e) {}
	}
}