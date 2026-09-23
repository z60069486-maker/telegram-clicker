const COINS_KEY = "qwert";
const DIAMONDS_KEY = "zxcv";

const coinsElement = document.getElementById("coins");
const diamondsElement = document.getElementById("diamonds");

const coinsInput = document.getElementById("coinsInput");
const diamondsOutput = document.getElementById("diamondsOutput");
const exchangeButton = document.getElementById("exchangeButton");
const message = document.getElementById("message");

// Курс: 100 монет = 1 кристалл
const EXCHANGE_RATE = 1;

// Получить баланс
function getBalance(key) {
    const value = localStorage.getItem(key);

    if (value === null) {
        return 0;
    }

    return Number(value);
}

// Установить баланс
function setBalance(key, value) {
    localStorage.setItem(key, value);
}

// Обновить баланс на экране
function updateBalance() {
    coinsElement.textContent = getBalance(COINS_KEY);
    diamondsElement.textContent = getBalance(DIAMONDS_KEY);
}

updateBalance();

// Расчёт количества кристаллов
coinsInput.addEventListener("input", () => {
    const coins = Number(coinsInput.value) || 0;
    const diamonds = Math.floor(coins / EXCHANGE_RATE);

    diamondsOutput.textContent = diamonds;
});

// Обмен
exchangeButton.addEventListener("click", () => {
    const coinsToExchange = Number(coinsInput.value);

    if (coinsToExchange <= 0) {
        message.textContent = "Введите количество монет";
        return;
    }

    const coins = getBalance(COINS_KEY);

    if (coinsToExchange > coins) {
        message.textContent = "Недостаточно монет";
        return;
    }

    const diamondsToAdd = Math.floor(coinsToExchange / EXCHANGE_RATE);

    if (diamondsToAdd <= 0) {
        message.textContent = "Минимум 100 монет";
        return;
    }

    const coinsSpent = diamondsToAdd * EXCHANGE_RATE;
    const diamonds = getBalance(DIAMONDS_KEY);

    setBalance(COINS_KEY, coins - coinsSpent);
    setBalance(DIAMONDS_KEY, diamonds + diamondsToAdd);

    coinsInput.value = "";
    diamondsOutput.textContent = "0";

    updateBalance();

    message.textContent = `Получено кристаллов: ${diamondsToAdd}`;
});
