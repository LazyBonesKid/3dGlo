
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
    countTimer('3 july 2020');

    const popupContent = document.querySelector('.popup-content');

    const animationTogglePopUp = () => {
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
    // Все меню
    const toggleMenu = () => {
        const  menu = document.querySelector('menu'),
        popUp = document.querySelector('.popup'),
        tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

            document.addEventListener('click', event => {
                let target = event.target;
                //меню
                if (target.closest('.menu') || (target.closest('menu') && target.closest('a') !== null)) {
                    menu.classList.toggle('active-menu');
                }  else if (menu.classList[0] === 'active-menu' && target.classList[0] !== 'active-menu') {
                    menu.classList.toggle('active-menu');
                }
                //popup - закрытие
                if (target.classList[0] === 'popup' || target.classList[0] === 'popup-close') {
                    popUp.style.display = 'none';
                    popupContent.style.left = '0%';
                } 
                if (target.classList.value === 'btn form-btn popup-btn') {
                    popUp.style.display = 'block';
                    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && screen.width > 786) {
                        animationTogglePopUp();
                    }
                }
                // табы
                if (target.closest('.service-header-tab')) {
                    for (let i = 0; i < tabContent.length; i++) {
                        if (target.closest('.service-header-tab') === tab[i]) {
                            tab[i].classList.add('active');
                                tabContent[i].classList.remove('d-none');
                            } else {
                                tab[i].classList.remove('active');
                                tabContent[i].classList.add('d-none');
                            }
                    }
                }
                // scrolling
                if (target.getAttribute('href') === '#service-block' || target.getAttribute('href') === '#portfolio' || target.getAttribute('href') === '#calc' || target.getAttribute('href') === '#command' || target.getAttribute('href') === '#connect' || target.getAttribute('src') === 'images/scroll.svg') {
                    event.preventDefault();
                    let blockID;
                    if (target.getAttribute('src') === 'images/scroll.svg') {
                        blockID = target.closest('a').getAttribute('href').substr(1);
                    } else {
                        blockID = target.getAttribute('href').substr(1);
                    }
                    document.getElementById(blockID).scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
    };

    toggleMenu();

});

