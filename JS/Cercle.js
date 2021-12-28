//(x0 + r cos theta, y0 + r sin theta)

const cercles = document.getElementsByClassName('matiere');

function positionCercle(element, theta) {
	element.style.left =  50 + (50 * Math.cos(theta)) + '%';
	element.style.top = 50 + (50 * Math.sin(theta)) + '%';
}

for (let i = 0; i < cercles.length; i++) {
	let angle = ((Math.PI * 2) / cercles.length) * i;
	positionCercle(cercles[i], angle);
}