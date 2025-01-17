let input = prompt("Введіть ваше слово або речення");
let delet = prompt("Введіть літери без пробілів які вам необхідно видалити(видаляються всі однакові літери, враховуйте регістр)");


let inputarr = input.split('');



inputarr = inputarr.filter(function (item) {
    return !delet.includes(item);
});


let result = inputarr.join('');
alert(result); 
