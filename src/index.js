//Полифилы



import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'dom-node-polyfills';

import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();


elementClosest(window);

//калькулятор
import  calc from                    './modules/calc';

//таймер
import  countTimer from              './modules/countTimer';

//eventListeners
import  menu from                    './modules/menu';

//отправка формы
import  sendForm from                './modules/sendForm';

//slider

import slider from                   './modules/slider';

//validator
import  validator from               './modules/validator';




countTimer('30 july 2020');

menu();

slider();

calc(100);

validator();

sendForm();
