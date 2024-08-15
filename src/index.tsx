// src/index.tsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import WelcomeEmail from './emailTemplates/WelcomeEmail';
import express from 'express';

// Инициализация Express
const app = express();
const port = 3000; // Порт, на котором будет работать сервер

// Настройка SMTP-транспорта
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'ваша почта',
    pass: 'пароль от почты',
  },
});

// Функция для отправки письма
const sendEmail = async (email: string, userName: string) => {
  // Генерация HTML из компонента
  const htmlEmail = renderToString(<WelcomeEmail userName={userName} />);

  const mailOptions = {
    from: 'ваша почта',
    to: email,
    subject: 'Поздравляем, вы выиграли приз!',
    html: htmlEmail,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Письмо отправлено на ${email}: ${info.messageId}`);
    return `Письмо отправлено на ${email}`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Ошибка при отправке на ${email}:`, error.message);
      throw new Error(`Ошибка при отправке на ${email}: ${error.message}`);
    } else {
      console.error(`Неизвестная ошибка при отправке на ${email}:`, error);
      throw new Error(`Неизвестная ошибка при отправке на ${email}`);
    }
  }
};

// Определяем маршрут для отправки писем
app.get('/send-email', async (req, res) => {
  const email = req.query.email as string;
  const userName = (req.query.userName as string) || 'Пользователь';

  if (!email) {
    return res.status(400).send('Требуется указать email в запросе');
  }

  try {
    const result = await sendEmail(email, userName);
    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Неизвестная ошибка');
    }
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
