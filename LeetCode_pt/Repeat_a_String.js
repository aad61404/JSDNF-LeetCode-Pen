// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

// function repeatStringNumTimes(str, num) {
//     // repeat after me
//     if(num < 0 ) {
//       return "";
//     }
//     return str.repeat(num);
//   }
  
//   repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
    // repeat after me
    var final = "";
    for(var i=0; i<num;i++){
        final = final + str;
    }
    return final;
  }
  
  repeatStringNumTimes("abc", 3);