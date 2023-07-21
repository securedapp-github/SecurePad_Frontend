import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import Img from '../assets/Illustration.png';
import mail from '../assets/mail.png';
import twitter from '../assets/twitter.png';
import send from '../assets/send.png';
import paperclip from '../assets/paperclip.png';
import '../Style/contact.css';
import Loader from 'utils/loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {
  const { theme } = props;
  const [name, setName] = useState('');
  const [mails, setMails] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const DB_LINK = process.env.REACT_APP_DB;

  const blurryDivStyle = {
    filter: loading ? 'blur(5px)' : 'blur(0px)'
  };
  
  const sendMail = async () => {

      setLoading(true);
      fetch(DB_LINK + 'contactMail', {
          method: 'POST',
          body: JSON.stringify({
              name: name,
              mail: mails,
              msg: desc
          }),
          headers: {
              'Content-type': 'application/json',
          },
      })
          .then((res) => { })
          .then((data) => {
              toast.success('Mail Send Successfully');
              setLoading(false);
          })
          .catch((err) => {
              console.log(err.message);
              setLoading(false);
              toast("Error in OTP");
          });

  };

  return (
<>
<ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />
    {loading && (<Loader />)}

    <div className="container" style={{ ...blurryDivStyle }}>
      <span className="contact-heading" style={{ color: '#00FF83' }}>Contact us</span>
      {/* <br /> */}
      <div className="box-container1">
        {/* Content inside the additional container */}
        <div className="inner-container">
          {/* Content inside the inner container */}
          <div className="image-container">
            <img src={Img} alt="Centered Image" className="centered-image" />

            <div className="new-container">
              <div className={`contact-container ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>

                <div className="center-container">

                  <div className={`contact-content ${theme === 'Dark' ? 'dark-bg' : 'light-bg'}`}>


                    <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

                      <img src={mail} alt="Email" className="contact-image" />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                      <a target="_blank" href="mailto:hello@securedapp.in" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>   hello@securedapp.in</a>
                    </p>
                    <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />

                    <p className="contact-text">
                      <img src={twitter} alt="Twitter" className="contact-image" />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                      <a target="_blank" href="https://twitter.com/Secure_DApp" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>   Twitter</a>
                    </p>

                    <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
                    <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

                      <img src={send} alt="Telegram" className="contact-image" />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                      <a target="_blank" href="https://t.me/secureDApp" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>    Telegram</a>
                    </p>
                    <hr className={`contact-divider ${theme === 'Dark' ? 'dark-divider' : 'light-divider'}`} />
                    <p className={`contact-text ${theme === 'Dark' ? 'dark-text' : 'light-text'}`}>

                      <img src={paperclip} alt="Paperclip" className="contact-image" />

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <FontAwesomeIcon icon={faLink} className={`contact-icon ${theme === 'Dark' ? 'dark-icon' : 'light-icon'}`} />
                      <a target="_blank" href="https://securedapp.gitbook.io/securedapp-launchpad/" className={`contact-link ${theme === 'Dark' ? 'dark-link' : 'light-link'}`}>    Documentation</a>

                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="text-container">
          Get in Touch

          <div className="text2-container">
            Any question or remarks? Let us know!

            <div>
              <input type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name" className="input-box" />
            </div>

            <div>
              <input type="text" 
              value={mails}
              onChange={(e) => setMails(e.target.value)}
              placeholder="Enter your email" className="input2-box" />
            </div>

            <div>
              <input type="text" 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Type your message here" className="input3-box" />
            </div>

            <div>
              <button type="submit" onClick={() => {sendMail();}} className="submit-button">Submit</button>
            </div>


          </div>
        </div>

      </div>
    </div>

    </>
  );
}

export default Contact