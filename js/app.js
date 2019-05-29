import {findZodiac} from "./lib.js";

const buttonEl = document.getElementById('button');
const dateEl = document.getElementById('date');
const elements = document.getElementById('body');

buttonEl.addEventListener("click", () => {
    elements.textContent = '';
    const birthday = new Date(dateEl.value);
    const birthZodiac = new Date(0, birthday.getMonth(), birthday.getDate());
    elements.textContent = `Вы ${findZodiac(birthZodiac)}`;
    dateEl.value = '';
});