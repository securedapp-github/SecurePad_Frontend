import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="head contact">Contact Us</h1>

        <p className="contact-text">
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:your-email@example.com" className="contact-link">your-email@example.com</a>
        </p>
        <hr className="contact-hr" />
        <p className="contact-text">
          Twitter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faLink} className="contact-icon" />
          <a href="https://twitter.com/your-twitter" className="contact-link">your-twitter</a>
        </p>
        <hr className="contact-hr" />
        <p className="contact-text">
          Telegram:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faLink} className="contact-icon" />
          <a href="https://t.me/your-telegram" className="contact-link">your-telegram</a>
        </p>
        <hr className="contact-hr" />
        <p className="contact-text">
          Documentation: &nbsp;
          <FontAwesomeIcon icon={faLink} className="contact-icon" />
          <a href="https://example.com/documentation" className="contact-link">Documentation</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
