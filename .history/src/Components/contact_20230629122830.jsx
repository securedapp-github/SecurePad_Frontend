import React from 'react';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div style={{ backgroundImage: `${theme === 'Dark' ? 'linear-gradient(to right, black, rgb(1, 14, 61))' : 'linear-gradient(to right, #FBFBFB, #bff2d9)'}`, padding: '2vw 34vw' }}>
      <h1 className="head" style={{ color: `${theme === 'Dark' ? 'white' : 'black'}`, borderBottom: `1px solid ${theme === 'Dark' ? 'white' : 'black'}` }}>Contact Us</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '42vh' }}>
        <div style={{ marginTop: '2vw', textAlign: 'center', backgroundColor: `${theme === 'Dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`, padding: '2vw', borderRadius: '10px' }}>
          <p style={{ textAlign: 'left', marginRight: '1.5vw',paddingRight: '1vw' }}>
            Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
          <hr style={{ borderTop: '2px solid white', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left' }}>
            Twitter: <a href="https://twitter.com/your-twitter">your-twitter</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left' }}>
            Telegram: <a href="https://t.me/your-telegram">your-telegram</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left' }}>
            Documentation: <a href="https://example.com/documentation">Documentation</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1.5vw', width: '100%', marginLeft: '1%' }} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
