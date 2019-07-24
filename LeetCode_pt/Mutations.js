// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();
    for(var i=0; i<secondWord.length; i++) {
        if(firstWord.indexOf(secondWord[i]) === -1) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);

  var greeting = "hello";
  console.log(greeting.indexOf("e")); // 1
  console.log(greeting.indexOf("a")); // -1
  console.log(greeting.indexOf("e" === 1)); // true
  console.log(greeting.indexOf("a" === 1)); // false