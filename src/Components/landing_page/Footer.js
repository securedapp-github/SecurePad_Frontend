import React from 'react'
import {faFacebook,faTwitter,faInstagram,faTelegram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flogo from '../../assets/footer_logo.png'

export const Footer = () => {
  return (
        <footer>
                <div className='footer_con'>
                    <div className='list_item'>
                        <h6>Company</h6>
                        <ul>
                            <li>Team</li>
                            <li> About Us</li>
                            <li> Request a quote</li>
                            <li> Referral</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className='list_item'>
                        <h6>Resource</h6>
                        <ul>
                            <li>Solidity Shield</li>
                            <li> Audit Process</li>
                            <li> Our Services</li>
                            <li> Privacy Policy</li>
                            <li> Workplace Policy</li>
                            <li>Our Mission & Core values</li>
                        </ul>
                    </div>
                    <div className='list_item'>
                        <h6>Products</h6>
                        <ul>
                            <li>Search</li>
                            <li> Rewards</li>
                            <li> Wallet</li>
                            <li> Firewall + VPN</li>
                            <li> Talk</li>
                            <li>News</li>
                            <li> Playlist</li>
                            <li> All features</li>
                        </ul>
                    </div>
                    <div className='list_item'>
                        <h6>Participate</h6>
                        <ul>
                            <li>Community</li>
                            <li> Contributors</li>
                            <li> Events</li>
                            <li> Newsletters</li>
                        </ul>
                    </div>
                    <div className='list_item'>
                        <h6>Explore</h6>
                        <ul>
                            <li>Tokens</li>
                            <li> Apps & Services</li>
                            <li> Wallets</li>
                            <li> Interchain security</li>
                            <li> Blog</li>
                        </ul>
                    </div>
                </div>
                <hr style={{    color: "rgba(255, 255, 255, 0.20)"}}/>
                <div className='bottom_lable'>
                    <div>
                        <img className='flogo' src={Flogo} alt="" />
                    </div>
                    <div>
                        <ul className='list_content'>
                            <li>Terms of Services |</li>
                            <li> Privacy Policy |</li>
                            <li>Lite Paper</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list_content'>
                            <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} style={{color:'white' }} /></a></li>
                            <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} style={{color:'white'}} /></a></li>
                            <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} /></a></li>
                            <li><a href="#" className="social-icon"><FontAwesomeIcon icon={faTelegram} style={{color:'white'}} /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
  )
}
