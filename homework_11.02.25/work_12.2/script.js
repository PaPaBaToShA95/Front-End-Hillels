const homework = document.getElementById('homework');

homework.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn')) {
        console.log(`Ви натиснули на кнопку ${event.target.textContent}`);
    }
});
