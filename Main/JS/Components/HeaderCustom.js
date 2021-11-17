export default class HeaderCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `
			<button class="bouton-menu" onclick="menu()">
				<div class="hamburger">
					<span class="barre-1"></span>
					<span class="barre-2"></span>
				</div>
			</button>
			<div>
				<h3>
					<a href="index.html">SAE Web</a>
				</h3>
				<div class="wrapper">
					<input type="checkbox" id="input">
					<div class="search-bar">
						<input placeholder="Recherche">
						<span class="label">Recherche</span>
					</div>
					<label for="input" class="loupe">
						<img src="../Images/loupe.png" alt="loupe">
					</label>
				</div>
			</div>`
	}

}