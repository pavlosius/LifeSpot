﻿/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
*
* */
function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    // Добавим на страницу
    writeReview(review)
}



function getComment() {
    // Создаем объект обычного комментария
    let comment = {}

    // Запросим имя
    comment.author = prompt("Как вас зовут ?")
    if (comment.author == null) {
        return
    }

    // Запросим текст
    comment.text = prompt("Оставьте отзыв")
    if (comment.text == null) {
        return
    }

    // Сохраним текущее время
    comment.date = new Date().toLocaleString()

    // Запросим,, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
}

/*
* Запишем отзыв на страницу
*
* */
//const writeReview = review => {
//    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
//        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
//        `<p>${review['comment']}</p>` +
//        '</div>';
//}

const writeReview = review => {
    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    // Запишем результат
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}