export default class HeaderCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<div class="wrapper-hb">
				<button class="bouton-menu" onclick="menu()">
					<div class="hamburger">
						<span class="barre-1"></span>
						<span class="barre-2"></span>
					</div>
				</button>
			</div>
			<h3 id="title"></h3>
			<div class="wrapper-sb">
				<a class="loupe" href="Recherche.html">
					<img src="../Images/loupe.png" alt="Loupe">
				</a>
			</div>`
		this.h3 = document.getElementById('title')
		this.h3.innerHTML = document.body.getAttribute('data-page')
	}
}