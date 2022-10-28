const inputFields = document.querySelectorAll('input');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resetFields();
    
    for (const field of inputFields) {
        if(field.value === '' || field.value === null) {
            field.classList.add('warning');
            field.parentElement.classList.add('error');
            field.nextElementSibling.classList.add('warning-msg');
        } else {
            checkMailformat();
        }
    }

});

const checkMailformat = () => {
    console.log(emailFormat.test(email.value));
    if (emailFormat.test(email.value)) {
        resetFields();
    } 
    else {
        email.classList.add('warning');
        email.parentElement.classList.add('error');
        email.nextElementSibling.classList.add('warning-msg');
    }
}

const resetFields = () => {
    for (const field of inputFields) {
        field.classList.remove('warning');
        field.parentElement.classList.remove('error');
        field.nextElementSibling.classList.remove('warning-msg');
    }
}