// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var group = [];
    while(arr.length >0) {
      group.push(arr.slice(0,size));
      arr =  arr.slice(size);
    }
    // arr = arr.slice(0,size);
    return group;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 3);
  
  var letters = ["a", "b", "c", "d"];
  // console.log(letters.slice(0,2)); //[ 'a', 'b' ]
  // console.log(letters.slice(2)); // [ 'c', 'd' ]


//   solution 2 
// (a % size !== size - 1)
function chunkArrayInGroups(arr, size) {

    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) {
        console.log('****');
        console.log(arr[a]);
        temp.push(arr[a]);
        console.log(temp);
      }

      else {
        temp.push(arr[a]);
        console.log(arr[a]);
        console.log(temp);
        result.push(temp);
        temp = [];
      }
    }

    if (temp.length !== 0)
      result.push(temp);
    return result;
  }

chunkArrayInGroups(["a", "b", "c", "d","e","f","g","h"], 5);