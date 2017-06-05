'use strict';

const request = new XMLHttpRequest();
const catalogue = document.querySelector('#content');
catalogue.innerHTML = '';

request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/')
request.send();

request.addEventListener('load', () => {
    let bookList = JSON.parse(request.responseText)

    function getBookInfo(book) {
        let bookInfo = `<li data-title="${book.title}" data-author="${book.author.name}" data-info="${book.info}" data-price="${book.price}"><img src="${book.cover.small}"></li>`;

        return bookInfo
    }

    let catalogueInfo = bookList.map(getBookInfo);

    let catalogueHTML = catalogueInfo.join('');

    catalogue.innerHTML = catalogueHTML;
});
