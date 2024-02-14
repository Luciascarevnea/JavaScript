let options = [
    1000,
    null,
    "car",
    null,
    null,
    10000,
    null,
    null,
    null,
    100,
    null,
    "house",
]

function renderWheel () {
    
   let html = ``

   for(let index = 0; index < options.length; index++){
       let value = options[index];
       let color

       if(typeof value == 'number'){
          color = "white"
       }
       else if(typeof value == 'string'){
          color = "darkred"
       } else{
          value = `<img src="sad.svg"/>`
       }

       html += `
           <li style="transform: rotate(${index * 30}deg); color: ${color}">
               ${value}
           </li>`
   }
   
   wheel.innerHTML = html
   
}

function rotateWheel (){
    let turns = Math.random() * 10
    wheel.style = `transform: rotate(${turns}turn)`

    let remainder = turns - Math.floor(turns)
    let sector = parseInt(12 * remainder)
    console.log(options[sector])
}

renderWheel ()
