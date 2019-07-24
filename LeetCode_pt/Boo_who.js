// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    console.log(typeof bool);
    if(typeof bool === 'boolean') {
      return true;
    } else {
      return false;
    }
  
  }
  
  booWho(null);