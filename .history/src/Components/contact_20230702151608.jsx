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

       <h1 className={`head contact ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>Contact Us</h1>



          