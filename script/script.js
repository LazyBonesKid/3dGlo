
window.addEventListener('DOMContentLoaded', () => {

    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const checkB = number => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        };

        const getTimeRemaining = () => {
            const
            dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds =  checkB(Math.floor(timeRemaining % 60)),
            minutes =   checkB(Math.floor((timeRemaining / 60) % 60)),
            hours =  checkB(Math.floor(timeRemaining / 60 / 60) % 24);
            return { timeRemaining, hours, minutes, seconds };
        };
        const idTime = setInterval(updateClock, 1000);

        function updateClock() {
            const timer = getTimeRemaining();
            if (isNaN(+timer.hours)) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idTime);
            } else {
                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;
            }
        }
        updateClock();
        idTime;
    }

    countTimer('2 july 2020');
});
