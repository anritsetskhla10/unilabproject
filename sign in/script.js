const continueBtn = document.getElementById('continueBtn');
const emailContainer = document.getElementsByClassName('email-container')[0];
const passwordContainer = document.getElementsByClassName('password-container')[0];

const wrongEmail = "Wrong email";
const emailError = document.createElement("p");
emailError.classList.add("error_text");
emailError.textContent = wrongEmail;

const wrongPassword ='Wrong password'
const passError = document.createElement("p");
passError.classList.add("error_text");
passError.textContent = wrongPassword;

const continueLink = document.getElementById('continue-link');

continueBtn.addEventListener('click', checkEmail);

function checkEmail(e) {
    e.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    let isValid = true;

    if (!validateEmail(emailInput)) {
        emailContainer.appendChild(emailError);
        isValid = false;
    }

    if (!validatePassword(passwordInput)) {
        passwordContainer.appendChild(passError);
        isValid = false;
    }

    if (isValid) {
        window.location.href = '../services/index.html';
    }
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password) {
    const passw = /^[A-Za-z]\w{7,14}$/;
   
    if (password.match(passw) || password.trim() !== "") { 
        return true;
    } else { 
        return false;
    };
}


const terms = Array.from(document.getElementsByClassName('terms'))[0];
const privacy = Array.from(document.getElementsByClassName('privacy'))[0];
const blur = Array.from(document.getElementsByClassName('blur'))[0];


terms.addEventListener('click', termsAndPrivacy);
privacy.addEventListener('click', termsAndPrivacy);

let containerAdded = false;

function termsAndPrivacy() {

    if(!containerAdded){
        const container = document.createElement('div');
        container.classList.add('terms-privacy');
        document.body.appendChild(container);

        const termsTitle = document.createElement('h2');
        const privacyTitle = document.createElement('h2');
        termsTitle.innerHTML = "Terms and conditions";
        privacyTitle.innerHTML = "Privacy policy";
        termsTitle.classList.add('title-text');
        privacyTitle.classList.add('title-text');

        const termsText = document.createElement('p')
        const privacyText = document.createElement('p')
        termsText.innerHTML = "Before you use our website or services, please carefully read the following Terms and Conditions. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services. Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you. By using our services, you consent to our privacy practices.";
        privacyText.innerHTML = "We may collect personal information, such as your name, email address, and other details, when you register an account, make a purchase, or interact with our services. We also automatically collect certain information, such as IP addresses, browser type, and usage patterns, through cookies and similar technologies. Our website may contain links to third-party websites or services.";
        termsText.classList.add('description-text');
        privacyText.classList.add('description-text');

        const termsContainer = document.createElement('div');
        const privacyContainer = document.createElement('div');

        termsContainer.append(termsTitle ,termsText);
        privacyContainer.append(privacyTitle, privacyText)

        const agreeBtn =document.createElement('button');
        agreeBtn.classList.add('agree-button');
        agreeBtn.innerHTML = " I agree"
        agreeBtn.addEventListener('click', () =>{
            container.remove();
            blur.classList.add('displayNone')
            containerAdded = false;
        })

        container.append(termsContainer, privacyContainer, agreeBtn);

        blur.classList.remove('displayNone')

        containerAdded = true;
    }else{
        const container = document.querySelector('.terms-privacy');
        container.remove();
        blur.classList.add('displayNone')
        containerAdded = false;
    }

    
}








