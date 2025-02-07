const imgURL = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
    'img/9.png',
    'img/10.png',
];


const img = document.querySelector('.imgDiv');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * imgURL.length);
    img.src = `${imgURL[random]}`;
});