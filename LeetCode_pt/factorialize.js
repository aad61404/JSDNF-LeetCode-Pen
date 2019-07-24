// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/
function factorialize(num) {
    var x = 1;
    for(var i=1; i<=num;i++){
      x = x * i;
      console.log(x);
      }
  
    return x;
  }
  
  factorialize(5);