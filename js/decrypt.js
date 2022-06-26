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
