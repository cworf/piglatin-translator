var translate = function(words) {
  var sentence = words.map(function(word){
    var letters = word.split("");
    //begin word translate
    var vowelEx = /[aeiouy]/g;
    var numberEx =/\d/;
    if (letters[0] === "y") {
      letters.push(letters.shift());
      letters.push("ay");
      letters = letters.join("");
      return letters;
    } else if (vowelEx.test(letters[0])) {
      letters.push("way");
      letters = letters.join("");
      return letters;
    } else if (numberEx.test(letters[0])) {
      letters = letters.join("");
      return letters;
    } else {
      var i = 0;
      while ((!vowelEx.test(letters[0])) && i < letters.length) {
        i++;
        if ((letters[0] + letters[1]) === "qu"){
          letters.push(letters.shift());
        }
        letters.push(letters.shift());
      };
      letters.push("ay");
      letters = letters.join("");
      return letters;
    }; //end word translate

  });
  sentence.join(" ")
  return sentence;
};

$(function(){
  $("#pig-latin-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#english").val().split(" ");
    var pigLatin = translate(userInput);

     alert(pigLatin.join(" "));
  });

});
