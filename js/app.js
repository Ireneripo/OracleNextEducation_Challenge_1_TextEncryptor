let encryptBtn = document.getElementById('encryptBtn');
let encrypted;
encryptBtn.addEventListener('click', () => {
  encrypt();
  //   showOutput();
});

// let decryptBtn = document.getElementById('decryptBtn');
// decryptBtn.addEventListener('click', () => {
//   decrypt();
// });

// Function to encrypt the text
function encrypt(inputValue) {
  // Get the text entered by the user
  inputValue = document.querySelector('.input-space').value;

  // Transform the text to lowercase
  let textToEncrypt = inputValue.toLowerCase();
  console.log(textToEncrypt);

  // Encrypt the text
  encrypted = textToEncrypt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

  //   let encrypted = textToEncrypt.replaceAll('a', 'ai').replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('o', 'ober').replaceAll('u', 'ufat');

  console.log(encrypted);

  document.querySelector('.input-space').value = '';

  showOutput();

  return encrypted;
}

function showOutput() {
  let figureArea = document.getElementById('figure');
  figureArea.style.display = 'none';

  let resultArea = document.getElementById('result-box');
  resultArea.insertAdjacentHTML('afterbegin', '<textarea autofocus class="result-box"></textarea>');

  resultArea.style.padding = '2% 0 2% 0';

  let showResult = document.querySelector('.result-box');
  showResult.value = encrypted;
}

// function decrypt() {

// }
