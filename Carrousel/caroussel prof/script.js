const timeToChange = 10 //Temps pour que les images défiles en secondes
document.querySelector('.adam-custom-carousel').style = `--timeToChange : ${timeToChange}s;`
const imgs = Array.from(document.querySelectorAll('.adam-custom-carousel .img-container img'))
const nextImage = (addToIndex = 0) => {
    let currentActiveIndex;
    imgs.some((img, index) => { currentActiveIndex = index; return img.classList.contains('active') })
    let nextIndex = currentActiveIndex + 1 + addToIndex
    nextIndex = (nextIndex === imgs.length) ? 0 : (nextIndex < 0) ? imgs.length - 1 : nextIndex
    imgs[currentActiveIndex].classList.toggle('active')
    imgs[nextIndex].classList.toggle('active')
}
const interval = setInterval(nextImage, timeToChange * 1000)

document.querySelector('.adam-custom-carousel .arrow-left').addEventListener('click', () => {
    nextImage(-2)
})

document.querySelector('.adam-custom-carousel .arrow-right').addEventListener('click', () => {
    nextImage()
})
