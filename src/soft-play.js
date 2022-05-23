// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

/* Need a program that maintains a count of both adults and childen in softplay.

Function 1: enter(numAdults, numChildren)
Inputs number of Children and Adults entering,
  Check if numAdults >= numChildren
  False = No Entry/No count,
  True = Let them in,
  numAdults, numChildren += adults, children
;

Function 2: leave(numAdults, numChildren)
Inputs number of Children and Adults leaving,
  If numAdults < numChildren return false,
  If children > adults return false,
  If numAdults > adults return false,
  If numChildren > children return false,
  adults, children - numAdults, numChildren
;

Function 3: occupancy()
const totalGuests = {
  adults: ,
  children:
}
Return adults and children into occupancy object
;
*/

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults;
    children += numChildren;
    return true
    // return `${numAdults} Adults & ${numChildren} Children entered.`
  }
  else {
    return false
  }
}
// console.log(enter(4, 2))
// console.log(adults, children)

function leave(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else if (numAdults > adults || numChildren > children || children - numChildren > adults - numAdults) {
    return false
  } else {
    adults -= numAdults;
    children -= numChildren;
    return true
    // return `${adults} Adults & ${children} Children have now left.`
  }
}
// console.log(leave(2, 1))
// console.log('Guests left:', adults, children)

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
console.log(occupancy())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
