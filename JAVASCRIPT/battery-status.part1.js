// IN: Our script reads the battery status data (in %)
// FACT: the factory settings indicate how long does a % last
// OUT: calculate how many minutes our device has left

// variables
// camelCase (without prefixes: var, let, const)
// name: a..zA..Z0..9_

 
baterryCharge = 70            // % <--- variable

FULL_BATTERY = 100           //% - fully charged battery
chargePercentInMinutes = 10 //1% - 10 minutes

etWorkInMinutes = baterryCharge * chargePercentInMinutes
