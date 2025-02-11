const prmt = document.getElementById('prmt');
const toURL = document.getElementById('toURL');

prmt.addEventListener('click', () => {
    URLuser = prompt('Введіть вашу URL адресу');
    try {
        new URL(URLuser);
        toURL.setAttribute('href', URLuser);
    }
    catch (error) {
        alert('Ви ввели некоректну URL адресу');
    }
});
