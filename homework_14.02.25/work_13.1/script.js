const form = document.getElementById('formMy');
const btn = document.getElementById('btn');
const errorms = document.getElementById('errorMessage');
const errorEmail = document.getElementById('errorEmail');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.addEventListener('click', function (event) {
    event.preventDefault();
    errorms.textContent = "";
    errorEmail.style.display = 'none';

    const formData = new FormData(form);
    const userName = formData.get('Name');
    const userMessage = formData.get('Message');
    const userNumber = formData.get('Number');
    const userEmail = formData.get('Email');
    if (userName === "") {
        errorms.textContent = "Ви не ввели Ім'я";
        return;
    }
    if (userMessage.length > 0 && userMessage.length < 5) {
        errorms.textContent = "Довжина повідомлення має бути не менше 5 символів";
        return;
    }
    if (userNumber === "") {
        errorms.textContent = "Ви не ввели Номер телефону";
        return;
    }
    if (userEmail === "") {
        errorms.textContent = "Ви не ввели Email";
        return;
    }

    if (!emailRegex.test(userEmail)) {
        errorEmail.style.display = 'flex';
        return;
    }
    if (userMessage.length === 0) {
        console.log(`Введені дані:
    Ім'я: ${userName}
    Номер телефону: ${userNumber} 
    Email: ${userEmail}
    Повідомлення не було додане`);
        form.reset();
    }
    if (userMessage.length != 0) {
        console.log(`Введені дані:
    Ім'я: ${userName}
    Повідомлення: ${userMessage}
    Номер телефону: ${userNumber} 
    Email: ${userEmail}`);
        form.reset();
    }
});
$(document).ready(function () {
    $('#text1').inputmask('+38 (999) 999-99-99');
});
