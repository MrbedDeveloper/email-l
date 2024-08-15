"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.tsx
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const nodemailer_1 = __importDefault(require("nodemailer"));
const WelcomeEmail_1 = __importDefault(require("./emailTemplates/WelcomeEmail"));
const express_1 = __importDefault(require("express"));
// Инициализация Express
const app = (0, express_1.default)();
const port = 3000; // Порт, на котором будет работать сервер
// Настройка SMTP-транспорта
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'admin@mtb-bank.ru',
        pass: 'V6fysd4pj5nWCQt7u3az',
    },
});
// Функция для отправки письма
const sendEmail = (email, userName) => __awaiter(void 0, void 0, void 0, function* () {
    // Генерация HTML из компонента
    const htmlEmail = (0, server_1.renderToString)(react_1.default.createElement(WelcomeEmail_1.default, { userName: userName }));
    const mailOptions = {
        from: 'admin@mtb-bank.ru',
        to: email,
        subject: 'Поздравляем, вы выиграли приз!',
        html: htmlEmail,
    };
    try {
        const info = yield transporter.sendMail(mailOptions);
        console.log(`Письмо отправлено на ${email}: ${info.messageId}`);
        return `Письмо отправлено на ${email}`;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Ошибка при отправке на ${email}:`, error.message);
            throw new Error(`Ошибка при отправке на ${email}: ${error.message}`);
        }
        else {
            console.error(`Неизвестная ошибка при отправке на ${email}:`, error);
            throw new Error(`Неизвестная ошибка при отправке на ${email}`);
        }
    }
});
// Определяем маршрут для отправки писем
app.get('/send-email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const userName = req.query.userName || 'Пользователь';
    if (!email) {
        return res.status(400).send('Требуется указать email в запросе');
    }
    try {
        const result = yield sendEmail(email, userName);
        res.send(result);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('Неизвестная ошибка');
        }
    }
}));
// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
