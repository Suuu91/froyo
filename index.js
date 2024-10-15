//create prompt that let user fill in froyo flavors, seperated by comma
const userInput = prompt(`Please enter your froyo flavors, seperated by commas`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

//split the userinputs and store the inputs in an array
const flavorarray = userInput.split(`,`)

//create emtpy object
let froyoFlavor = {}

//use for loop to go through every element in array, and set the elements as the key of the object
for( let i=0; i<flavorarray.length; i++){
  froyoFlavor[flavorarray[i]] = 0
}

//go through the elemnts in array again and add value by 1 each time the key duplicate
for( let i=0; i<flavorarray.length; i++){
  froyoFlavor[flavorarray[i]]++
}

console.log(froyoFlavor)