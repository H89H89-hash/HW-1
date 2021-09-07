"use strict";

//Create password and create question
const ADMIN_PASSWORD = "jqueryismyjam";
let message = "Доступ запрещен,неверный пароль";
let password = prompt("Введите пароль");

if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
}
alert(message);
