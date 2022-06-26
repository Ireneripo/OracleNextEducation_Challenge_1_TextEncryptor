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
