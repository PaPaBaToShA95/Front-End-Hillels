for (let i = 0; i < 10; i++) {
    let num = prompt("Введіть число від 10 до 100");
    let numb = parseInt(num, 10);

    if (isNaN(numb) || num === null) {
        console.log("Ви відмовились вводити число або ввели не число");
    }
    if (numb < 100) {
        console.log(`Ви ввели число менше 100, введіть ще раз`)
    }
    if (numb > 100) {
        console.log(`Ви ввели ${num}`)
        break
    }
    if (i === 9)
        console.log(`Ви ввели ${num}`)


}
