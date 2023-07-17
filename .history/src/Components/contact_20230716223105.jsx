import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Img from '../assets/Illustration.png';
import mail from '../assets/mail.png';
import twitter from '../assets/twitter.png';
import send from '../assets/send.png';
import paperclip from '../assets/paperclip.png';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <span className="contact-heading" style={{ color: '#00FF83' }}>Contact us</span>
      <br />
      <div className="box-container">
        <div className="image-container">
          <img src={Img} alt="Centered Image" className="centered-image" />
        </div>
        <div className={`contact-container ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
          <div className="inner-container">
            <div className={`contact-content ${theme === 'Dark' ? 'dark-bg' : 'light-bg'}`}>
              <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>
                <img src={mail} alt="Email" className="contact-image" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="mailto:himanshu@securedapp.in" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>himanshu@securedapp.in</a>
              </p>
              <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
              <p className="contact-text">
                <img src={twitter} alt="Twitter" className="contact-image" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                <a target="_blank" href="https://twitter.com/Secure_DApp" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>Twitter</a>
              </p>
              <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
              <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>
                <img src={send} alt="Telegram" className="contact-image" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                <a target="_blank" href="https://t.me/secureDApp" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>Telegram</a>
              </p>
              <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
              <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>
                <img src={paperclip} alt="Paperclip" className="contact-image" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                <a target="_blank" href="https://securedapp.gitbook.io/securedapp-launchpad/" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>Documentation</a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-container">
          <div className="text2-container">
            <div className="contact-heading" style={{ color: '#00FF83' }}>Get in Touch</div>
            <div className="contact-subheading">Any question or remarks? Let us know!</div>
            <div>
              <input type="text" placeholder="Enter your name" className="input-box" />
            </div>
            <div>
              <input type="text" placeholder="Enter your email" className="input2-box" />
            </div>
            <div>
              <input type="text" placeholder="Type your message here" className="input3-box" />
            </div>
            <div>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
