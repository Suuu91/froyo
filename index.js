//create prompt that let user fill in froyo flavors, seperated by comma
const userInput = prompt(`Please enter your froyo flavors, seperated by commas`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

//split the userinputs and store the inputs in an array
const flavorarray = userInput.split(`,`)

//create emtpy object
let froyoFlavor = {}

//use for loop to go through every element in array
for( let i=0; i<flavorarray.length; i++){
//use conditional statements to let froyoflavor=1 or ++
  if (!froyoFlavor[flavorarray[i]]) {
    froyoFlavor[flavorarray[i]] = 1
  } else{
  froyoFlavor[flavorarray[i]]++
  }
}

console.log(froyoFlavor)