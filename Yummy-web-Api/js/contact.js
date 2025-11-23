// ========== Contact Form ==========
function contactForm() {
    searchContainer.innerHTML = ``;
    let result = `
    <div class="min-vh-100 w-75 mx-auto d-flex align-items-center justify-content-center">
        <form action="#">
            <div class="row g-4">
                <div class="col-md-6">
                    <input type="text" id="nameInput" class="form-control" placeholder="Enter Your Name">
                    <p id="nameAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Special characters and numbers not allowed
                    </p>
                </div>
                <div class="col-md-6">
                    <input type="email" id="emailInput" class="form-control" placeholder="Enter Your Email">
                    <p id="emailAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Email not valid *exemple@yyy.zzz
                    </p>
                </div>
                <div class="col-md-6">
                    <input type="tel" id="phoneInput" class="form-control" placeholder="Enter Your Phone">
                    <p id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Enter valid Phone Number
                    </p>
                </div>
                <div class="col-md-6">
                    <input type="number" id="ageInput" class="form-control" placeholder="Enter Your Age" min="18" max="60">
                    <p id="ageAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Enter valid age
                    </p>
                </div>
                <div class="col-md-6">
                    <input type="password" id="passInput" class="form-control" placeholder="Enter Your Password">
                    <p id="passAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </p>
                </div>
                <div class="col-md-6">
                    <input type="password" id="repassInput" class="form-control" placeholder="RePassword">
                    <p id="repassAlert" class="alert alert-danger w-100 mt-2 d-none text-center">
                        Enter valid repassword
                    </p>
                </div>
                <div class="col text-center">
                    <button id="submitBtn" class="btn btn-outline-danger cursor-pointer" disabled>Submit</button>
                </div>
            </div>
        </form>
    </div>`;
    dataRow.innerHTML = result;

    // Get form elements
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const ageInput = document.getElementById('ageInput');
    const passInput = document.getElementById('passInput');
    const repassInput = document.getElementById('repassInput');
    const nameAlert = document.getElementById('nameAlert');
    const emailAlert = document.getElementById('emailAlert');
    const phoneAlert = document.getElementById('phoneAlert');
    const ageAlert = document.getElementById('ageAlert');
    const passAlert = document.getElementById('passAlert');
    const repassAlert = document.getElementById('repassAlert');

    // Name validation
    nameInput.addEventListener('blur', () => {
        if (nameInput.value !== '' && nameRegexFunc(nameInput.value)) {
            nameAlert.classList.replace('d-block', 'd-none');
        } else {
            nameAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    nameInput.addEventListener('input', () => {
        if (nameInput.value !== '' && nameRegexFunc(nameInput.value)) {
            nameAlert.classList.replace('d-block', 'd-none');
        } else {
            nameAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });

    // Email validation
    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() !== '' && emailRegexFunc(emailInput.value)) {
            emailAlert.classList.replace('d-block', 'd-none');
        } else {
            emailAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    emailInput.addEventListener('input', () => {
        if (emailInput.value !== '' && emailRegexFunc(emailInput.value)) {
            emailAlert.classList.replace('d-block', 'd-none');
        } else {
            emailAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });

    // Phone validation
    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim() !== '' && phoneRegexFunc(phoneInput.value)) {
            phoneAlert.classList.replace('d-block', 'd-none');
        } else {
            phoneAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    phoneInput.addEventListener('input', () => {
        if (phoneInput.value !== '' && phoneRegexFunc(phoneInput.value)) {
            phoneAlert.classList.replace('d-block', 'd-none');
        } else {
            phoneAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });

    // Age validation
    ageInput.addEventListener('blur', () => {
        if (ageInput.value !== '' && ageRegexFunc(ageInput.value)) {
            ageAlert.classList.replace('d-block', 'd-none');
        } else {
            ageAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    ageInput.addEventListener('input', () => {
        if (ageInput.value !== '' && ageRegexFunc(ageInput.value)) {
            ageAlert.classList.replace('d-block', 'd-none');
        } else {
            ageAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });

    // Password validation
    passInput.addEventListener('blur', () => {
        if (passInput.value !== '' && passRegexFunc(passInput.value)) {
            passAlert.classList.replace('d-block', 'd-none');
        } else {
            passAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    passInput.addEventListener('input', () => {
        if (passInput.value !== '' && passRegexFunc(passInput.value)) {
            passAlert.classList.replace('d-block', 'd-none');
        } else {
            passAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });

    // Re-password validation
    repassInput.addEventListener('blur', () => {
        if (repassInput.value !== '' && passRegexFunc(repassInput.value) && repassInput.value === passInput.value) {
            repassAlert.classList.replace('d-block', 'd-none');
        } else {
            repassAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
    repassInput.addEventListener('input', () => {
        if (repassInput.value !== '' && passRegexFunc(repassInput.value) && repassInput.value === passInput.value) {
            repassAlert.classList.replace('d-block', 'd-none');
        } else {
            repassAlert.classList.replace('d-none', 'd-block');
        }
        checkAllValidation();
    });
}
