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
};

export default slider;
