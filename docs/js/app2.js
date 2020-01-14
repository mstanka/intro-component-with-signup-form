const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const button = document.getElementById('submit-button');
const input = document.querySelectorAll('input');
const placeholder = document.querySelectorAll('input[placeholder]');

let fieldInput = [firstName.value, lastName.value, email.value, password.value];
const nameInput = ["First Name", "Last Name", "Email Address", "Password"];
const allInput = [firstName, lastName, email, password];

form.addEventListener('submit', submitEmail);

// submit email if valid input
function submitEmail(e) {
  checkInput(fieldInput);
  
  if (!validateEmail(fieldInput[2])) {
    //show error 
    showError("Looks like this is not an email");
  }
  e.preventDefault();
}

// check input
function checkInput (fieldInput) {
  for (let i = 0; i < fieldInput.length; i++) {
    if (fieldInput[i].trim() === "") {
    //show error
    showError("${nameInput[i]} cannot be empty");
    addErrorIcon("");
    allInput[i].style.borderColor = "hsl(0, 100%, 74%)";
    }
  }
}

// validate email with RegEx
function validateEmail(emailField) {
  let regEx = /\S+@\S+\.\S+/;
  return regEx.test(emailField);
}

// show error
function showError(error) {
  // create a div
  const errorDiv = document.createElement('div');

  // add class
  errorDiv.className = 'alert';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above button
  form.insertBefore(errorDiv, allInput[i]);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);  
}

function addErrorIcon () {
  placeholder.innerHTML = '<svg class="error-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12" /><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" /><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" /></g></svg>';
}

// clear error
function clearError() {
  document.querySelector(".alert").remove();
}