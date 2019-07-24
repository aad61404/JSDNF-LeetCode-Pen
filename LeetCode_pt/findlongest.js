// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string/
function findLongestWordLength(str) {
    var words = str.split(" ");
  // console.log(words);
  var longest = "";

  for (var word of words) {
      // console.log(word);
      if(word.length > longest.length) longest = word;
      // longest = word.length;
  }
   console.log(longest);
return longest.length;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");