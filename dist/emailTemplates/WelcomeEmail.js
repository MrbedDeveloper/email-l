"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/emailTemplates/WelcomeEmail.tsx
const react_1 = __importDefault(require("react"));
const WelcomeEmail = ({ userName }) => (react_1.default.createElement("div", { style: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '650px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, #e2ebf0, #ffffff)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        position: 'relative',
    } },
    react_1.default.createElement("div", { style: {
            position: 'absolute',
            top: '-30px',
            left: '-30px',
            width: '100px',
            height: '100px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            opacity: 0.3,
            zIndex: 0,
        } }),
    react_1.default.createElement("div", { style: {
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            backgroundColor: '#28a745',
            borderRadius: '50%',
            opacity: 0.3,
            zIndex: 0,
        } }),
    react_1.default.createElement("div", { style: { position: 'relative', zIndex: 1 } },
        react_1.default.createElement("img", { src: "https://", alt: "Prize", style: {
                width: '120px',
                height: 'auto',
                borderRadius: '50%',
                marginBottom: '20px',
            } }),
        react_1.default.createElement("h1", { style: { color: '#333', fontSize: '28px' } },
            "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C, ",
            userName,
            "!"),
        react_1.default.createElement("p", { style: { color: '#555', fontSize: '18px', margin: '0 20px' } }, "KTECH \u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u043F\u043D \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440"),
        react_1.default.createElement("p", { style: { color: '#555', fontSize: '18px', marginTop: '20px' } },
            "\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
            react_1.default.createElement("a", { href: "http://", style: {
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginLeft: '5px'
                } })),
        react_1.default.createElement("div", { style: { marginTop: '30px' } },
            react_1.default.createElement("a", { href: "http://", style: {
                    textDecoration: 'none',
                    color: '#fff',
                    backgroundColor: '#28a745',
                    padding: '15px 25px',
                    borderRadius: '30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s',
                }, onMouseOver: (e) => (e.currentTarget.style.backgroundColor = '#218838'), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = '#28a745') }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438")),
        react_1.default.createElement("div", { style: { marginTop: '40px', padding: '0 20px' } },
            react_1.default.createElement("p", { style: { color: '#555', fontSize: '16px' } }),
            react_1.default.createElement("a", { href: "http://", style: {
                    textDecoration: 'none',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    padding: '15px 25px',
                    borderRadius: '30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s',
                    marginTop: '20px',
                    display: 'inline-block'
                }, onMouseOver: (e) => (e.currentTarget.style.backgroundColor = '#0056b3'), onMouseOut: (e) => (e.currentTarget.style.backgroundColor = '#007bff') }, "\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F")),
        react_1.default.createElement("footer", { style: { marginTop: '40px', color: '#777', fontSize: '14px' } },
            react_1.default.createElement("p", null, "KTECH,"),
            react_1.default.createElement("p", null, "Josh Hawley")))));
exports.default = WelcomeEmail;
