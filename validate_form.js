/* eslint-disable linebreak-style */
const form = document.querySelector('form');
// eslint-disable-next-line linebreak-style
const userName = document.querySelector('.username');
const userMail = document.querySelector('.user_mail');
const commentText = document.querySelector('.comment_text');
function setError(inputValue, errorMessage) {
  const inputGuide = inputValue.parentElement;
  const errorDisplay = inputGuide.querySelector('.error');
  errorDisplay.innerText = errorMessage;
  inputGuide.classList.add('error');
  inputGuide.classList.remove('success');
}
function setSuccess(element) {
  const inputGuide = element.parentElement;
  const errorDisplay = inputGuide.querySelector('.error');

  errorDisplay.innerText = '';
  inputGuide.classList.add('success');
  inputGuide.classList.remove('error');
}

function isValidEmail(email) {
  const regexValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexValidate.test(String(email).toLowerCase());
}

function updateInput() {
  const usernameValue = userName.value.trim();
  const emailValue = userMail.value.trim();
  const commentValue = commentText.value;

  if (usernameValue === '') {
    setError(userName, 'Username is required');
  } else {
    setSuccess(userName);
  }

  if (emailValue === '') {
    setError(userMail, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(userMail, 'Provide a valid email address');
  } else {
    setSuccess(userMail);
  }

  if (commentValue.length === 0) {
    setError(commentText, 'Type your comment');
  } else if (commentValue.length < 30 || commentValue.length > 512) {
    setError(commentText, 'Add some comments');
  } else {
    setSuccess(commentText);
  }
}

form.addEventListener('submit', (e) => {
  if (userName.value === '') {
    e.preventDefault();
  } else if (userMail.value === '') {
    e.preventDefault();
  } else if (!isValidEmail(userMail.value)) {
    e.preventDefault();
  } else if (commentText.value.length < 30) {
    e.preventDefault();
  }
  updateInput();
});
