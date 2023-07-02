import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLink } from '@fortawesome/free-solid-svg-icons';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div  style={{ backgroundImage: `${theme === 'Dark' ? 'linear-gradient(to right, black, rgb(1, 14, 61))' : 'linear-gradient(to right, #FBFBFB, #bff2d9)'}`,  backgroundSize: 'cover', backgroundPosition: 'center',
    padding: '3vw', display: 'flex',justifyContent: 'center',
    alignItems: 'center',
   }}>
      

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '42vh' }}>
        <div style={{ marginTop: '2vw', textAlign: 'center', backgroundColor: `${theme === 'Dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`, padding: '2vw', borderRadius: '10px',boxSizing: 'inherit', }}>

        <h1 className="head contact" style={{ color: `${theme === 'Dark' ? 'white' : 'black'}`, }}>Contact Us</h1>



          <p style={{ textAlign: 'left', marginBottom: '1.5vw',  color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'skyblue', marginRight: '0.9vw' }} />
            <a href="mailto:your-email@example.com" style={{ color: 'darkkgreen', textDecoration: 'none' }}>your-email@example.com</a>
          </p>
          <hr style={{ borderTop: '2px solid white', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left', marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Twitter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLink} style={{ color: 'skyblue', marginRight: '0.9vw' }} />
             <a href="https://twitter.com/your-twitter" style={{ color: 'skyblue', textDecoration: 'none' }}>your-twitter</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left', marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Telegram:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            <FontAwesomeIcon icon={faLink} style={{ color: 'skyblue', marginRight: '0.9vw' }} />
            <a href="https://t.me/your-telegram" style={{ color: 'skyblue', textDecoration: 'none' }}>your-telegram</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1vw', width: '100%', marginLeft: '1%' }} />
          <p style={{ textAlign: 'left', marginBottom: '1.5vw', color: `${theme === 'Dark' ? 'white' : 'rgba(255, 255, 255, 0.8)'}` }}>
            Documentation: &nbsp; 
            <FontAwesomeIcon icon={faLink} style={{ color: 'skyblue', marginRight: '0.9vw' }} />
            <a href="https://example.com/documentation" style={{ color: 'skyblue', textDecoration: 'none' }}>Documentation</a>
          </p>
          <hr style={{ borderTop: '2px solid #f2f2f2', margin: '1.5vw 1.5vw', width: '100%', marginLeft: '1%' }} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
