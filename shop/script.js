// Находим кнопку покупки
const buyButton = document.getElementById("buyButton");

// Находим поле для сообщений
const message = document.getElementById("message");

// Цена товара в кристаллах
const productPrice = 100;

// Ключ кристаллов в общем хранилище
const crystalsKey = "zxcv";

// Обработчик нажатия на кнопку "Купить"
buyButton.addEventListener("click", function () {

    // Получаем текущий баланс кристаллов
    let crystals = Number(localStorage.getItem(crystalsKey)) || 0;

    // Проверяем, хватает ли кристаллов
    if (crystals < productPrice) {

        // Если кристаллов недостаточно
        message.textContent = "Недостаточно кристаллов!";

        return;
    }

    // Списываем 100 кристаллов
    crystals -= productPrice;

    // Сохраняем новый баланс
    localStorage.setItem(crystalsKey, crystals);

    // Показываем сообщение об успешной покупке
    message.textContent = "Покупка успешно совершена!";

});