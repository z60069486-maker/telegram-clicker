const ZXCv_KEY = "zxcv";

// Элемент баланса
const zxcvElement = document.getElementById("zxcv");

// Загрузка общего баланса
function loadBalance() {
    const balance = Number(localStorage.getItem(ZXCv_KEY)) || 0;
    zxcvElement.textContent = balance;
}

// Обновление баланса
function updateBalance() {
    loadBalance();
}

// Загружаем баланс при открытии страницы
loadBalance();

// Обновляем баланс, если пользователь вернулся на вкладку
window.addEventListener("focus", updateBalance);

// Кнопка Kazik
const kazikButton = document.getElementById("kazikButton");

kazikButton.addEventListener("click", () => {
    window.location.href = "games/kazik/index.html";
});