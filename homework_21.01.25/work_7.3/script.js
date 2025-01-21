for (let i = 0; i < 10; i++) {
    let num = prompt("Введіть число більше 100");


    if (num === null) {
        console.log("Ви відмовились вводити число");
        break;
    }

    let numb = parseInt(num, 10);


    if (isNaN(numb)) {
        console.log(`Ви ввели: ${num}`);
        break;
    }


    if (numb < 100) {
        console.log("Ви ввели число менше 100, введіть ще раз");
    }


    if (numb > 100) {
        console.log(`Ви ввели число: ${num}`);
        break;
    }


    if (i === 9) {
        console.log(`Ви ввели число: ${num}`);
    }
}
