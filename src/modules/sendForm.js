const sendForm = () => {


    const checkVal = item => {

        const inputs = item.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].classList.contains('ValError')) {
                return true;
            }

        }

    };

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


    const errorMessage = 'Что то пошло не так',
        successMessage = 'Спасибо, мы скоро с вами свяжемся',
        form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        formArr = [form1, form2, form3],
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = `font-size: 2rem`;
    statusMessage.className = 'statusMessage';



    const postData = item => {

        return fetch('./server.php', {
            method: 'POST',
            body: item
        });

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

            const formData = new FormData(item);

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

            const outputData = response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                skWaveDelet();
                addStatusMessage(item, successMessage);
            };

            const errorData = error => {
                skWaveDelet();
                addStatusMessage(item, errorMessage);
                console.error(error);
            };

            postData(formData)
                .then(outputData)
                .catch(errorData);
        });

    });

};

export default sendForm