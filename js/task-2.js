"use strict";

let total = 100;
let order = prompt("Сколько вы хотите заказать?");

if (order > total) {
  alert("Товаров не хватает");
}
if (order <= total) {
  alert("Заказ оформлен, с вами свяжеться менеджер");
}
