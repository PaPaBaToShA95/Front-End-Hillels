let N = (prompt("Введіть ціле число"));
for (let i = 1; i <= 100; i++) {
    if (N === null) {
        console.log(`Ви відмовились вводити число`);
        return;
    }
    if (i * i <= N) {
        console.log(i);
    }
}
