// IN: our script reads the child content width, padding, border, margin in pixels
//     also the script reads the parent content width
// FACT: we know the mode of the box-sizing (conte/border) and the formula
// OUT: print the total of the child, print if fits, print the overflow
//      offset


// HW: Diferenta, cu citi px iese in afara parintelui?

// <div>  - parent
//    <div></div> - child
// </div>


childWidth   = 20
childPadding = 10
childBorder  = 1
childMargin  = 20

parentWidth  = 110


childSize    = childWidth + (childPadding + childBorder + childMargin) * 2

overflow = childSize - parentWidth

// alert( "Horizontal child size" + childSize + "px" )
alert("child overflow? " + overflow + "px")
