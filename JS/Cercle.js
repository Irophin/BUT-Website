//(x0 + r cos theta, y0 + r sin theta)

const cercles = document.querySelectorAll('.matiere');

function positionCercle(element, theta, index) {
	element.style.left =  50 + (50 * Math.cos(theta)) + '%'
	element.style.top = 50 + (50 * Math.sin(theta)) + '%'
	let delay = index * .2
	element.style.transition = `all .3s ease, opacity 1.5s ease ${delay}s`
}

for (let i = 0; i < cercles.length; i++) {
	let angle = ((Math.PI * 2) / cercles.length) * i
	positionCercle(cercles[i], angle, i + 1);
}