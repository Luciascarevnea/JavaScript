

// multi level menu (restaurant)
// -home
// -menu     <---------user clicks
//   |
//   +----hot food
//   |
//   +----cold food
//   |
//   +----drinks
//
// -contacts

// array-valori separate prin virgula in paranteze patrate

const menu = ["home", "menu", "contacts"]
const menuItems = ["hot food", "cold food", "drinks"]
let didUserClick = false

for(let i=0; i<=2; i++){  // 3 times : 2
   console.log(menu[i])
   if (menu[i] == "menu" && didUserClick){
      for(let i=0; i<=2; i++){
        console.log("-", menuItems[i])
      }
   }
}