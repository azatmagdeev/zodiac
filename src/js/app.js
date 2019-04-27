import {findZodiac} from "./lib.js";

alert("Какой Ваш знак зодиака?");

 const day = Number(prompt("Введите число рождения. Число от 1 до 31",''));
 const month = Number(prompt("месяц рождения. Число от 1 до 12",''));

const zodiac = findZodiac(new Date(0, month-1,day));

const elements = document.getElementById('body');
const element = document.createElement("div",);
element.textContent = zodiac;
element.className = 'class';
elements.appendChild(element);