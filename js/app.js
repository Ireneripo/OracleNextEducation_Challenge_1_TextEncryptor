let encryptBtn = document.getElementById('encryptBtn');
encryptBtn.addEventListener('click', () => {
  encrypt();
});

// let decryptBtn = document.getElementById('decryptBtn');
// decryptBtn.addEventListener('click', () => {
//   decrypt();
// });

function encrypt(inputValue) {
  inputValue = document.querySelector('.input-space').value;
  let textToEncrypt = inputValue.toLowerCase();
  console.log(textToEncrypt);

  let encrypted = textToEncrypt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

  console.log(encrypted);
  return encrypted;
}

// function decrypt() {

// }
