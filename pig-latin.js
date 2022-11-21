let args  = process.argv.slice(2);
let newString = "";

for (let i = 0; i < args.length; i++) {
  
  for (let j = 1; j < args[i].length; j++) {
    newString += args[i][j];
     
  } newString += args[i][0] + "ay ";
  
   
}console.log(newString);
