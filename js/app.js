let encrypted;
let decrypted;

(function () {
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
})();
