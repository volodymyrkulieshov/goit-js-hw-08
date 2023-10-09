import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const emailInput = form[(name = 'email')];
const textArea = form[(name = 'message')];

savedStorageValue();

form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', throttle(handlerInput, 500));

function handlerSubmit(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || textArea.value === '') {
    return;
  }
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedText);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handlerInput(evt) {
  const allData = {
    email: emailInput.value,
    message: textArea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  allData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function savedStorageValue() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedText);

  if (savedText) {
    if (savedText.message) {
      textArea.value = savedText.message;
    }
    if (savedText.email) {
      emailInput.value = savedText.email;
    }
  }
}
