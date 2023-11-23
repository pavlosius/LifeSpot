

// Получим коллекцию всех элементов страницы
//let elements = document.getElementsByTagName('*');
// Выведем результат в уведомление
//alert(`Количество элементов на странице:  ${elements.length}`);

/*Код ниже отрабатывает каждый раз при вводе символа в input*/
function filterContent() {
    // Сохраняем текст пользовательского запроса
    //let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');
    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
             elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}


/*
* Функция для проверки и сохранения  данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
*
* */


//function handleSession() {
//    // создадим объект Map для хранения сессии
//    let session = new Map();
//    // Сохраним UserAgent
//    session.set("userAgent", window.navigator.userAgent);
//    // Запросим возраст пользователя и тоже сохраним
//    session.set("age", prompt("Пожалуйста, введите ваш возраст"));
//    // Проверка на возраст и сохранение сессии
//    if (session.get("age") >= 18) {
//        let startDate = new Date().toLocaleString();

//        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
//        session.set("startDate", startDate)
//    }
//    else {
//        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
//        window.location.href = "http://www.google.com"
//    }
//    // возвращаем объект сессии
//    return session;
//}

function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

// Логирование сессии (объявлено через expression)
let sessionLog = function logSession() {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}