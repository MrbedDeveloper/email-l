"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeEmail = void 0;
const react_1 = __importDefault(require("react"));
const react_email_1 = require("react-email");
const components_1 = require("@react-email/components");
// Пример компонента для приветственного письма
const WelcomeEmail = ({ userName }) => {
    return (<react_email_1.Html>
      <components_1.Head />
      <components_1.Body>
        <components_1.Container>
          <components_1.Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Добро пожаловать, {userName}!</components_1.Text>
          <components_1.Text>Спасибо, что зарегистрировались в нашем сервисе. Мы рады вас видеть!</components_1.Text>
        </components_1.Container>
      </components_1.Body>
    </react_email_1.Html>);
};
exports.WelcomeEmail = WelcomeEmail;
