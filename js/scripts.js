$(document).ready(function() {
  //business logic

  // Split string into an array of words
  function wordArray(string) {
    return string.split(" ");
  }

  // index of first Vowel
  function firstVowelIndex(string){
    for (i=0;i<string.length;i++){
      letter = string.charAt(i);
      if(isVowel(letter, vowels)){ 
        return i;
      };
    };
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
  };

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
