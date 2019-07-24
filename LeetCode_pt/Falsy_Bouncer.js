// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var truthies = [];

    for (var elem of arr) {
        if(elem) truthies.push(elem);
    }
    return truthies;
  }
  
  bouncer([7, "ate", "", false, 9]);

  /*
if ([] == false) // <-- truthy, will run code in if-block

if ([]) // <-- truthy, will also run code in if-block

if ([] == true) // <-- falsy, will NOT run code in if-block

if (![]) // <-- falsy, will also NOT run code in if-block

  */
//  for of 