function truncateString(str, num) {
    // Clear out that junk in your trunk
    // console.log(str.slice(8)); // a-tasket A green and yellow basket
    // console.log(str.slice(0 , 8)); // A-tisket
  
    if(str.length <= num) {
      return str;
    }
    str = str.slice(0, num) + '...';
    return str;
  }