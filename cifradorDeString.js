const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let word = document.querySelector("#cript-text").value;
let textt = document.querySelector("#cript-text");
let rotate = document.querySelector("#rotate").value;
const button = document.querySelector("button");
rotate = rotate * 1;
let finalWord;
button.addEventListener("click", function () {
  const final = criptograf(word, rotate);
  textt.value = final;
});

function criptograf(word, rotate) {
  finalWord = "";
  word.toLowerCase();
  if (word === " ") {
    word += " ";
  }
  if (rotate < 0) {
    rotate = rotate / -1;
    rotate = 26 - rotate;
  }

  for (index of word) {
    if (alphabet.indexOf(index) + rotate >= 26) {
      finalWord = finalWord + alphabet[alphabet.indexOf(index) + rotate - 26];
    } else {
      finalWord = finalWord + alphabet[alphabet.indexOf(index) + rotate];
    }
  }
  return finalWord;
}
