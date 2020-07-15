const calc = (price = 100) => {
        
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

export default calc