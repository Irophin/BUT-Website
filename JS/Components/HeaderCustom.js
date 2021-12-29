export default class HeaderCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `
			<div class="wrapper-hb">
				<button aria-label="Ouvrir/fermer le menu" class="bouton-menu" onclick="menu()">
					<div class="hamburger">
						<span class="barre-1"></span>
						<span class="barre-2"></span>
					</div>
				</button>
			</div>
			<h3 id="title"></h3>
			<div class="wrapper-sb">
				<a aria-label="Aller sur la page de recherche" class="loupe" href="Recherche.html">
					<img src="Images/loupe-wh.png" alt="Loupe">
				</a>
			</div>`
		this.h3 = document.querySelector('#title')
		this.h3.innerHTML = document.body.getAttribute('data-page')
	}
}