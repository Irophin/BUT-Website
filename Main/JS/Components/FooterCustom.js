export default class FooterCustom extends HTMLElement {

	constructor () {
		super()
		this.innerHTML = `		
			<img class="logo" src="../Images/logo_universite.svg" alt="">
			<div class="categories">
				<article>
					<h4>Section 1</h4>
					<p>ceci est le contenu de la section 1</p>
					<p>ceci est le contenu de la section 1</p>
				</article>

				<article>
					<h4>Section 2</h4>
					<p>ceci est le contenu de la section 2</p>
					<p>ceci est le contenu de la section 2</p>
				</article>

				<article>
					<h4>Section 3</h4>
					<p>ceci est le contenu de la section 3</p>
					<p>ceci est le contenu de la section 3</p>
				</article>
			</div>

			<div class="reseaux">
				<span>
					<img src="../Images/facebook.png" alt="">
				</span>
				<span>
					<img src="../Images/twitter.png" alt="">
				</span>
				<span>
					<img src="../Images/instagram.png" alt="">
				</span>
				<span>
					<img src="../Images/youtube.png" alt="">
				</span>
			</div>

			<p class="credit">
				Credit : Albert VAILLON | Lilian BAUDRY
			</p>`
	}

}