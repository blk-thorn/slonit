function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNum() {
    const numToGuess = generateRandomNum(1, 100);
    console.log(`Компьютер 1 загадал число: ${numToGuess}.\n`);

    let minNum = 1;
    let maxNum = 100;
    let attempts = 0;

    while (true) {
        const guess = Math.floor((minNum + maxNum) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}.`);
        attempts++;

        if (guess < numToGuess) {
            console.log("Компьютер 1: Больше.");
            minNum = guess + 1;
        } else if (guess > numToGuess) {
            console.log("Компьютер 1: Меньше.");
            maxNum = guess - 1;
        } else {
            console.log("Компьютер 1: Угадал!");
            break;
        }
    }

    console.log(`Компьютер 2 угадал число ${numToGuess} за ${attempts} попыток.`);
}

guessNum();