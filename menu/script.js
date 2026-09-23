// ========================================
// ПОКАЗЫВАЕМ БАЛАНС
// ========================================

// Находим место, где показываются монеты
const coinsBalance = document.getElementById("coinsBalance");

// Находим место, где показываются алмазы
const gemsBalance = document.getElementById("gemsBalance");


// Получаем текущий баланс из общего хранилища
const coins = getCoins();
const gems = getGems();


// Показываем баланс на экране
coinsBalance.textContent = coins + " 🪙";
gemsBalance.textContent = gems + " 💎";

// ========================================
// ПЕРЕХОДЫ ПО КНОПКАМ
// ========================================

// Находим кнопки
const earnButton = document.getElementById("earnButton");
const playButton = document.getElementById("playButton");
const exchangeButton = document.getElementById("exchangeButton");
const shopButton = document.getElementById("shopButton");


// Кнопка "Заработать"
earnButton.addEventListener("click", function () {
    window.location.href = "../earn/index.html";
});


// Кнопка "Играть"
playButton.addEventListener("click", function () {
    window.location.href = "../play/index.html";
});


// Кнопка "Обменник"
exchangeButton.addEventListener("click", function () {
    window.location.href = "../exchange/index.html";
});


// Кнопка "Магазин"
shopButton.addEventListener("click", function () {
    window.location.href = "../shop/index.html";
});