// Array - collection of ordered, indexed - list-like objects
//            + batteries included

//       | value 1 | value 2 | .... | valueN |
//   idx |       0 |       1 | .... |    n-1 |







// MOTIVATION

let slides = [ 
    "images/2024/slide-1.jpg",   // 0
    "images/2024/slide-2.jpg",   // 1
    "images/2024/slide-3.jpg"    // 2
]

for (let i=0; i<3; i++){
    document.write(`<img src="${slides[i]}">`)
}
