$(document).ready(function() {
    sayHello();
    sayLorem();
});

function sayHello () {
    $('h1').html('Hello Coding Factory!')
}

function sayLorem() {
    //const p = $('<p>');
    const p = $(document.createElement('p'));
    p.html('Lorem ipsum, dolor ....');
    $('body').append(p);
}

function sayHelloCF() {
    $('<div class ="container">').appendTo('body');
    $('<p class= "cf-text">').appendTo('.container');
    $('.cf-text').html('Hello Coding Factory');
}