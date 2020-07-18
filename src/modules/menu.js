const menu = () => {

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
            const ch = 42 * progress + '%';
            popupContent.style.cssText = `left: ${ch};`;
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

    const IE = () => {
        const menuCross  = document.querySelector('.close-btn');
        menuCross.style.cssText = `position:  absolute`;
    };

    IE();

    const popupEventListener = target => {

        const popUp = document.querySelector('.popup');

        if (target.classList[0] === 'popup' || target.classList[0] === 'popup-close') {
            popUp.style.cssText = 'display: none';
        }

        if (target.classList[2] === 'popup-btn') {
            popUp.style.cssText = 'display: block';
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && screen.width > 786) {
                animationTogglePopUp();
            }
        }

    };

    const menuEventListener = target => {

        const menu = document.querySelector('menu');
        if (target.closest('.menu') || (target.closest('menu') && target.closest('a') !== null)) {
            menu.classList.toggle('active-menu');
        } else if (menu.classList[0] === 'active-menu' && target.classList[0] !== 'active-menu' && target.closest('li') === null) {
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

};

export default menu;
