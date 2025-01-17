let input = prompt('Введіть ваші дані (цифри та літери), а ми порахуємо середнє арифметичне тільки з цифр');


let arr = input.split('');


let sum = arr
    .filter(item => !isNaN(item) && item !== ' ')
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);


let lengthSum = arr.filter(item => !isNaN(item) && item !== ' ').length;


let result = lengthSum > 0 ? sum / lengthSum : 0;

console.log(result);
alert(result);
