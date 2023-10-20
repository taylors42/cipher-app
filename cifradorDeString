const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let finalWord = "";
const criptograf = (word, rotate) => {
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
  console.log(finalWord);
};
