
let userAge = prompt('Якого ви року народження?');
if (userAge === null) {
    alert('Ви не ввели рік народження');
}
let userCity = prompt('У якому місті ви проживаєте?');
if (userCity === null) {
    alert('Ви не ввели місто проживання');
}
let userSport = prompt('Який ваш улюблений вид спорту?');
if (userSport === null) {
    alert('Ви не ввели улюблений вид спорту');
}
if (userSport.toLowerCase() === `футбол`) {
    var SportFoot = `Круто! Хочеш стати як Шавченко?`;
}
else if (userSport.toLowerCase() === `баскетбол`) {
    var SportFoot = `Круто! Хочеш стати як Майкл Джордан?`;
}
else if (userSport.toLowerCase() === `волейбол`) {
    var SportFoot = `Круто! Хочеш стати як Плотницький?`;
}


let userAgeNum = 2025 - userAge;
if (userCity.toLowerCase() === `київ`) {
    alert(`Вам ${userAgeNum} років, Ви проживаєте у столиці України і ваш улюблений вид спорту - ${userSport}. ${SportFoot}`);
}
else if (userCity.toLowerCase() === `вашингтон`) {
    alert(`Вам ${userAgeNum} років, Ви проживаєте у Сполучених Штатах Америки і ваш улюблений вид спорту - ${userSport}. ${SportFoot}`);
}
else if (userCity.toLowerCase() === `лондон`) {
    alert(`Вам ${userAgeNum} років, Ви проживаєте у Великій Британії і ваш улюблений вид спорту - ${userSport}. ${SportFoot}`);
}
else {
    alert(`Вам ${userAgeNum} років, Ви проживаєте у місті ${userCity} і ваш улюблений вид спорту - ${userSport}. ${SportFoot}`);
}