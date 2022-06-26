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
