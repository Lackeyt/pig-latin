$(document).ready(function() {
  //business logic

  const vowels = ["a", "e", "i", "o", "u", "y"];

  // Split string into an array of words
  function wordArray(string) {
    return string.split(" ");
  }

  // index of first Vowel
  function firstVowelIndex(string){
    if (string.charAt(0) === "y"){
      for (i=1;i<string.length;i++){
        let letter = string.charAt(i);
        if(isVowel(letter, vowels)){ 
          return i;
        };
      };
    } else {
        for (i=0;i<string.length;i++){
        let letter = string.charAt(i);
        if(isVowel(letter, vowels)){ 
          return i;
        };
      };
    };
  };
  
  // check if an inputted string is a vowel: return boolean
  function isVowel(string, vowels){
    let vowelMatch = false;
    for (v = 0; v < vowels.length; v++){
      if (string[0] === vowels[v]) {
        vowelMatch = true;
        break;
      };
    };
    return vowelMatch
  };

  // check if first vowel is a U preceeded by a Q
  function isFirstVowelQU(string) {
    for (i=0;i<string.length;i++){
      let letter = string.charAt(i);
      if(letter === "u" && string.charAt(i-1) === "q"){ 
        return true;
      };
    };
  }

// Single Word Output
  function translator(array){

    let sentence = [];
    array.forEach(function(element){
      let vowelPoint = firstVowelIndex(element);
      let wordHalfOne = element.slice(0, vowelPoint);
      let wordHalfTwo = element.slice(vowelPoint)  
      if (isFirstVowelQU(element) === true){
        sentence.push(element.slice(vowelPoint + 1) + element.slice(0, vowelPoint + 1) + "ay");
      } else if (vowelPoint > 0) {
        sentence.push(wordHalfTwo + wordHalfOne + "ay");
      } else if (vowelPoint === 0){  
        sentence.push(element + "way");
      };
    });
    //for (i=0; i < array.length; i++) {
    //  let vowelPoint = firstVowelIndex(array[0]);
    //  let wordHalfOne = array[0].slice(0, vowelPoint);
    //  let wordHalfTwo = array[0].slice(vowelPoint);
//
    //  if (isFirstVowelQU(array[0]) === true){
    //    sentence.push(array[0].slice(vowelPoint + 1) + array[0].slice(0, vowelPoint + 1) + "ay");
    //  } else if (vowelPoint > 0) {
    //    sentence.push(wordHalfTwo + wordHalfOne + "ay");
    //  } else if (vowelPoint === 0){  
    //    sentence.push(array[0] + "way");
    //  };
    //};
    return sentence.join(" ");
  };















  //User Interface
  

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    const inputEnglish = $("#inputEnglish").val();
    const wordArray = inputEnglish.split(" ")
    const vowels = ["a", "e", "i", "o", "u", "y"];

    const output = translator(wordArray)
    $(".pigLatinOutput").text(output)
    $(".output").show()
    
  });
});
