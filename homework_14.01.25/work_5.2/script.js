let result = "";
let i = 10;
while (i <= 100) {
    result = i * 26;
    console.log(`Кількість доларів ${i} - вартість у гривні ${result}`);
    if (i === 100)
        console.log(`Єх, були часи...`);
    i = i + 10;
}
