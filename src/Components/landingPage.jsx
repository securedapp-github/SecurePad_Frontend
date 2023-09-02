import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Style/landingPage.css'
import Icon from '../assets/logo_img.png'
import Flogo from '../assets/footer_logo.png'
import I_PAD from '../assets/i_pad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faTelegram} from "@fortawesome/free-brands-svg-icons";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars} from 'react-icons/fa';

export const LandingPage = () => {
    useEffect(() => {
        const handleScroll = () => {
        let objs = document.getElementById('sticky');
          if (window.scrollY > 69) {
            objs.style.backgroundColor = '#0000008f';
          } else {
            objs.style.backgroundColor = 'transparent';
          }
        };
        window.addEventListener('scroll', handleScroll);
      }, []);
    
    const faq = ["What are the requirements for projects that want to launch an IDO on SecurePAD?",
                "How do I get involved with SecurePAD?",
                "What is the future of SecurePAD?",
                "What are the risks associated with using SecurePAD?",
                "What is SecurePAD?",
                "How do I participate in an IDO on SecurePAD?",
                "What are the benefits of using SecurePAD?"                
    ]
    const [content, SetContent] = useState({
        btn1:{
            line1:{
                no:"01",
                head:"STAKED TOKENS:",
                content: "This is the token held by the wallets that are staking the token, SecureDApp uses it so it doesn’t matter if you’re staking or not to be eligible for tiers. You may also use this token to make it so only those who stake are eligible for tiers or whatever suits your project."
            },
            line2:{
                no:"02",
                head:"PERCENT REWARD: ",
                content:" This reward depends on the amount you stake. E.g If the reward ratio is set to 10 and your holder stakes 100 tokens, they will earn 1,000 of the reward tokens per year."
            },
            line3:{
                no:"03",
                head:"FIXED REWARD:",
                content:"This means the reward amount is fixed. E.g If the reward ratio is set to 10,000, the total amount staked is 1,000 and your holder stakes 100 tokens, they will earn 4,000 of the reward tokens per year."

            },
            line4:{
                no:"04",
                head:"NO REWARD:",
                content:"There is no reward for staking, instead it can be used as a GOV token for a DAO once staked"
            }
        }
    });
    const get_content = (button_action) =>{
        let eleobj = document.getElementsByClassName("Product_list");
        console.log("clicked",button_action);
        let obj = content.btn1;
        if (button_action == 1){
            obj = content.btn1;
        }else if((button_action == 2)){
            obj = content.btn2;
        }else if((button_action == 3)){
            obj = content.btn3;
        }else if((button_action == 4)){
            obj = content.btn4;
        }else if((button_action == 5)){
            obj = content.btn5;
        }else if((button_action == 6)){
            obj = content.btn6;
        }
        eleobj.innerHTML = Object.keys(obj).map((key) => (
            <div key={key} className='Product_item'>
                <div className='num'>
                    <div>{content.btn1[key].no}</div>
                </div>
                <div className='p_content'>
                    <h2>{content.btn1[key].head}</h2>
                    <h6>{content.btn1[key].content}</h6>
                </div>
            </div>
        ))
    }
    let clicks = 0;
    return (
    <div>
        <div id='sticky'>
            <div className="Header">
                <div className='logo_title'>
                    <img className='logo_img' src={Icon} alt="" />
                    <div className='title_content'>
                        <span style={{color:"rgb(212 212 212)"}}>Secured<span style={{color:"white"}}>Pad</span></span>
                        <p style={{fontSize:"6px",color:"rgb(212 212 212)"}}>By SecuredAPP</p>
                    </div>
                </div>
                <div className='nav_block'>
                    <nav className="navbar" id='navbar'>
                        <li><Link to="/landing_page" />Solidity Shield Scan</li>
                        <li><Link to="/landing_page" />Our Products</li>
                        <li><Link to="/landing_page" />Blog</li>
                        <button className="menu_btn">Token Tool</button>
                    </nav>
                    <div className='menubar_btn'>
                        <button className='menubar_btns' style={{background: "transparent",border: "none"}} onClick={()=>{
                            console.log("clock")
                            let obj = document.getElementById('navbar');
                            let icon_ =  document.getElementById('icon_cont');
                            if(clicks%2==0){
                                obj.style.transform = "translateY(70px)";
                                icon_.src = "https://www.freeiconspng.com/thumbs/close-button-png/close-button-png-27.png";
                                icon_.style.width = "20%";
                                icon_.style.transition= "1s";
                                icon_.style.animationdelay= "1s";
                            }else{
                                icon_.src="https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg"
                                obj.style.transform = "translateY(-200px)";
                                icon_.style.width = "88px";
                            }
                            clicks++;
                        }}><img id='icon_cont' style={{width:'88px'}} src='https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <body>
            <section className="main">
                <div className="main_content">
                    <div className="left">
                        <h1>Unlocking the DeFi Potential with SecurePAD</h1>
                        <p>Discover the power of Tokenomics with SecurePAD. Experience Exclusive Early Access to the Next Unicorn in DeFi Tokenization. Trustworthy Audited and vetted Web3 Projects</p>
                        <h3>Embark on the Future of Fundrainsing with us.</h3>
                        <button>Launch Your Token Now</button>
                    </div>
                    <div className='right'>
                        <img src={I_PAD} />
                    </div>
                </div>
                <div className='createTocken'>
                    <div>
                        <h1>The World's First <span>Zero Fee</span>, Security Prominent and No Code Launchpad</h1>
                        <p>SecurePAD - Launch, Trade, and Govern</p>
                    </div>
                    <div>
                        <button>Create Your Token Now</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='step'>
                    <h1 className='color_text'>SecurePAD : Token Launch Process</h1>
                    <div className='step_container'>
                        <div className='steps'>
                            <div>
                                <h3>STEP</h3>
                                <h1>01</h1>
                            </div>
                            <p>
                            Apply for Token Launch:<br/>
                            Submit your project details and
                            tokenomics for evaluation by our
                            expert team.
                            </p>
                        </div>
                        <div className='steps'>
                            <div>
                                <h3>STEP</h3>
                                <h1>02</h1>
                            </div>
                            <p>
                            Smart Contract Development:<br/>
                            Collaborate with our developers to
                            create secure and efficient smart contracts.
                     
                            </p>
                        </div>
                        <div className='steps'>
                            <div>
                                <h3>STEP</h3>
                                <h1>03</h1>
                            </div>
                            <p>
                            Tocken Distribution:<br/>
                            Plan and execute a successful
                            public sale or distribution event with
                            our comprehensive launchpad tools.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Products'>
                    <h1>Our Products</h1>
                    <div className='Products_btns'>
                        <div>
                            <button id="btn1" onClick={()=>{get_content(1)}} className='active'>Secure Token Staking</button>
                            <button id="btn2" onClick={()=>{get_content(2)}} >Token Locker / Liquidity Locker</button>
                            <button id="btn3" onClick={()=>{get_content(3)}} >STO/ICO</button>
                            <button id="btn4" onClick={()=>{get_content(4)}} >Secure Airdrop</button>
                            <button id="btn5" onClick={()=>{get_content(5)}} >DEX Token Launch</button>
                            <button id="btn6" onClick={()=>{get_content(6)}} >Asset Tokenization</button>
                        </div>
                    </div>
                    <div className='Product_list'>
                    {Object.keys(content.btn1).map((key) => (
                        <div key={key} className='Product_item'>
                            <div className='num'>
                                <div>{content.btn1[key].no}</div>
                            </div>
                            <div className='p_content'>
                                <h2>{content.btn1[key].head}</h2>
                                <h6>{content.btn1[key].content}</h6>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <section>
                <div className='step'>
                    <h1 className='color_text'>SecurePAD: Key Features</h1>
                    <div className='step_container'>
                        <div className='steps steps1'>
                            <div>
                                <h3>STEP</h3>
                                <h1>01</h1>
                            </div>
                            <p>
                            Apply for Token Launch:<br/>
                            Submit your project details and
                            tokenomics for evaluation by our
                            expert team.
                            </p>
                        </div>
                        <div className='steps steps1'>
                            <div>
                                <h3>STEP</h3>
                                <h1>02</h1>
                            </div>
                            <p>
                            Smart Contract Development:<br/>
                            Collaborate with our developers to
                            create secure and efficient smart contracts.
                     
                            </p>
                        </div>
                        <div className='steps steps1'>
                            <div>
                                <h3>STEP</h3>
                                <h1>03</h1>
                            </div>
                            <p>
                            Tocken Distribution:<br/>
                            Plan and execute a successful
                            public sale or distribution event with
                            our comprehensive launchpad tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='fqa'>
                    <div className='l_left'>
                        <h1 className='color_text'>Frequently Asked Questions</h1>
                        <div>
                            <h3 style={{fontSize: "17px",color: "white"}}>Haven't found the answers you are looking for? Contact us at</h3>
                            <p>support@securdapp.in</p>
                        </div>
                        <div className='fqa_btns'>
                            <button className='active'>Token</button>
                            <button>Security</button>
                        </div>
                    </div>
                    <div className='l_right'>
                        <h1>Token</h1>
                        <h6>What makes SecurePAD different from other token launchpads?</h6>
                        <p>SecurePAD is different from other token launchpads in a number of ways, including:</p>
                        <ul>
                            <li> Zero-fee token creation: SecurePAD does not charge for token creation initially, which makes it a more affordable option for projects that are looking to raise funds through an IDO.</li>
                            <li>Security-focused: SecurePAD is focused on security, and all projects that launch on its platform are subject to KYC verification and smart contract auditing.</li>
                            <li> No-code platform: SecurePAD is a no-code platform, which means that projects do not need to have any coding experience in order to launch an IDO on its platform. </li>
                            <li> Multichain-cross chain: SecurePAD is a multi chain-cross chain platform, which means that projects can launch their tokens on multiple blockchains. </li>
                            <li>Pay-on-profit model: SecurePAD charges a percentage of the profits that projects make after their tokens have been launched. This means that projects only pay SecurePAD if they are successful.</li>
                        </ul>
                        <div>
                            {faq.map((item, index) => (
                                <div key={index}>
                                    <hr style={{color:"aliceblue"}} />
                                    <div className='plus'>
                                        <div>
                                            <p>{item}</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faPlus} style={{color:'white'}} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <hr style={{color:"aliceblue"}} />
                        </div>
                    </div>
                </div>
                <div className='bottom_container'>
                    <div className='right_con'>
                        <h1>Receive Transmissions</h1>
                    </div>
                    <div >
                        <div className='input_style'> 
                            <input type="text" name="" id="" placeholder='Your Email' />
                            <button><FontAwesomeIcon icon={faAngleRight} /></button>
                        </div>
                    </div>
                </div>
            </section>
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
        </body>
    </div>
  )
}

export default LandingPage;