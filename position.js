var words = process.argv.slice(2).join(" ");

function charPosition(input){
  var output ={};
  var keys = [];
  //change input into lower case
  var string = input.toLowerCase();
  // looping through input string
  for (let i = 0; i < string.length; i++){
    keys = Object.keys(output);
    var exists = false;
    //ignoring " "
    if (string[i] === " "){
      exists = true;
    }

    //checking if letter already exists
    //looping through the keys of output
    for(let j of keys){
      if (string[i] === j) {
        output[j].push(i);
        exists = true;
      }
    }
    //if letter does not exist in output, add to keys
    if (exists === false){
        output[string[i]] = [i];
      }
  }
  return output;
}
console.log (charPosition(words));
// console.log (charPosition("lighthouse in the house"));