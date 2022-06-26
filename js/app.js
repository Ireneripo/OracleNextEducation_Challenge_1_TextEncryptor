let encrypted;
let decrypted;

let encryptBtn = document.getElementById('encryptBtn');
encryptBtn.addEventListener('click', () => {
  cleanOutputArea();
  encrypt();
});

let decryptBtn = document.getElementById('decryptBtn');
decryptBtn.addEventListener('click', () => {
  cleanOutputArea();
  decrypt();
});

// Function to encrypt the text
function encrypt(inputValue) {
  // Get the text entered by the user
  inputValue = document.querySelector('.input-space').value;

  // Verify if the user entered a text
  if (inputValue.length === 0) {
    alert('Please insert text');
    let figureArea = document.getElementById('figure');
    figureArea.style.visibility = 'visible';

    let copyBtn = document.querySelector('.copy');
    copyBtn.style.visibility = 'hidden';
  } else {
    // Transform the text to lowercase
    let textToEncrypt = inputValue.toLowerCase();

    // Encrypt the text
    encrypted = textToEncrypt.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    // Clean input space
    document.querySelector('.input-space').value = '';

    // Call the showOutput function
    showOutput();

    return encrypted;
  }
}

// Function to show the result of encryption
function showOutput() {
  // Clean the the image and its caption
  let figureArea = document.getElementById('figure');
  figureArea.style.display = 'none';

  // Create a text area where we will show the encrypted text
  let resultArea = document.getElementById('result-box');
  resultArea.insertAdjacentHTML('afterbegin', '<textarea autofocus class="result-box"></textarea>');

  // Make the copy button visible again (it was hidden on page loading)
  let copyBtn = document.querySelector('.copy');
  copyBtn.style.visibility = 'visible';

  // Select element to show the encrypted text in the text area
  let showResult = document.querySelector('.result-box');

  // Verify if user is targeting encrypt or decrypt button and send the right answer
  document.addEventListener('click', (e) => {
    let targetBtn = e.target;

    if (targetBtn.classList.contains('encrypt')) {
      showResult.value = encrypted;
    } else if (targetBtn.classList.contains('decrypt')) {
      showResult.value = decrypted;
    }
  });
}

// Function to clean the output area in case there is already some encrypted text
function cleanOutputArea() {
  if (encrypted) {
    let outputArea = document.querySelector('.result-box');
    outputArea.style.display = 'none';
  }
}

// Function to decrypt an encrypted text
function decrypt(inputValue) {
  // Get the text entered by the user
  inputValue = document.querySelector('.input-space').value;

  // Verify if the user entered a text
  if (inputValue.length === 0) {
    alert('Please insert text');
    let figureArea = document.getElementById('figure');
    figureArea.style.visibility = 'visible';

    let copyBtn = document.querySelector('.copy');
    copyBtn.style.visibility = 'hidden';
  } else {
    // Transform the text to lowercase
    let textToDencrypt = inputValue.toLowerCase();

    // Decrypt the text
    decrypted = textToDencrypt.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    // Clean input space
    document.querySelector('.input-space').value = '';

    // Call the showOutput function
    showOutput();

    return decrypted;
  }
}

// Function to copy the result of encryption/decryption
// Call the function
copyResult();
function copyResult() {
  // Find target button
  let copyBtn = document.querySelector('.copy');

  // Listen the click event and copy/paste text
  copyBtn.addEventListener('click', () => {
    let textToCopy = document.querySelector('.result-box').value;
    navigator.clipboard.writeText(textToCopy);
    navigator.clipboard.readText().then((textToCopy) => (document.querySelector('.input-space').value = textToCopy));
  });
}
