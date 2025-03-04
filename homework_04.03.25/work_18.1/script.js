document.addEventListener('DOMContentLoaded', () => {
    const setTimerBtn = document.querySelector('.setTimer__btn');
    const cencelTimerBtn = document.getElementById('cencelTimer');
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');
    const timers = document.getElementById('timers');
    const endSound = document.getElementById('endSound');
    const tickSound = document.getElementById('tickSound');
    let endSoundPlayed = false;

    function formatTime(value) {
        return value.toString().padStart(2, '0');
    }

    setTimerBtn.addEventListener('click', () => {
        let hourValue = document.querySelector('.setTimer__hour').value;
        let minValue = document.querySelector('.setTimer__min').value;
        let secValue = document.querySelector('.setTimer__sec').value;

        hour.textContent = formatTime(hourValue);
        min.textContent = formatTime(minValue);
        sec.textContent = formatTime(secValue);

        timers.style.display = 'block';
        cencelTimerBtn.style.display = 'block';
        document.querySelector('.setTimer__hour').value = '';
        document.querySelector('.setTimer__min').value = '';
        document.querySelector('.setTimer__sec').value = '';
        endSoundPlayed = false;
    });

    cencelTimerBtn.addEventListener('click', () => {
        hour.textContent = '00';
        min.textContent = '00';
        sec.textContent = '00';
        timers.style.display = 'none';
        cencelTimerBtn.style.display = 'none';
        endSoundPlayed = false;
    });

    setInterval(() => {
        if (+hour.textContent === 0 && +min.textContent === 0 && +sec.textContent === 1 && !endSoundPlayed) {
            endSound.play();
            endSoundPlayed = true;
        }


        if (+sec.textContent > 0) {
            sec.textContent = formatTime(+sec.textContent - 1);
            tickSound.play();
        } else if (+min.textContent > 0) {
            min.textContent = formatTime(+min.textContent - 1);
            sec.textContent = 59;
            tickSound.play();
        } else if (+hour.textContent > 0) {
            hour.textContent = formatTime(+hour.textContent - 1);
            min.textContent = 59;
            sec.textContent = 59;
            tickSound.play();
        } else if (+hour.textContent === 0 && +min.textContent === 0 && +sec.textContent === 0) {
            timers.style.display = 'none';
            cencelTimerBtn.style.display = 'none';
        }
    }, 1000);
});
