export default class FooterCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `		
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
				<a title="LinkedIn" href="https://www.linkedin.com/school/iut-lyon-1/" target="_blank">
					<img src="../Images/linkedin.png" alt="">
				</a>
				<a title="YouTube" href="https://www.youtube.com/channel/UCsetT2YSWfx1pcu-Yl6Pitg" target="_blank">
				<img src="../Images/youtube.png" alt="">
				</a>
				<a title="Instagram" href="https://www.instagram.com/iutlyon1/?hl=fr" target="_blank">
					<img src="../Images/instagram.png" alt="">
				</a>
				<a title="Twitter" href="https://twitter.com/iutlyon1" target="_blank">
					<img src="../Images/twitter.png" alt="">
				</a>
				<a title="Facebook" href="https://fr-fr.facebook.com/IUTLyon1/" target="_blank">
					<img src="../Images/facebook.png" alt="">
				</a>
			</div>
			<p class="credit">
				Credit : Albert VAILLON | Lilian BAUDRY
			</p>`
	}
}