document.addEventListener('DOMContentLoaded', () => {
    const setTimerBtn = document.querySelector('.setTimer__btn');
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    setTimerBtn.addEventListener('click', () => {
        let hourValue = document.querySelector('.setTimer__hour').value;
        let minValue = document.querySelector('.setTimer__min').value;
        let secValue = document.querySelector('.setTimer__sec').value;

        hour.textContent = formatTime(hourValue);
        min.textContent = formatTime(minValue);
        sec.textContent = formatTime(secValue);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    setInterval(() => {
        if (sec.textContent > 0) {
            sec.textContent = formatTime(--sec.textContent);
        } else if (min.textContent > 0) {
            min.textContent = formatTime(--min.textContent);
            sec.textContent = 59;
        } else if (hour.textContent > 0) {
            hour.textContent = formatTime(--hour.textContent);
            min.textContent = 59;
            sec.textContent = 59;
        }
    }, 1000);
});

function formatTime(value) {
    return value.toString().padStart(2, '0');
}
