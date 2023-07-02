import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLink } from '@fortawesome/free-solid-svg-icons';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div className={`contact-container ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
      
      <div className="center-container">
        
       <div className={`contact-content ${theme === 'Dark' ? 'dark-bg' : 'light-bg'}`}>

             <h1 className={`head contact ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>Contact Us </h1>

         <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FontAwesomeIcon icon={faEnvelope} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />

            <a href="mailto:your-email@example.com" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>your-email@example.com</a>
         </p>
          <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />

         <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

            Twitter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
            <a href="https://twitter.com/your-twitter" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>your-twitter</a>
         </p>

          <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
         <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>
          
            Telegram:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
            <a href="https://t.me/your-telegram" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>your-telegram</a>
         </p>
          <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
         <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

            Documentation: &nbsp;

            <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
            <a href="https://example.com/documentation" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>Documentation</a>

         </p>
         
        </div>
      </div>
    </div>
  );
}

export default Contact;