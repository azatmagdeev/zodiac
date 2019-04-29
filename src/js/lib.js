
export function findZodiac(birthday) {
    if (birthday >= new Date(0,2,21) && birthday <= new Date(0,3,20))
      return "Овен (21 марта — 20 апреля)";
    if (birthday >= new Date(0,3,21) && birthday <= new Date(0,4,20))
        return "Телец (21 апреля — 20 мая)";
    if (birthday >= new Date(0,4,21) && birthday <= new Date(0,5,21))
        return "Близнецы (21 мая — 21 июня)";
    if (birthday >= new Date(0,5,22) && birthday <= new Date(0,6,22))
        return "Рак (22 июня — 22 июля)";
    if (birthday >= new Date(0,6,23) && birthday <= new Date(0,7,23))
        return "Лев (23 июля — 23 августа)";
    if (birthday >= new Date(0,7,24) && birthday <= new Date(0,8,22))
        return "Дева (24 августа — 22 сентября)";
    if (birthday >= new Date(0,8,23) && birthday <= new Date(0,9,23))
        return "Весы (23 сентября — 23 октября)";
    if (birthday >= new Date(0,9,24) && birthday <= new Date(0,10,22))
        return "Скорпион (24 октября — 22 ноября)";
    if (birthday >= new Date(0,10,23) && birthday <= new Date(0,11,21))
        return "Стрелец (23 ноября — 21 декабря)";
    if (birthday >= new Date(0,11,22) && birthday <= new Date(0,11,31)
        ||birthday >= new Date(0,0,1) && birthday <= new Date(0,0,19))
        return "Козерог (22 декабря — 19 января)";
    if (birthday >= new Date(0,0,20) && birthday <= new Date(0,1,18))
        return "Водолей (20 января — 18 февраля)";
    if (birthday >= new Date(0,1,19) && birthday <= new Date(0,2,20))
        return "Рыбы (19 февраля — 20 марта)";
    return 'неверно ввели дату';
}


