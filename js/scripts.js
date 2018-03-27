$(document).ready(function(){
  $("#sentenceTranscriber").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("input#sentence").val();
    var result = "";

    for (var i = 0; i < sentenceInput.length; i++) {

      if (sentenceInput[i] == "a" || sentenceInput[i] == "e" || sentenceInput[i] == "i" || sentenceInput[i] == "o" || sentenceInput[i] == "u") {
        result += "-";
      } else {
        result += sentenceInput[i];
      };



    };

  $("#results").append(result);
  });
});
