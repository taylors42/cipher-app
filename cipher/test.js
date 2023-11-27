function verificador(arrayComFrase, frase) {
  for (let char of frase) {
    if (!arrayComFrase.includes(char)) {
      return false;
    }
  }
  return true;
}

arr = ["o", "l", "a", " ", "j", "o", "a", "o"];
console.log(verificador(arr, "olajoao"));
