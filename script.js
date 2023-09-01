const vulgarWords = ["arse","arsehead","arsehole","ass","asshole","bastard","bitch","bloody","bollocks","brotherfucker","bugger","bullshit","child-fucker","Christ on a bike","Christ on a cracker","cock","cocksucker","crap","cunt","damn","damn it","dick","dickhead","dyke","fatherfucker","frigger","fuck","goddamn","godsdamn","hell","holy shit","horseshit","in shit","Jesus Christ","Jesus fuck","Jesus H. Christ","Jesus Harold Christ","Jesus, Mary and Joseph","Jesus wept","kike","nigga","nigra","pigfucker","piss","prick","pussy","shit","shit ass","shite","sisterfucker","slut","son of a whore","son of a bitch","spastic","sweet Jesus","turd","twat","wanker"]; // Placeholder list of vulgar words
document.getElementById("checkButton").addEventListener("click", function() {
  const textInput = document.getElementById("textInput").value.toLowerCase();
  const regex = new RegExp("\\b(" + vulgarWords.join("|") + ")\\b", "gi");

  const containsVulgarWord = regex.test(textInput);

  const resultElement = document.getElementById("result");
  if (containsVulgarWord) {
    resultElement.textContent = "Contains vulgar words.";
    resultElement.classList.add("vulgar");
  } else {
    resultElement.textContent = "Doesn't contain vulgar words.";
    resultElement.classList.remove("vulgar");
  }

  const resultContainer = document.querySelector(".result-container");
  resultContainer.classList.remove("hidden");
  resultContainer.classList.add("show");
});
