// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

// 延伸題- 將所有符合條件的列出來

function findElement(arr, func) {
    let num = 0;

    for(var i = 0; i < arr.length; i++) {
      num = arr[i];
 
      if (func(num) >0) {
        return num;
      }
    }

    return undefined;
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);


// 延伸題- 將所有符合條件的列出來

  function findElement(arr, func) {
    let num = 0;
    var s = [];
    for(var i = 0; i < arr.length; i++) {
      num = arr[i];
 
      if (func(num) >0) {
        s.push(num);
      }
    }
    console.log(s);
    // return undefined;
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);