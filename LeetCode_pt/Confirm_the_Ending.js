function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // console.log(str);  // Bastian
    // console.log(str.length);  // 7 
  
    // console.log(target); // n
    // console.log(target.length); // 1 
    // var a  = str.slice(2);
    // console.log(a); // stain
  
    // console.log(str.substr(2)); // stian
    // console.log(str.substr(-2)); // an
    if(str.substr(-target.length) === target) {
       console.log(str.substr(-target.length));
       return true;
    } 
  
    return false ;
  }
  
  confirmEnding("Bastian", "n");
  
  