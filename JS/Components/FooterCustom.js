export default class FooterCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `		
			<img src="/Images/logo_universite.svg" class="logo" alt="Logo des universités de lyon">
			<div class="categories">
				<article>
					<h4>UNIVERSITÉ</h4>
					<a title="IUT" href="IUT.html">Institut universitaire Lyon 5</a>
					<a title="Vie Étudiante" href="https://www.univ-lyon1.fr/campus/vie-etudiante">Vie et Associations étudiantes</a>
					<a title="BDE Info" href="https://www.bdeinfo.org">Bureau Des Étudiants</a>
				</article>
				<article>
					<h4>INFORMATIONS</h4>
					<a title="Google Maps" href="https://www.google.fr/maps/place/1+Rue+de+la+Technologie,+69100+Villeurbanne">1 Rue de la technologie 69100 Villeurbanne</a>
					<a title="Contact" href="Info.html">Contactez-nous</a>
				</article>
				<article>
					<h4>FORMATION</h4>
					<a title="BUT" href="BUT.html">Bachelor Universitaire Technologique</a>
					<a title="Orientation Professionnelle" href="https://www.univ-lyon1.fr/formation/orientation-stages-et-emploi">Orientation et Insertion professionnelle</a>
					<a title="Onisep" href="https://www.onisep.fr/Ressources/Univers-Postbac/Postbac/Auvergne-Rhone-Alpes/Rhone/iut-lyon-1-site-de-villeurbanne-doua/but-informatique">Onisep - BUT Informatique</a>
				</article>
			</div>
			<div class="reseaux">
				<a title="LinkedIn" href="https://www.linkedin.com/school/iut-lyon-1/" target="_blank">
					<img src="Images/linkedin.png" alt="Linkedin">
				</a>
				<a title="YouTube" href="https://www.youtube.com/channel/UCsetT2YSWfx1pcu-Yl6Pitg" target="_blank">
				<img src="Images/youtube.png" alt="YouTube">
				</a>
				<a title="Instagram" href="https://www.instagram.com/iutlyon1/?hl=fr" target="_blank">
					<img src="Images/instagram.png" alt="Instagram">
				</a>
				<a title="Twitter" href="https://twitter.com/iutlyon1" target="_blank">
					<img src="Images/twitter.png" alt="Twitter">
				</a>
				<a title="Facebook" href="https://fr-fr.facebook.com/IUTLyon1/" target="_blank">
					<img src="Images/facebook.png" alt="Facebook">
				</a>
			</div>
			<p class="credit">
				Credit : <a href = "https://eviive.github.io/CV/">Albert VAILLON</a> | <a href = "https://irophin.github.io/CV-Web/"> Lilian BAUDRY</a>
			</p>`
	}
}