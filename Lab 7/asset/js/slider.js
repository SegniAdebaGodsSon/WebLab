const X_DIMENSION = 1920;
const Y_DIMENSION = 1080;
const carousel = document.querySelector('.carousel-inner');

let carousels = Array.from(carousel.children)
document.addEventListener("DOMContentLoaded", () => {
    carousels.forEach(c => {
        generatePictureUrl().then(url => {
            console.log(url.url);
            c.style.backgroundImage = `url(${url.url})`;
        })
        
    })
});




let generatePictureUrl = async () => {
    let response = await fetch(`https://picsum.photos/${X_DIMENSION}/${Y_DIMENSION}`);
    let url = response.url;
    return {url}
}




