const balanceElement = document.getElementById("balance");
const tapButton = document.getElementById("tapButton");

// Получаем текущий баланс
let balance = Number(localStorage.getItem("qwert"));

// Если баланса ещё нет
if (isNaN(balance)) {
    balance = 0;
    localStorage.setItem("qwert", balance);
}

// Показываем баланс
function updateBalance() {
    balanceElement.textContent = balance;
}

updateBalance();

// Тап
tapButton.addEventListener("click", () => {
    balance += 1;

    // Сохраняем новый баланс
    localStorage.setItem("qwert", balance);

    // Обновляем отображение
    updateBalance();
});