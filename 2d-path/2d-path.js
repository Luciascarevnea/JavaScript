// array unidimensional(un singur rand)
// array bidimensional(randuri care contin coloane)

// bidimensional array
// let data = [
//   0  1  2 ------------->  dimension 1
//    [1, 2, 3],    // 0  |
//    [4, 5, 6],    // 1  |
//    [7, 8, 9],    // 2  |
//    [0]           // 3  |
//]                 //    v  dimension 0

// vacuum cleaner robot
let roomMap = [
    [1,1,0,0,0,0,0,0,1,1],  // 0
    [1,1,0,0,0,0,0,0,0,0],  // 1
    [0,0,0,0,0,0,0,0,0,0],  // 2
    [0,0,0,1,1,1,1,0,0,0],  // 3
    [8,0,0,1,1,1,1,0,0,0]   // 4
//   0 1 2 3 4 5 6 7 8 9    
]

let path = [
//   0 1 2 3    
    [4,0,3,0],   // < step
    [3,0,2,0],
    [2,0,2,1],
    [2,1,2,2],
    [2,2,1,2],
    [1,2,0,2],
    [0,2,0,3],
    [0,3,0,4],
    [0,4,0,5],
    [0,5,0,6],
    [0,6,0,7],
    [0,7,1,7],
    [1,7,2,7],
    [2,7,2,8],
    [2,8,2,9],

]

//  [1,1,^,>,>,>,>,>,1,1],  // 0
//  [1,1,^,0,0,0,0,v,1,1],  // 1
//  [^,>,>,0,0,0,0,v,>,>],  // 2
//  [^,0,0,1,1,1,1,0,0,0],  // 3
//  [8,0,0,1,1,1,1,0,0,0]   // 4

for(let step=0; step< path.length; step++){
   roomMap[path[step][0]][path[step][1]] = 0
   roomMap[path[step][2]][path[step][3]] = 8
}

// HW1: de continuat calea



// 2nd step
// roomMap[3][0] = 0
// roomMap[2][0] = 8

// 3rd step
// roomMap[2][0] = 0
// roomMap[2][1] = 8

// 4th step
// roomMap[2][1] = 0
// roomMap[2][2] = 8

// 5th step
// roomMap[2][2] = 0
// roomMap[1][2] = 8

// 6th step
// roomMap[1][2] = 0
// roomMap[0][2] = 8