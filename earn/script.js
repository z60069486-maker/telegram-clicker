// Получаем баланс из localStorage
const balanceElement = document.getElementById("balance");

let balance = Number(localStorage.getItem("qwert"));

// Если баланса ещё нет — создаём его
if (isNaN(balance)) {
    balance = 0;
    localStorage.setItem("qwert", balance);
}

// Показываем баланс
balanceElement.textContent = balance;