
window.addEventListener('DOMContentLoaded', () => {
    // Таймер
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
            //day = Math.floor(timeRemaining / 60 / 60 / 24);
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

    // Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };

            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);
            menuItems.forEach(item => { item.addEventListener('click', handlerMenu); });

    };

    toggleMenu();

    const popupContent = document.querySelector('.popup-content');

    const animationTogglePopUp = () => {
        //const start = Date.now(); // запомнить время начала
        let left = 0;
        const timer = setInterval(() => {
            if (popupContent.style.left !== '38%') {
                popupContent.style.left = left + '%';
                left++;
            } else {
                clearInterval(timer);
                return;
            }
        }, 5);
    };

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');

        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || screen.width > 786) {
                    animationTogglePopUp();
                }
            });
        });

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || screen.width > 786) {
                popupContent.style.left = '0%';
            }
        });
    };

    togglePopUp();
});

