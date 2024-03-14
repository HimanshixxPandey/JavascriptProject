const nameError=document.getElementById('name-error');
const phoneError=document.getElementById('phone-error');
const emailError=document.getElementById('email-error');
const messageError=document.getElementById('message-error');
const submitError=document.getElementById('submit-error');


function validateName() {
    const name=document.getElementById('contactname').value;
    if(name.length==0) {
        nameError.innerHTML='Name is required';
        return false;
    }
    if(name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML='Write FullName';
        return false;

    } 
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    const email = document.getElementById('contactemail').value;

    
    if (email.trim().length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid email format';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone() {
    const phone = document.getElementById('contactphone').value;

    if (phone.trim().length === 0) {
        phoneError.innerHTML = 'Contact number is required';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML='Phoneno should be 10 digits';
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        phoneError.innerHTML = 'Phone number should be  digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage() {
    const message = document.getElementById('contactMessage').value;
    let req=30;
    var left=req-message.length;

    if (left>0) {
        messageError.innerHTML = left+'more character is required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm() {
    if (!validateEmail() || !validateName() || !validatePhone() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
