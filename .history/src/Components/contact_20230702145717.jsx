import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLink } from '@fortawesome/free-solid-svg-icons';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div className={`contact-container ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
      
       <div className="center-container">
        
       <div className={container ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>

        <h1 className="head contact" style={{ color: `${theme === 'Dark' ? 'white' : 'black'}`,padding: '10px auto', background: 'transparent', padding: '10px', borderRadius: '16px',display: 'inline-block' }}>Contact Us</h1>



          <p className="contact-text" style={{ textAlign: 'left', marginBottom: '1.5vw',  color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'lightgreen', marginRight: '0.9vw' }} />
            <a href="mailto:your-email@example.com" className="contact-link" style={{ color: 'lightgreen', textDecoration: 'none' }}>your-email@example.com</a>
          </p>
          <hr style={{ borderTop: '2px solid white', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p className="contact-text" style={{ textAlign: 'left', marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Twitter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLink} style={{ color: 'lightgreen', marginRight: '0.9vw' }} />
             <a href="https://twitter.com/your-twitter" className="contact-link" style={{ color: 'lightgreen', textDecoration: 'none' }}>your-twitter</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p className="contact-text" style={{ textAlign: 'left', marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Telegram:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            <FontAwesomeIcon icon={faLink} style={{ color: 'lightgreen', marginRight: '0.9vw' }} />
            <a href="https://t.me/your-telegram" className="contact-link" style={{ color: 'lightgreen', textDecoration: 'none' }}>your-telegram</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p className="contact-text" style={{ textAlign: 'left',  marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Documentation: &nbsp; 
            <FontAwesomeIcon icon={faLink} style={{ color: 'lightgreen', marginRight: '0.9vw' }} />
            <a href="https://example.com/documentation" className="contact-link" style={{ color: 'lightgreen', textDecoration: 'none' }}>Documentation</a>
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default Contact;
