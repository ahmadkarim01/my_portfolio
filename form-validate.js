const form = document.querySelector('form');
const email = form.elements.email;
const displayMessage = document.querySelector('#emailMessage');

/**
 * Function
 */

function validateEmail() {
  let reg = /[A-Z]/g;
  if(reg.test(email.value)) {
    email.style.borderColor = 'red';
    displayMessage.innerText = 'remove all charactere in UPPERCASE please';
    displayMessage.style.color = 'red';
    return false;
  }
  if (!(reg.test(email.value))) {
    email.style.border = 'none';
    displayMessage.style.color = 'none';
    displayMessage.innerText = '';
    return true;
  }
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail()) {
    form.submit();
  }
});