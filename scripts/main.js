let myButton1 = document.getElementById('author1');
let myButton2 = document.getElementById('author2');
let myButton3 = document.getElementById('author3');
let myButton4 = document.getElementById('author4');
let myButton5 = document.getElementById('author5');

let quote1 = '"В своїй хаті своя й правда, І сила, і воля", — Т. Шевченко. ';
let quote2 = '"Вітчизна — ось і альфа, і омега!" — Д. Павличко.';
let quote3 = '"Нації вмирають не від інфаркту. Спочатку їм відбирає мову", — Л. Костенко.';
let quote4 = '"Нема на світі України, немає другого Дніпра", — Т. Шевченко. ';
let quote5 = '"Ще не вмерла України і слава, і воля.", — П. Чубинський. ';

function say(message) {
    alert(message);
}

myButton1.onclick = function () {
    say(quote1);
}
myButton2.onclick = function () {
    say(quote2);
}
myButton3.onclick = function () {
    say(quote3);
}
myButton4.onclick = function () {
    say(quote4);
}
myButton5.onclick = function () {
    say(quote5);
}
