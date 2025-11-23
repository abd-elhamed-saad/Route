// ========== Validation Functions ==========

// Email validation
function emailRegexFunc(value) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(value);
}

// Name validation (letters only)
function nameRegexFunc(value) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(value);
}

// Phone validation (10 or 11 digits)
function phoneRegexFunc(value) {
    const phoneRegex = /^(\d{10}|\d{11})$/;
    return phoneRegex.test(value);
}

// Age validation (18-60)
function ageRegexFunc(value) {
    const ageRegex = /^(1[8-9]|[2-5][0-9]|60)$/;
    return ageRegex.test(value);
}

// Password validation (min 8 chars, 1 letter, 1 number)
function passRegexFunc(value) {
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passRegex.test(value);
}

// Check all validations and enable/disable submit button
function checkAllValidation() {
    const submitBtn = document.getElementById('submitBtn');
    if (nameRegexFunc(nameInput.value) && emailRegexFunc(emailInput.value) && phoneRegexFunc(phoneInput.value) &&
        ageRegexFunc(ageInput.value) && passRegexFunc(passInput.value) && passRegexFunc(repassInput.value) &&
        repassInput.value === passInput.value) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', '');
    }
}
