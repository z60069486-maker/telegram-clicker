const balanceElement = document.getElementById("zxcv");


const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const betInput = document.getElementById("betInput");
const minusBet = document.getElementById("minusBet");
const plusBet = document.getElementById("plusBet");
const spinButton = document.getElementById("spinButton");

const result = document.getElementById("result");

const symbols = [
    "❤️",
    "♠️",
    "👑",
    "🍀",
    "⭐",
    "💎"
];

let spinning = false;


// Обновление общего баланса
function updateBalance() {
    balanceElement.textContent = getGems();
}


// Кнопка -
minusBet.addEventListener("click", () => {
    let bet = Number(betInput.value) || 1;

    bet--;

    if (bet < 1) {
        bet = 1;
    }

    betInput.value = bet;
});


// Кнопка +
plusBet.addEventListener("click", () => {
    let bet = Number(betInput.value) || 1;

    bet++;

    betInput.value = bet;
});


// Не даём поставить меньше 1
betInput.addEventListener("input", () => {
    let bet = Number(betInput.value);

    if (bet < 1 || isNaN(bet)) {
        betInput.value = 1;
    }
});


// Кнопка Крутить
spinButton.addEventListener("click", () => {

    if (spinning) {
        return;
    }

    const bet = Number(betInput.value);
    const gems = getGems();

    // Проверка ставки
    if (!bet || bet < 1) {
        result.textContent = "Минимальная ставка — 1 💎";
        return;
    }

    if (bet > gems) {
        result.textContent = "Недостаточно 💎";
        return;
    }

    // Начинаем вращение
    spinning = true;
    spinButton.disabled = true;

    result.textContent = "";

    // Списываем ставку из общего баланса
    setGems(gems - bet);
    updateBalance();

    let count = 0;

    const animation = setInterval(() => {

        slot1.textContent = randomSymbol();
        slot2.textContent = randomSymbol();
        slot3.textContent = randomSymbol();

        count++;

        if (count >= 15) {
            clearInterval(animation);

            finishGame(bet);
        }

    }, 100);
});


// Завершение игры
function finishGame(bet) {

    const first = slot1.textContent;
    const second = slot2.textContent;
    const third = slot3.textContent;

    let win = 0;

    // Три одинаковых
    if (first === second && second === third) {

        if (first === "👑") {
            win = bet * 10;
        } else if (first === "💎") {
            win = bet * 8;
        } else {
            win = bet * 5;
        }

    // Два одинаковых
    } else if (
        first === second ||
        first === third ||
        second === third
    ) {

        win = bet * 2;
    }


    // Выигрыш
    if (win > 0) {

        setGems(getGems() + win);

        result.textContent = `Вы выиграли ${win} 💎!`;

    } else {

        result.textContent = `Вы проиграли ${bet} 💎`;

    }


    updateBalance();

    spinning = false;
    spinButton.disabled = false;
}

// Случайный символ
function randomSymbol() {
    const index = Math.floor(Math.random() * symbols.length);

    return symbols[index];
}


// Показываем баланс при запуске
updateBalance();