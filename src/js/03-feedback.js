{
  /* <form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>; */
}
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailField = document.querySelector('[name="email"]');
const textField = document.querySelector('[name="message"]');
const localStorageKey = 'feedback-form-state';
let dataObj = {};

onPageLoad();
feedbackForm.addEventListener('input', throttle(inputHandler, 500));
feedbackForm.addEventListener('submit', formSubmitHandler);

function onPageLoad() {
  const localStorageObject = localStorage.getItem(localStorageKey);
  const parsedObject = JSON.parse(localStorageObject);
  if (!parsedObject) {
    return;
  }
  if (parsedObject.email) {
    emailField.value = parsedObject.email;
  }
  if (parsedObject.message) {
    textField.value = parsedObject.message;
  }
  dataObj = parsedObject;
  console.log('on load', dataObj);
}

function inputHandler() {
  dataObj = {
    email: emailField.value,
    message: textField.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(dataObj));
  console.log('just input', dataObj);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (emailField.value.length !== 0 && textField.value.length !== 0) {
    console.log('on submit', dataObj);
    evt.target.reset();
    localStorage.clear();
  } else {
    evt.target.reset();
    return alert('All the fields should be filled');
  }
}
