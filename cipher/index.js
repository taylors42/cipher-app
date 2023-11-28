const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const button = document.querySelector(".codedecode");
let isPT = true;

button.addEventListener("click", () => {
  let word = document.querySelector("#cript-text").value;
  let rotate = document.querySelector("#number-rotate");

  console.log(word);
  console.log(rotate);
  word = word.toLowerCase();
  word = word.split("");

  let finalWord = "";
  if (word === " ") {
    word += " ";
  }

  rotate = rotate.value * 1;
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
  document.querySelector("#cript-text").value = finalWord;
});

let select = document.querySelector("#number-rotate");

for (let i = -25; i <= 26; i++) {
  select.innerHTML += `<option value="${i}">${i}</option>`;
}

function translatePage() {
  let button = document.querySelector(".translate");
  if (isPT) {
    button.textContent = "portugues";
    document.querySelector(".top-title").textContent = "Cifrador";
    document.querySelector(".title").textContent =
      "Digite para Codificar/Decodificar";
    document.querySelector(".codedecode").style.width = "180px";
    document.querySelector(".codedecode").textContent = "codificar/decodificar";
    document.querySelector("#cript-text").placeholder =
      "Escreva o codigo para codificar ou decodificar";
    document.querySelector(".rotateText").textContent =
      "Escreva quantas vezes a cifra rodara";
    document.querySelector(".help").textContent = "Como usar o Cifrador";
    isPT = false;
  } else {
    button.textContent = "english";
    document.querySelector(".top-title").textContent = "The Cipher";
    document.querySelector(".codedecode").style.width = "140px";
    document.querySelector(".title").textContent = "Type to Code/Decode";
    document.querySelector(".codedecode").textContent = "code/Encode";
    document.querySelector("#cript-text").placeholder =
      "Write the text to code or decode";
    document.querySelector(".rotateText").textContent =
      "Write the rotation number of the cipher";
    document.querySelector(".help").textContent = "How use the Cipher";
    isPT = true;
  }
}
