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
    const setTimer = document.getElementById('setTimer');
    let timerInterval;

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


        clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            if (+hour.textContent === 0 && +min.textContent === 0 && +sec.textContent === 1 && !endSoundPlayed) {
                endSound.play();
                endSoundPlayed = true;
            }

            if (+sec.textContent > 0) {
                sec.classList.add('flip-down');
                sec.textContent = formatTime(+sec.textContent - 1);
                tickSound.play();
                setTimer.style.display = 'none';
                setTimerBtn.style.display = 'none';
            } else if (+min.textContent > 0) {
                min.textContent = formatTime(+min.textContent - 1);
                sec.textContent = 59;
                tickSound.play();
                setTimer.style.display = 'none';
                setTimerBtn.style.display = 'none';
            } else if (+hour.textContent > 0) {
                hour.textContent = formatTime(+hour.textContent - 1);
                min.textContent = 59;
                sec.textContent = 59;
                tickSound.play();
                setTimer.style.display = 'none';
                setTimerBtn.style.display = 'none';
            } else if (+hour.textContent === 0 && +min.textContent === 0 && +sec.textContent === 0) {
                clearInterval(timerInterval); 
                timers.style.display = 'none';
                cencelTimerBtn.style.display = 'none';
                setTimer.style.display = 'block';
                setTimerBtn.style.display = 'block';
            }
        }, 1000);
    });

    cencelTimerBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        hour.textContent = '00';
        min.textContent = '00';
        sec.textContent = '00';
        timers.style.display = 'none';
        cencelTimerBtn.style.display = 'none';
        endSoundPlayed = false;
        setTimer.style.display = 'block';
        setTimerBtn.style.display = 'block';
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', () => {
            let min = parseInt(input.getAttribute('min'));
            let max = parseInt(input.getAttribute('max'));
            let value = parseInt(input.value);

            if (value < min) {
                input.value = min;
            } else if (value > max) {
                input.value = max;
            }
        });
    });

});


