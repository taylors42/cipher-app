let isPT = true;
function translatePage() {
  let button = document.querySelector(".translate");
  if (isPT) {
    button.textContent = "portugues";
    document.querySelector(".top-title").textContent = "Cifrador como usar";
    document.querySelector(".title").textContent = "Explicando o Cifrador";
    document.querySelector(".text").textContent =
      "Basicamente se trata de um codificador/decodificador de cifra de césar, que é um método simples de criptografia por substituição, onde cada letra em um texto é deslocada por um número fixo de posições no alfabeto. Isso cria uma forma de mensagem codificada que pode ser decifrada conhecendo o deslocamento. O método foi nomeado em referência ao líder militar romano Júlio César. Logo caso você queira cifrar as letras (ABC), com o valor de rotação em 1, elas se tornaram (BCD), e com o valor de rotação em -1, serão decodificados, virando  assim, ABC. Para dúvidas ou só queira entrar em contato";
    isPT = false;
  } else {
    button.textContent = "english";
    document.querySelector(".top-title").textContent = "How use the Cipher";
    document.querySelector(".title").textContent = "Explaining the Cipher";
    document.querySelector(".text").textContent =
      "This is basically an encoder/decoder for the Caesar cipher, which is a simple substitution method of cryptography. In this method, each letter in a text is shifted by a fixed number of positions in the alphabet. This creates a form of encoded message that can be deciphered by knowing the shift value. The method was named in reference to the Roman military leader Julius Caesar. So, if you want to encrypt the letters (ABC) with a rotation value of 1, they will become (BCD), and with a rotation value of -1, they will be decoded back to ABC. For questions or if you just want to get in touch";
    isPT = true;
  }
}
