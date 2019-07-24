// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/
function destroyer(arr) {
    // Remove all the values
    var args = Array.from(arguments);
    // console.log(args);
    args.splice(0,1);
    var targets = args;
    // console.log(targets);
    var result = [];
  
    // return arr.filter(function(num) {
    //   return targets.indexOf(num) === -1;
    //   // return !targets.includes(num);
    // });
  
    for(var num of arr) {
      if(targets.indexOf(num) === -1) {
        result.push(num);
      }
    }
    return result;
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  
  // function viewArgs() {
  //     return arguments;
  // }
  // console.log(viewArgs([3, 5, 1, 2, 2], 2, 3, 5));    
  // console.log(viewArgs([2, 3, 2, 3, 2, 3]));   
  // console.log(viewArgs(3,2,1,"life the universe and all"));
  // console.log(viewArgs("Douglas","Adams"));
  // console.log(viewArgs(["hello", "World!", 'and', 'thanks', 'for','all','the', 'fish'], "dolphines", 42)); 