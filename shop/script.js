// =============================
// ОТОБРАЖЕНИЕ БАЛАНСА
// =============================

// Находим поле баланса
const crystalsBalance = document.getElementById("crystalsBalance");

// Получаем общий баланс кристаллов
let currentCrystals = Number(localStorage.getItem("zxcv")) || 0;

// Показываем баланс
crystalsBalance.textContent = currentCrystals;

// =============================
// КНОПКИ ПОКУПКИ
// =============================

// Получаем все кнопки "Купить"
const buyButtons = document.querySelectorAll(".buyButton");

// Поле для сообщений
const message = document.getElementById("message");

// Ключ кристаллов в общем хранилище
const crystalsKey = "zxcv";


// =============================
// ОБРАБОТКА ТОВАРОВ
// =============================

buyButtons.forEach(function (button, index) {

    // Уникальный ключ для этого товара
    const productKey = "shop_product_" + index;

    // Проверяем, был ли товар уже куплен
    const alreadyBought = localStorage.getItem(productKey);

    // Если товар уже куплен
    if (alreadyBought === "true") {

        button.textContent = "Куплено";
        button.disabled = true;

    }


    // =============================
    // ПОКУПКА
    // =============================

    button.addEventListener("click", function () {

        // Если товар уже куплен — ничего не делаем
        if (localStorage.getItem(productKey) === "true") {
            return;
        }


        // Получаем цену товара
        const productPrice = Number(button.dataset.price);


        // Получаем текущий баланс кристаллов
        let crystals = Number(localStorage.getItem(crystalsKey)) || 0;


        // Проверяем баланс
        if (crystals < productPrice) {

            message.textContent = "Недостаточно кристаллов!";

            return;
        }


        // =============================
        // СПИСЫВАЕМ КРИСТАЛЛЫ
        // =============================

        crystals -= productPrice;

        localStorage.setItem(crystalsKey, crystals);

        // Обновляем отображение баланса
        crystalsBalance.textContent = crystals;


        // =============================
        // СОХРАНЯЕМ ПОКУПКУ
        // =============================

        localStorage.setItem(productKey, "true");


        // Меняем кнопку
        button.textContent = "Куплено";

        // Запрещаем повторное нажатие
        button.disabled = true;


        // Сообщение
        message.textContent = "Покупка успешно совершена!";
    });

});


// =============================
// КНОПКА "НАЗАД"
// =============================

const backButton = document.getElementById("backButton");

// Возвращаемся в меню
backButton.addEventListener("click", function () {

    window.location.href = "../menu/index.html";

});
