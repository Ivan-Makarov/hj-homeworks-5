'use strict';

const request = new XMLHttpRequest();
const catalogue = document.querySelector('#content');
catalogue.innerHTML = "";

request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/')
request.send();

request.addEventListener('load', () => {
    let bookList = JSON.parse(request.responseText)

    bookList.forEach(book => {
        catalogue.innerHTML += '<li ' +
        'data-title="' +
        book.title +
        '" data-author="' +
        book.author.name +
        '" data-info="' +
        book.info +
        '" data-price="' +
        book.price +
        '">' +
        '<img src="' +
        book.cover.small +
        '"></li>';
    })
});
