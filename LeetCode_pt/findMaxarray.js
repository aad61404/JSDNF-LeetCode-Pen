// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/

function largestOfFour(arr) {
  // you can do this!
  var maxes = [];
  for (var i=0; i< arr.length; i++){
    var tempMax = arr[i][0];
    // console.log(tempMax);
    for (var k=0; k< arr[i].length; k++){
      // console.log(arr[i][k]);
      var currentElement = arr[i][k];
      if(currentElement >= tempMax){
        tempMax = currentElement; 
      }
    }
    maxes.push(tempMax);
    // console.log(arr[i]);
  }
  return maxes;
}

// largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);
// [5,27,38, 1001]

//----------------------------
// solution 2

// function largestOfFour(arr) {
//   // you can do this!
//   var maxes = [0,0,0,0];
//   for (var i=0; i< arr.length; i++){
//     for (var k=0; k< arr[i].length; k++){
//       var currentElement = arr[i][k];
//       if(currentElement >= maxes[i]){
//         maxes[i] = currentElement; 
//       }
//     }
//   }
//   return maxes;
// }

// largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);

//----------------------------
// solution 3
function findMax(arr) {
    // var max = 0;
    var max = arr[0];
    for (var i =0; i<arr.length; i++) {
      if(arr[i] > max) max = arr[i];
    }
    return max;
  }
  findMax([13,27,18,26]);
  function largestOfFour(arr) {
    var maxes = [];
    for (var i=0; i<arr.length; i++) {
      var innerMax = findMax(arr[i]);
      // console.log(innerMax);
      maxes.push(innerMax);
    }
    return maxes;
  }
  largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);