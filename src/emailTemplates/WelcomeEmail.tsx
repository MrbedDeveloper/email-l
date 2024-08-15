// src/emailTemplates/WelcomeEmail.tsx
import React from 'react';

interface WelcomeEmailProps {
  userName: string;
}

const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ userName }) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '650px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #e2ebf0, #ffffff)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
  }}>
    {/* Decorative Circles */}
    <div style={{
      position: 'absolute',
      top: '-30px',
      left: '-30px',
      width: '100px',
      height: '100px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      opacity: 0.3,
      zIndex: 0,
    }} />
    <div style={{
      position: 'absolute',
      bottom: '-30px',
      right: '-30px',
      width: '150px',
      height: '150px',
      backgroundColor: '#28a745',
      borderRadius: '50%',
      opacity: 0.3,
      zIndex: 0,
    }} />

    <div style={{ position: 'relative', zIndex: 1 }}>
      <img
        src="https://"
        alt="Prize"
        style={{
          width: '120px',
          height: 'auto',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ color: '#333', fontSize: '28px' }}>Поздравляем, {userName}!</h1>
      <p style={{ color: '#555', fontSize: '18px', margin: '0 20px' }}>
       KTECH лучший впн провайдер 
      </p>
      <p style={{ color: '#555', fontSize: '18px', marginTop: '20px' }}>
        подключить
        <a
          href="http://"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginLeft: '5px'
          }}
        >
         
        </a>
      </p>
      <div style={{ marginTop: '30px' }}>
        <a
          href="http://"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#28a745',
            padding: '15px 25px',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
        >
          Оформить детали
        </a>
      </div>
      <div style={{ marginTop: '40px', padding: '0 20px' }}>
        
        <p style={{ color: '#555', fontSize: '16px' }}>
          
        </p>
        <a
          href="http://"
          style={{
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
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
         подключится
        </a>
      </div>
      <footer style={{ marginTop: '40px', color: '#777', fontSize: '14px' }}>
        <p>KTECH,</p>
        <p>Josh Hawley</p>
      </footer>
    </div>
  </div>
);

export default WelcomeEmail;
