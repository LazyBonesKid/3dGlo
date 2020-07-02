
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
        const  menu = document.querySelector('menu');

            document.addEventListener('click', event => {
                let target = event.target;
                if (target.closest('.menu') || (target.closest('menu') && target.closest('a') !== null)) {
                    menu.classList.toggle('active-menu');
                }
            });
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
        const popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popUp.style.display = 'block';
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && screen.width > 786) {
                    animationTogglePopUp();
                }
            });
        });

        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
                if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && screen.width > 786) {
                    popupContent.style.left = '0%';
                }
            }  else {
                target = target.closest('.popup-content');
                console.log(target);
                if (!target) {
                    popUp.style.display = 'none';
                    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || screen.width > 786) {
                        popupContent.style.left = '0%';
                    }
                }
            }
        });
    };

    togglePopUp();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
                target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();
});

