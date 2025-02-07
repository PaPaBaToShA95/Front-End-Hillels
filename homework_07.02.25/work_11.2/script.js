const text = document.querySelector('.homework__text');
const button = document.querySelector('.color__button');
const button2 = document.querySelector('.size__button');
button.addEventListener('click', () => {
    if (text.style.color === 'black') {
        text.style.color = 'red';
    }
    else {
        text.style.color = 'black';
    }
});
button2.addEventListener('click', () => {
    if (text.style.fontSize === '20px') {
        text.style.fontSize = '45px';
    }
    else {
        text.style.fontSize = '20px';
    }
});