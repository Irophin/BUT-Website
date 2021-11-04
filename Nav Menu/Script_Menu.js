/***************Toggle Menu***************/

function Menu() {
    var element = document.getElementById("body");
    element.classList.toggle("menu-visible");
}

/***************Scroll Animation***************/

var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

/***************Test en boucle pour chaque éléments avec .show-on-scroll si il est sur l'écran***************/

function loop() {
    elementsToShow.forEach(function(element) {
        if (isElementInViewPort(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible')
        }
    });
    scroll(loop);
}

loop();

/***************Obtient la position de l'écran sur la page***************/

function isElementInViewPort(element) {
    var rect = element.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >=0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}