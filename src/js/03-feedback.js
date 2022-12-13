import throttle from 'lodash.throttle';
const feedbform = document.querySelector(".feedback-form");

feedbform.addEventListener('input', throttle(localValue, 500));

const email = document.querySelector('[name="email"]')
const message = document.querySelector('[name="message"]')

function localValue() {
  const formValue = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}
// перевірка чи є вже заповнені поля
function getLocalValue() {
  let  localformValue = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (localformValue !== null) {
        email.value = localformValue.email;
        message.value = localformValue.message;
        // console.log(email.value , message.email);
    }
}
getLocalValue()

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
feedbform.addEventListener('submit',submitValue)

function submitValue(ev) {
ev.preventDefault();
    
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}

