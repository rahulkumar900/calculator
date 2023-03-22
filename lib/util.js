const titleCase = (sentence) => {
  //split the above string into an array of strings
  //whenever a blank space is encountered

  const arr = sentence.split(" ");

  //loop through each element of the array and capitalize the first letter.

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  let str2 = arr.join(" ")
  return str2;
};



const sentenceCase = (text) => {
  return text.replace(text[0], text[0].toUpperCase());
};

export {titleCase, sentenceCase};