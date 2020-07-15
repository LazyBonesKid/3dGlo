window.addEventListener('DOMContentLoaded', () => {

    // Таймер \/
    const countTimer = deadline => {

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

            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = checkB(Math.floor(timeRemaining % 60)),
                minutes = checkB(Math.floor((timeRemaining / 60) % 60)),
                hours = checkB(Math.floor(timeRemaining / 60 / 60) % 24);
                //day = Math.floor(timeRemaining / 60 / 60 / 24);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

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

    };

    countTimer('30 july 2020');

// Анимации \/

    const animate = ({ timing, draw, duration, elseFunc }) => {

        const start = performance.now();
        requestAnimationFrame(function animate(time) {

            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            const progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }  else {
                elseFunc();
            }

        });

    };

    const animationTogglePopUp = () => {

        const popupContent = document.querySelector('.popup-content');

        const drawPopup = progress => {
            popupContent.style.left = 42 * progress + '%';
        };

        animate({
            duration: 500,
            timing: timeFraction => timeFraction,
            draw: progress => {
                drawPopup(progress);
            },
            elseFunc: () => cancelAnimationFrame(animate)
        });
    };

    const animationLoading = item => {

        const createWave = () => {

            const skWave = document.createElement('div');

            skWave.style = `
            height: 100px;
            width: 100px;
            margin-top: 30px;
            border-radius: 50%;
            margin-left: 49%;
            position: relative;`;

            skWave.className = 'skWave';
            item.append(skWave);

            for (let i = 0; i < 12; i++) {

                const div = document.createElement('div');

                div.className = `skDiv ${i + 1}`;
                div.style = `
                margin: 10px;
                background-color: #19B5FE;
                height: 8px;
                width: 8px;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                `;

                skWave.appendChild(div);

            }

        };

        const waveAnim = () => {

            const skWaves = document.querySelectorAll('.skDiv'),
            r = 30,
            alpha = 2 * 3.14;

            const completeDraw = progress => {
                if (skWaves.length === 0) {
                    cancelAnimationFrame(animate);
                    return;
                }

                for (let i = 0, g = 0, op = 1; i < 12; i++, g += 0.4, op -= 0.1) {
                    skWaves[i].style.left = r * Math.cos(alpha * progress - g) + 'px';
                    skWaves[i].style.top  = r * Math.sin(alpha * progress - g) + 'px';
                    skWaves[i].style.opacity = op;
                }
            };

            animate({
                duration: 2300,
                timing: timeFraction => timeFraction,
                draw: progress => {
                completeDraw(progress);
                },
                elseFunc: () => {
                    cancelAnimationFrame(animate);
                    waveAnim();
                }
            });
        };
            createWave();
            waveAnim();
    };

    const animationCalc = copyTotalValue => {

        const totalValue = document.getElementById('total');

        animate({
            duration: 1000,
            timing: timeFraction => timeFraction,
            draw: progress => {
                totalValue.textContent = Math.trunc(copyTotalValue * progress);
            },
            elseFunc: () => { return; }
        });

    };

    // Все меню \/

    const eventListener = () => {

            const popupEventListener = target => {

                const popupContent = document.querySelector('.popup-content'),
                popUp = document.querySelector('.popup');

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

            };

            const menuEventListener = target => {

                const menu = document.querySelector('menu');

                if (target.closest('.menu') || (target.closest('menu') && target.closest('a') !== null)) {
                    menu.classList.toggle('active-menu');
                } else if (menu.classList[0] === 'active-menu' && target.classList[0] !== 'active-menu') {
                    menu.classList.toggle('active-menu');
                }

            };

            const tabsEventListener = target => {

                const tabContent = document.querySelectorAll('.service-tab'),
                    tabHeader = document.querySelector('.service-header'),
                    tab = tabHeader.querySelectorAll('.service-header-tab');

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

            };

            const scrollsEventListener = target => {

                if (target.getAttribute('href') === '#service-block' || target.getAttribute('href') === '#portfolio' || target.getAttribute('href') === '#calc' || target.getAttribute('href') === '#command' || target.getAttribute('href') === '#connect' || target.getAttribute('src') === 'images/scroll.svg') {

                    event.preventDefault();
                    let blockID;

                    if (target.getAttribute('src') === 'images/scroll.svg') {
                        blockID = target.closest('a').getAttribute('href').substr(1);
                    } else {
                        blockID = target.getAttribute('href').substr(1);
                    }

                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }
            };

        document.addEventListener('click', event => {

            const target = event.target;
            popupEventListener(target);
            menuEventListener(target);
            tabsEventListener(target);
            scrollsEventListener(target);

        });

        // const buttonsSubmit = document.querySelectorAll('[type="submit"]');
        // buttonsSubmit.addEventListener()
    };

    eventListener();



    //слайдер \/
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            portDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval = 0;

        const addDots = () => {
            slide.forEach((elem, index) => {
                const dot = document.createElement('li');
                if (index === 0) {
                    dot.setAttribute('class', 'dot dot-active');
                } else {
                    dot.setAttribute('class', 'dot');
                }
                portDots.append(dot);
            });
        };

        addDots();
        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        startSlide(1500);

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide(1500);
            }
        });
    };

    slider();

    const imageSwap = () => {

        const image = document.querySelectorAll('.command__photo');

        let copy;

        image.forEach(item => {
            item.addEventListener('mouseenter', () => {

                copy = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = copy;

            });

            item.addEventListener('mouseleave', () => {

                copy = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = copy;

            });

        });

    };

    imageSwap();

    //калькулятор \/

    const inputNumberVal = () => {

        const calcBlock = document.querySelector('.calc-block'),
            inputs = calcBlock.querySelectorAll('input');

        inputs.forEach(item => {

            item.addEventListener('input', () => {

                if (item.value.match(/[^0-9]/g) !== null) {
                    item.value = item.value.slice(0, -1);
                }

            });

        });

    };

    inputNumberVal();

    const calc = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');

        const countSum = () => {

            let total = 0,
                countValue = 1,
                dayValue = 1;

            const squareValue = +calcSquare.value,
                typeValue = calcType.options[calcType.selectedIndex].value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue = 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue = 1.5;
            }

            if (typeValue && squareValue) {
                total = Math.trunc(price * typeValue * squareValue * countValue * dayValue);
            } else {
                total = 0;
            }

            const copyTotalValue = total;

            animationCalc(copyTotalValue);

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }

        });
    };


    calc(100);



    // validatorButtons


    const validator = () => {

        const name = document.querySelectorAll('[name="user_name"]'),
        regName = /[^а-яё ]/i,
        message = document.querySelector('[name="user_message"]'),
        phone = document.querySelectorAll('[name="user_phone"]'),
        regPhone = /[^0-9+]/;

        const change = (item, regExp) => {

            if (regExp.test(item.value)) {
                item.style.color = 'red';
                item.classList.add('ValError');
            }  else {
                item.style.color = 'black';
                item.classList.remove('ValError');
            }


        };

        const addEventListenerForStr = (str, regExp ) => {

            str.forEach(item => {
                item.addEventListener('input', () => {
                    change(item, regExp);

                });
            });

        };

        message.addEventListener('input', () => {
            change(message, regName);
        });

        addEventListenerForStr(name, regName);
        addEventListenerForStr(phone, regPhone);
    };

    validator();

    const checkVal = item => {

        const inputs = item.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].classList.contains('ValError')) {
                return true;
            }

        }

    };


    //send-ajax-form \/

    const sendForm = () => {

        const errorMessage = 'Что то пошло не так',
            successMessage = 'Спасибо, мы скоро с вами свяжемся',
            form1 = document.getElementById('form1'),
            form2 = document.getElementById('form2'),
            form3 = document.getElementById('form3'),
            formArr = [form1, form2, form3],
            statusMessage = document.createElement('div');

        statusMessage.style.cssText = `font-size: 2rem`;
        statusMessage.className = 'statusMessage';



        const postData = body => {

            const request = new XMLHttpRequest();

            const answer = new Promise((resolve, reject) => {


                request.addEventListener('readystatechange', () => {

                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }

                });

                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application');
                request.send(JSON.stringify(body));

            });

            return answer;

        };

        formArr.forEach(item => {
            item.addEventListener('submit', event => {

                event.preventDefault();

                if (checkVal(item)) {
                    return;
                }

                const inputs = item.querySelectorAll('input');

                if (document.querySelector('.statusMessage')) {
                    document.querySelector('.statusMessage').remove();
                }

                animationLoading(item);

                const formData = new FormData(item),
                    body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                inputs.forEach(item => {
                    item.value = '';
                });

                const skWaveDelet = () => {

                    const skWave = document.querySelector('.skWave');
                        skWave.remove();

                };

                const addStatusMessage = (item, message) => {

                    statusMessage.textContent = message;
                    item.appendChild(statusMessage);

                };

                const outputData = () => {
                    skWaveDelet();
                    addStatusMessage(item, successMessage);
                };

                const errorData = () => {
                    skWaveDelet();
                    addStatusMessage(item, errorMessage);
                };

                postData(body)
                    .then(outputData)
                    .catch(errorData);

            });

        });

    };

    sendForm();
});
