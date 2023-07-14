import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Img from '../assets/Illustration.png';
import '../Style/contact.css';

function Contact(props) {
  const { theme } = props;

  return (
    <div className="container">
      <span className="contact-heading" style={{ color: '#00FF83' }}>Contact us</span>
      <br />
      <div className="box-container">
        {/* Content inside the additional container */}
        <div className="inner-container">
          {/* Content inside the inner container */}
          <div className="image-container">
            <img src={Img} alt="Centered Image" className="centered-image" />

            <div className="new-container">
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
