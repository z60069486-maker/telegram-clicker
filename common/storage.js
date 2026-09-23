const COINS_KEY = "qwert";

// Получить количество монет
function getCoins() {
    const coins = localStorage.getItem(COINS_KEY);

    // Если монет ещё нет, начинаем с 0
    if (coins === null) {
        return 0;
    }

    return Number(coins);
}

// Установить количество монет
function setCoins(amount) {
    localStorage.setItem(COINS_KEY, amount);
}

const GEMS_KEY = "zxcv";

// Получить количество алмазов
function getGems() {
    const gems = localStorage.getItem(GEMS_KEY);

    // Если алмазов ещё нет, начинаем с 0
    if (gems === null) {
        return 0;
    }

    return Number(gems);
}

// Установить количество алмазов
function setGems(amount) {
    localStorage.setItem(GEMS_KEY, amount);
}