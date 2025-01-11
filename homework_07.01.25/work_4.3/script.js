let userAge = '';
let userAgeMessage = '';
let userCityMessage = '';
let userHobbiMessage = '';
let city = '';
let hobbi = '';
let nowYear = new Date().getFullYear();






let userYear = prompt('Якого ви року народження?');
let parceYear = parseInt(userYear);
if (userYear === null || userYear === '') {
  alert('Ви відмовились вводити рік вашого народження!')
  userAgeMessage = 'Ви відмовились вводити рік вашого народження!';

}
else if (parceYear !== parceYear) {
  alert('Ви ввели не числове значення!')
  userAgeMessage = 'Ви ввели не вірні дані у полі рік вашого народження!';
}
else if (parceYear <= 1900) {
  alert('Вам не може бути стільки років')
  userAgeMessage = 'Ви ввели не вірні дані у полі рік вашого народження!';
}
else if (parceYear >= 2025) {
  alert('Ви з майбутнього?')
  userAgeMessage = 'Ви ввели не вірні дані у полі рік вашого народження!';

}
else {
  userAge = nowYear - parceYear;
  userAgeMessage = `В 2025 році вам має бути ${userAge} роки(ів).`
}

let userLive = prompt('В якому місті ви проживаєте?');

if (userLive === null || userLive === '') {
  alert(`Ви відмовились вводити ваше місто проживання!`)
  userCityMessage = `Ви відмовились вводити ваше місто проживання!`;
}
else if (userLive.toLowerCase() === 'вашингтон') {
  userCityMessage = 'Ви живете у столиці Сполучених Штатів - Вашингтоні!';
}
else if (userLive.toLowerCase() === 'лондон') {
  userCityMessage = 'Ви живете у столиці Англії - Лондоні!';
}
else if (userLive.toLowerCase() === 'київ') {
  userCityMessage = 'Ви живете у столиці України - Києві!';
}
else if (!isNaN(userLive)) {
  alert(`Ви ввели не назву міста а значення!`)
  userCityMessage = `Ви відмовились вводити ваше місто проживання!`;
}
else {
  city = userLive.trim();
  userCityMessage = `Ви живете у місті: ${city}.`;
}

let userHobbi = prompt(`Який ваш улюблений вид спорту?`);
if (userHobbi === null || userHobbi === '') {
  alert(`Ви відмовились вводити ваше хобі.`)
  userHobbiMessage = `Ви відмовились вводити ваше хобі.`;
}
else if (userHobbi.toLowerCase() === `футбол`) {
  alert(`Круто! Хочете бути як Шевченко?`)
  hobbi = userHobbi.trim();
  userHobbiMessage = `Ваше хобі: ${hobbi}.`
}
else if (userHobbi.toLowerCase() === `баскетбол`) {
  alert(`Круто! Хочеш бути як Майкл Джордан?`)
  hobbi = userHobbi.trim();
  userHobbiMessage = `Ваше хобі: ${hobbi}.`
}
else if (userHobbi.toLowerCase() === `волейбол`) {
  alert(`Круто! Хочеш бути як Плотницький?`)
  hobbi = userHobbi.trim();
  userHobbiMessage = `Ваше хобі: ${hobbi}.`
}
else if (!isNaN(userHobbi)) {
  alert(`Ви ввели не хобі а значення!`)
  userHobbiMessage = `Ви відмовились вводити ваше хобі!`;
}
else {
  hobbi = userHobbi.trim();
  userHobbiMessage = `Ваше хобі: ${hobbi}.`
}





alert(`${userAgeMessage} ${userCityMessage} ${userHobbiMessage}`)