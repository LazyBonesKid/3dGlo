
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
            console.log('seconds: ', seconds);
            console.log('minutes: ', minutes);
            console.log('hours: ', hours);
            //day = Math.floor(timeRemaining / 60 / 60 / 24);
            return { timeRemaining, hours, minutes, seconds };
        };

        const updateClock = () => {
            let timer = getTimeRemaining();
            timerHours.textContent = +timer.hours > 0 ? timer.hours : '00';
            timerMinutes.textContent = +timer.minutes > 0 ? timer.minutes : '00';
            timerSeconds.textContent = +timer.seconds > 0 ? timer.seconds : '00';
        };
        updateClock();
        setInterval(updateClock, 1000);
    }

    countTimer('1 july 2020');
});
