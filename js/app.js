import {findZodiac} from "./lib.js";

const buttonEl = document.getElementById('button');
const dayEl = document.getElementById('day');
const monthEl = document.getElementById('month');





buttonEl.addEventListener("click",() => {
    const day = Number(dayEl.value);
    const month = Number(monthEl.value);



    console.log(day);
    console.log(month);
    const zodiac = findZodiac(new Date(0, month-1,day));
    console.log(zodiac);

    const elements = document.getElementById('body');
    const element = document.createElement("div",);

    element.textContent = 'Вы '+ zodiac;
    element.className = 'class';
    elements.appendChild(element);

} );





//const zodiac = findZodiac(new Date(0, month-1,day));

