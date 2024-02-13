function adjustSun (){
    let hour = +inputHour.value
    const K = 100 / 12
    const KC = 255 / 12
    if(hour >= 6 && hour <= 18){
        if(hour <=12 ){
            let left = K * (hour - 6)
            sun.style.left = `${left}%`

            let bottom = 20 * (hour - 6)
            sun.style.bottom = `${bottom}px`

        } else{
            let left = K * (hour - 6)
            sun.style.left = `${left}%`

            let bottom = 120 - (20 * (hour - 12));
            sun.style.bottom = `${bottom}px`;
        }
    
        

        // HW1: de facut ca soarele de la mijloc sa coboare in jos
        // de la 12-> 18
        // utilizam if/else
        let cred, cgreen, ered, egreen
        if(hour <= 12){
            cred = 100 + 3 * KC * (hour - 6)
            cgreen = 50 + 3 * KC * (hour - 6)
            ered = 50 + 2 * KC * (hour - 6)
            egreen = 20 + 2 * KC * (hour - 6)
        } else{
            cred = 100 + 3 * KC * (18 - hour); 
            cgreen = 50 + 3 * KC * (18 - hour);
            ered = 50 + 2 * KC * (18 - hour);
            egreen = 20 + 2 * KC * (18 - hour);
        }  
        sun.style.background = `radial-gradient(
            rgb(${cred}, ${cgreen}, 0), 
            rgb(${ered}, ${egreen}, 0))`;      
    }
    // radial-gradient(rgb(255, 0, 0), rgb(255, 165, 0))
}
 

// HW2: De ajustat culoarea cerului 
// HW3: De desenat diagrama