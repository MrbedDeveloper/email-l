"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_email_1 = require("react-email");
// Пример данных для письма
const userName = 'Иван';
// Генерация HTML из компонента
const htmlEmail = (0, react_email_1.render)(userName, { userName } /  > );
console.log(htmlEmail);
// Здесь вы можете отправить email, используя любой почтовый клиент, например nodemailer
