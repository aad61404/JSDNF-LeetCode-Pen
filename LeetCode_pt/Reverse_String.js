// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string/


function reversestring(str) {
    // var strArr = str.split("");
    // console.log(strArr);
    // var reverseStrArray = strArr.reverse();
    // var reversedString = reverseStrArray.join("");
    // return reversedString;
    var final = "";
    for(var i= str.length-1; i>=0; i--) {
      final += str[i];
     
    }
     return(final);
  }
  
  reversestring('HELLO');
  
  // var str = 'hello';
  // for (var i=str.length-1; i>=0; i--) {
  //   console.log(str[i]);
  // }
  

  // function reverseString(str) {
  //   // console.log(str);
  //   var reverse = "";
  //   for(var i = str.length-1; i>=0; i-- ){
  //     // console.log(str[i]);
  //     reverse = reverse + str[i];
  //   }
  //   return reverse;
  
  // }
  
  // reverseString("hello");