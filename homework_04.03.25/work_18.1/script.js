document.addEventListener('DOMContentLoaded', () => {
    const setTimerBtn = document.querySelector('.setTimer__btn');
    const timer = document.querySelector('.timer');
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    setTimerBtn.addEventListener('click', () => {
        const hourValue = document.querySelector('.setTimer__hour').value;
        const minValue = document.querySelector('.setTimer__min').value;
        const secValue = document.querySelector('.setTimer__sec').value;

        hour.textContent = hourValue;
        min.textContent = minValue;
        sec.textContent = secValue;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const timer = document.querySelector('.timer');
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    setInterval(() => {
        if (sec.textContent > 0) {
            sec.textContent--;
        } else if (min.textContent > 0) {
            min.textContent--;
            sec.textContent = 59;
        } else if (hour.textContent > 0) {
            hour.textContent--;
            min.textContent = 59;
            sec.textContent = 59;
        }
    }, 1000);
});


 