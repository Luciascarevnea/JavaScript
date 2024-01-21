  // swapping- cand schimb cu locul doua sau mai multe valori
  // triangle algo

  // ---------------------------
  //driverSeat = "John"
  //passengerSeat = "Marry"

  //driverSeat = "Marry"
  //passengerSeat = "John"

  //temp = driverSeat
  //driverSeat = passengerSeat
  //passengerSeat = temp

  // HW1: try the reverse order & redraw the diagram
   
  driverSeat = "Marry"
  passengerSeat = "John"

  driverSeat = "John"
  passengerSeat = "Marry"

  temp = driverSeat
  driverSeat = passengerSeat
  passengerSeat = temp

/*
      "Marry"              "John"
  driverSeat <------- passengerSeat
         \              /
          \            /
           \          /
            \        /
             \      /
              v    /
              temp
              "Marry"


*/



  /*
      "John"              "Marry"
  driverSeat <------- passengerSeat
         \              /
          \            /
           \          /
            \        /
             \      /
              v    /
              temp
              "John"
  
 */



 // HW2:             
 // index:        0       1
 //               v       v
 let seats = [ "Marry", "John" ]  // <--- array of strings

 temp     = seats[0]
 seats[0] = seats[1]
 seats[1] = temp

 //temp     = seats[0]
 //seats[0] = seats[1]
 //seats[1] = temp

 // HW2: same homework -> reverse
 // HW3: ce a fi daca am avea de schimbat cu locul persoanele:
 // let seats = [ "John", "Marry", "Peter", "Jane"]
 //                          ^                ^
 //HW3:
    let seats = [ "John", "Marry", "Peter", "Jane"]   
    temp = seats [1]
    seats[1] = seats[3]
    seats[3] = temp                