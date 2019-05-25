import {findZodiac} from "./lib.js";

const buttonEl = document.getElementById('button');
console.dir(buttonEl);
const dateEl = document.getElementById('date');

const elements = document.getElementById('body');
const element = document.createElement("div",);

buttonEl.addEventListener("click", () => {
    element.textContent = '';
    console.dir(dateEl);
    const birthday = new Date(dateEl.value);
    const birthZodiac = new Date(0, birthday.getMonth(), birthday.getDate());

    element.textContent = 'Вы ' + findZodiac(birthZodiac);
    element.className = 'class';
    elements.appendChild(element);

    dateEl.value = '';

});