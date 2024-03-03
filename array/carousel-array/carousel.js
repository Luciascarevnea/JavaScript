// OWL, Slick, ... Bootstrap
// 1. function
// 2. events
// 3. Array, Number, String ..
// 4. if/else, for/while


const IMAGES = [                // HW1: Q: de ce const?
    "images/120-800x600.jpg",
    "images/335-800x600.jpg",
    "images/565-800x600.jpg"

]

// start/current slide
let currentIndex = 0

function showImage( n ){
     carouselSlides.innerHTML = 
     `
     <img src="${IMAGES[n]}"/>
     `
}

function prev(){
    if(currentIndex === 0 ){
        currentIndex = IMAGES.length - 1
    } else{
        currentIndex--
    }
    showImage (currentIndex)
}

function next(){
    if(currentIndex === IMAGES.length - 1){
        currentIndex = 0
    } else{
        currentIndex++
    }
    showImage (currentIndex)
}


showImage (currentIndex)