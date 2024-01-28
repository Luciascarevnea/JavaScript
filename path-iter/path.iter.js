// forward / backward stepping / iteration

let food = [
    "pizza",    // 0   < start
    "salad",    // 1       |  3 items
    "soup",     // 2       v
    "polenta",  // 3
    "wok",      // 4
    "shrimps",  // 5
]
// pentru a afla lungea intre bare folosim ".lenght"
let start = 4
let items = 3

console.log("+---------------+")
for(let i = start; i >= start - items + 1; i--){
      console.log("|                   |")
      let spaces = 12 - food[i].length

      console.log(`|     "${food[i]}"${"".repeat(spaces)}|`)
      console.log("|                   |")
}
console.log("+---------------+")
/*
// HW1: Make changes so your algoritm steps backward from 3 items up
+----------------------+
|                      |
|                      |
|    "pizza"           |
|                      |       
|                      |
|     "salad"          |
|                      |
|                      |
|     "soup"           |
|                      |
|                      |
+----------------------+





*/