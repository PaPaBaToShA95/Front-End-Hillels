var userAge = prompt("Якого ви року народження?");
if (userAge === null) {
  alert("Ви не ввели рік народження");
  userAge= `невідомо скільки`;
} else if (isNaN(userAge)) {
  alert("Ви ввели не число");
  var userAge = `невідомо скільки`;
}
let userCity = prompt("У якому місті ви проживаєте?");
if (userCity === null) {
  alert("Ви не ввели місто проживання");
  userCity = `невідомо якому`;
}
var userSport = prompt("Який ваш улюблений вид спорту?");
if (userSport === null) {
  alert("Ви не ввели улюблений вид спорту");
  userSport = `невідомо який`;
}
if (userSport.toLowerCase() === `футбол`) {
  var userSport = userSport + `.  Круто! Хочеш стати як Шавченко?`;
} else if (userSport.toLowerCase() === `баскетбол`) {
  var userSport = userSport + `.  Круто! Хочеш стати як Майкл Джордан?`;
} else if (userSport.toLowerCase() === `волейбол`) {
  var userSport = userSport + `.  Круто! Хочеш стати як Плотницький?`;
}

if (!isNaN(userAge)) {
  var userAgeNum = 2025 - userAge;
} else {
  var userAgeNum = `невідомо скільки`;
}
if (userCity.toLowerCase() === `київ`) {
  alert(
    `Вам ${userAgeNum} років, Ви проживаєте у столиці України і ваш улюблений вид спорту - ${userSport}`
  );
} else if (userCity.toLowerCase() === `вашингтон`) {
  alert(
    `Вам ${userAgeNum} років, Ви проживаєте у Сполучених Штатах Америки і ваш улюблений вид спорту - ${userSport}`
  );
} else if (userCity.toLowerCase() === `лондон`) {
  alert(
    `Вам ${userAgeNum} років, Ви проживаєте у Великій Британії і ваш улюблений вид спорту - ${userSport}`
  );
} else {
  alert(
    `Вам ${userAgeNum} років, Ви проживаєте у місті ${userCity} і ваш улюблений вид спорту - ${userSport}`
  );
}
