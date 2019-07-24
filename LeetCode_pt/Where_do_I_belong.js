function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b) {
      return a - b;
    });
    // console.log(arr);
    // arr = arr.sort();
    // return arr.sort();
    for(var i=0; i<arr.length; i++) {
      if (num <= arr[i]) {
        return i;
      } 
    }
    return arr.length;
  }
  
  getIndexToIns([60, 40, 80 ,70], 50);

  // var things = ["a", "b" , "c", 19,2];
  // console.log(things.sort()) // [2,9, "a","b","c]"