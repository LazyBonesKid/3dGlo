
window.addEventListener('DOMContentLoaded', () => {


    const dayArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const divOne = document.createElement('divOne');
    document.body.append(divOne);

    function checkB(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    const asd = () => {
        const date = new Date(),
        TheNewYear = new Date('31 December 2020'),
        UntilTheNewYear = Math.floor((TheNewYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
        let timeOfDay;
        if (date.getHours() >= 0 && date.getHours() < 6) {
            timeOfDay = 'ночь';
        } else if (date.getHours() >= 6 && date.getHours() < 12) {
            timeOfDay = 'утро';
        } else if (date.getHours() >= 12 && date.getHours() < 18) {
            timeOfDay = 'день';
        } else {
            timeOfDay = 'вечер';
        }
        document.querySelector('divOne').innerHTML = `Добрый  ${timeOfDay} <br>
        Сегодня: ${dayArr[date.getDay()]} <br>
        Текущее время: ${checkB(date.getHours())}:${checkB(date.getMinutes())}:${checkB(date.getSeconds())} <br>
        до нового года осталось ${UntilTheNewYear} дней`;
    };

    setInterval(asd, 1000);
});
