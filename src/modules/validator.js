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

    const addEventListenerForStr = (str, regExp) => {

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

export default validator;

