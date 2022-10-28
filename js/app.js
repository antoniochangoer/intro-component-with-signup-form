const inputFields = document.querySelectorAll('input');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');

const checkRequired = (fields) => {
    fields.forEach( field => {
      if (field.value.trim() === '') {
        toggleError(field);
      } else {
        console.log('success ' + field.name);
      }
    });
  }


const checkMailformat = (e) => {
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailFormat.test(e.value.trim())) {
        console.log('good email')
    } 
    else {
        toggleError(email);
    }
}

const toggleError = (el) => {
    el.classList.add('warning');
    el.parentElement.classList.add('error');
    el.nextElementSibling.classList.add('warning-msg');
}

const resetFields = () => {
    for (const field of inputFields) {
        field.classList.remove('warning');
        field.parentElement.classList.remove('error');
        field.nextElementSibling.classList.remove('warning-msg');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resetFields();
    checkRequired(inputFields);
    checkMailformat(email);
});