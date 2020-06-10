$(document).ready(function() {
  //business logic

  // Split string into an array of words
  function wordArray(string) {
    return string.split(" ");
  }

  // Split each element of an array of words into an array of letters
  function letterArray(array) {
    for (i=0; i < array.length; i++){
      array[i].split("");
    };
    return array
  };
  

  // check if first character of an Array is a vowel: return boolean
  function isVowel(array, vowels){
    let vowelMatch = false;
    for (v = 0; v < vowels.length; v++){
      if (array[0] === vowels[v]) {
        vowelMatch = true;
        break;
      };
    };
    return vowelMatch
  };

  // Add "way" to the end of an Array
  function firstVowelMove(array){
    return array.join("") + "way"
  }

  // Move first letter of a string to the end, then append "ay"
  function firstConsMove(array){
    array.push(array[0]);
    return array.slice(1,(array.length + 1)).join("") + "ay";
  };

  //User Interface
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    const inputEnglish = $("#inputEnglish").val();
    const wordArray = inputEnglish.split("")
    const vowels = ["a", "e", "i", "o", "u", "y"];

    const output = firstConsMove(wordArray);
    $(".pigLatinOutput").text(output)
    $(".output").show()
    
  });
});
