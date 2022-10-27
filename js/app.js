const email = document.querySelector('#email');
const form = document.querySelector('.form');
const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(email.value.match(emailFormat) && email.value !== '') {
        // set green styling
    } else {
        // set red border class
    }
});