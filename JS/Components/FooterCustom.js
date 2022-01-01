export default class FooterCustom extends HTMLElement {
	constructor () {
		super()
		this.innerHTML = `		
			<img src="Images/logo_universite.svg" class="logo" alt="Logo des universités de lyon">
			<div class="categories">
				<article>
					<h4>UNIVERSITÉ</h4>
					<a aria-label="Aller sur la page de l'IUT" title="IUT" href="IUT.html">Institut universitaire Lyon 5</a>
					<a aria-label="Aller sur la page Vie Étudiante" title="Vie Étudiante" href="https://www.univ-lyon1.fr/campus/vie-etudiante" target="_blank">Vie et Associations étudiantes</a>
					<a aria-label="Aller sur la page du BDE" title="BDE Info" href="https://www.bdeinfo.org" target="_blank">Bureau Des Etudiants</a>
				</article>
				<article>
					<h4>INFORMATIONS</h4>
					<a aria-label="Aller sur la page Google Maps de l'IUT" title="Google Maps" href="https://www.google.fr/maps/place/1+Rue+de+la+Technologie,+69100+Villeurbanne" target="_blank">1 Rue de la technologie 69100 Villeurbanne</a>
					<a aria-label="Aller sur la page pour nous contacter" title="Contact" href="Info.html">Contactez-nous</a>
				</article>
				<article>
					<h4>FORMATION</h4>
					<a aria-label="Aller sur la page du BUT" title="BUT" href="BUT.html">Bachelor Universitaire Technologique</a>
					<a aria-label="Aller sur la page de l'Orientation Professionnelle" title="Orientation Professionnelle" href="https://www.univ-lyon1.fr/formation/orientation-stages-et-emploi" target="_blank">Orientation et Insertion professionnelle</a>
					<a aria-label="Aller sur la page BUT de l'Onisep" title="Onisep" href="https://www.onisep.fr/Ressources/Univers-Postbac/Postbac/Auvergne-Rhone-Alpes/Rhone/iut-lyon-1-site-de-villeurbanne-doua/but-informatique" target="_blank">Onisep - BUT Informatique</a>
				</article>
			</div>
			<div class="reseaux">
				<a aria-label="Aller sur la page LinkedIn de l'IUT" title="LinkedIn" href="https://www.linkedin.com/school/iut-lyon-1/" target="_blank">
					<img src="Images/linkedin.png" alt="Linkedin">
				</a>
				<a aria-label="Aller sur la page YouTube de l'IUT" title="YouTube" href="https://www.youtube.com/channel/UCsetT2YSWfx1pcu-Yl6Pitg" target="_blank">
					<img src="Images/youtube.png" alt="YouTube">
				</a>
				<a aria-label="Aller sur la page Instagram de l'IUT" title="Instagram" href="https://www.instagram.com/iutlyon1/?hl=fr" target="_blank">
					<img src="Images/instagram.png" alt="Instagram">
				</a>
				<a aria-label="Aller sur la page Twitter de l'IUT" title="Twitter" href="https://twitter.com/iutlyon1" target="_blank">
					<img src="Images/twitter.png" alt="Twitter">
				</a>
				<a aria-label="Aller sur la page Facebook de l'IUT" title="Facebook" href="https://fr-fr.facebook.com/IUTLyon1/" target="_blank">
					<img src="Images/facebook.png" alt="Facebook">
				</a>
			</div>
			<p class="credit">
				<a aria-label="Aller sur la page CV Albert" href="https://eviive.github.io/CV/" target="_blank">Albert VAILLON</a> | <a aria-label="Aller sur la page CV Lilian" href="https://irophin.github.io/CV-Web/" target="_blank">Lilian BAUDRY</a>
			</p>`
	}
}