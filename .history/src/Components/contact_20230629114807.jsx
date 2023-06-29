import React from 'react';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div style={{ backgroundImage: `${theme === 'Dark' ? 'linear-gradient(to right, black, rgb(14, 14, 61))' : 'linear-gradient(to right, #FBFBFB, #bff2d9)'}`, padding: '2vw 20vw' }}>
      <h1 className="head" style={{ color: `${theme === 'Dark' ? 'white' : 'black'}`, borderBottom: `1px solid ${theme === 'Dark' ? 'white' : 'black'}` }}>Contact Us</h1>
      <form method="post" style={{ padding: '0 2%' }} action="">
        {/* Your form inputs go here */}
      </form>
      <div style={{ marginTop: '2vw' }}>
        <p>
          Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
        <hr style={{ borderTop: '2px solid white', margin: '1.5vw 0' }} />
        <p>
          Twitter: <a href="https://twitter.com/your-twitter">your-twitter</a>
        </p>
        <hr style={{ borderTop: '1px solid #f2f2f2', margin: '1.5vw 0' }} />
        <p>
          Telegram: <a href="https://t.me/your-telegram">your-telegram</a>
        </p>
        <hr style={{ borderTop: '1px solid #f2f2f2', margin: '1.5vw 0' }} />
        <p>
          Documentation: <a href="https://example.com/documentation">Documentation</a>
        </p>
        <hr style={{ borderTop: '1px solid #f2f2f2', margin: '1.5vw 0' }} />
      </div>
    </div>
  );
}

export default Contact;
