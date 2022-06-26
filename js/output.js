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
