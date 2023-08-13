const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';
const storageData = JSON.parse(localStorage.getItem(storageKey));

form.addEventListener('input', throttle(handlerOnInput, 500));

if (storageData) {
  form.elements.email.value = storageData.email;
  form.elements.message.value = storageData.message;
}
function handlerOnInput() {
  const userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(userData));
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(ent) {
  ent.preventDefault();
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  form.reset();
  localStorage.removeItem(storageKey);
}
