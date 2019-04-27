import {findZodiac} from "../lib.js";

test ('function findZodiac is correctly', ()=>{

    const birthday = new Date(0,11,2);
    const expected = "Стрелец 23 ноября — 21 декабря";

    const result = findZodiac(birthday);
    expect(result).toBe(expected);
});

