// average grade calc- formula

avg = (g1 + g2 + g3) / 3

// manual testing
// g1 = 10
// g2 = 10
// g3 = 8

// avg = (g1 + g2 + g3) / 3

// automationn testing nu lucreaza cu stringuri
test_data = [
//  g1   g2  g3  gAvg
    [10, 10, 10,  10],
    [ 5,  6,  7,   6],
    [ 9,  9,  10,  9.333333333333334],
    [ "9",  "9",  "10",  9.333333333333334],
]
console.log("testing the formula: ")
for(let it=0; it < test_data.length; it++) {
    gAvg = (test_data[it][0] + test_data[it][1] + test_data[it][2]) / 3
    if(gAvg === test_data[it][3]){
       console.log(`test ${it+1} passed!`)
    }  else {
        console.log(`test ${it+1} failed!`)
    }
}