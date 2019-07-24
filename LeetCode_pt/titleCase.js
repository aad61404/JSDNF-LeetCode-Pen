// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence/
//----------------------------
// solution 1

function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    // console.log(words);
    // for (word of words) {
    //   console.log(word.toUpperCase());
    // }
    for (var i=0; i<words.length; i++) {
      // console.log(words[i]);
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    // console.log(words);
    words = words.join(" ");
    return words;

}

titleCase("I'm a little a tea pot");

// var name = "Jonathan";
// console.log(name.slice(1));  // onathan

//----------------------------
// solution 2

// function titleCase(str) {
//   var titled = str.toLowerCase().split(" ").map(function(elem){
//     return elem[0].toUpperCase() + elem.slice(1);
//   })

//   return titled.join(" ");
// }

// titleCase("I'm a little a tea pot");