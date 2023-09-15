import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Style/landingPage.css'
import Icon from '../assets/logo_img.png'
import Flogo from '../assets/footer_logo.png'
import I_PAD from '../assets/i_pad.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Plus from '../assets/plus.png';
import Minus from '../assets/minus.png';
import { ToastContainer, toast } from "react-toastify";


export const LandingPage = () => {
    let Odd_even = 0;
    const [email, setEmail] = useState("");

    const sendMail = async () => {

        if (email == "") {
            toast("Invalid Mail");
            return;
        }
        fetch("https://139-59-5-56.nip.io:3443/contactMail", {
            method: "POST",
            body: JSON.stringify({
                name: "Transmission Mail SecurePad",
                mail: email,
                msg: "Mail for transmission SecurePad",
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => { })
            .then((data) => {
                toast.success("Mail Send Successfully");
            })
            .catch((err) => {
                console.log(err.message);
                toast("Error in sending mail");
            });
    };

    useEffect(() => {
        const handleScroll = () => {
            let objs = document.getElementById('sticky');
            if (objs !== null) {
            if (window.scrollY > 69) {
                objs.style.backgroundColor = '#0000008f';
            } else {
                objs.style.backgroundColor = 'transparent';
            }
        }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    var last_id = ''

    const view_ans = (element_id, btn_id) => {
        let btn_obj = document.getElementById(btn_id)
        let obj = document.getElementById(element_id)
        for (let i = 0; i < faq.length; i++) {
            let obj_1 = document.getElementById(`button_${i}`)
            let obj_2 = document.getElementById(`para_${i}`)
            obj_1.src = Plus
            obj_2.style.transform = "scaleX(0)"
            obj_2.style.display = "none"
        }
        if (Odd_even % 2 == 0) {
            btn_obj.src = Minus
            obj.style.display = "flex"
            obj.style.transform = "scaleX(1)"
            last_id = btn_id
            console.log('printed', last_id);
        } else {
            btn_obj.src = Plus
            obj.style.display = "none"
            obj.style.transform = "scaleX(0)"
            console.log('logged...', last_id);
        }
        if (last_id != btn_id) {
            btn_obj.src = Minus
            obj.style.display = "flex"
            obj.style.transform = "scaleX(1)"
        }
        Odd_even++;

    }
    <h1>Token</h1>


    const faq = [[<h6>What makes SecurePAD different from other token launchpads?</h6>, <div><p style={{ marginLeft: "-51px" }}>SecurePAD is different from other token launchpads in a number of ways, including:</p><ul><li> Zero-fee token creation: SecurePAD does not charge for token creation initially, which makes it a more affordable option for projects that are looking to raise funds through an IDO.</li><li>Security-focused: SecurePAD is focused on security, and all projects that launch on its platform are subject to KYC verification and smart contract auditing.</li><li> No-code platform: SecurePAD is a no-code platform, which means that projects do not need to have any coding experience in order to launch an IDO on its platform. </li><li> Multichain-cross chain: SecurePAD is a multi chain-cross chain platform, which means that projects can launch their tokens on multiple blockchains. </li><li>Pay-on-profit model: SecurePAD charges a percentage of the profits that projects make after their tokens have been launched. This means that projects only pay SecurePAD if they are successful.</li></ul></div>],
    [<h6>What are the requirements for projects that want to launch an IDO on SecurePAD?</h6>, "Projects looking to launch an IDO on SecurePAD typically need to provide project details and tokenomics for evaluation by SecurePAD's expert team"],
    [<h6>How do I get involved with SecurePAD?</h6>, "To get involved with SecurePAD, you can explore their platform and consider participating in token launches, staking, airdrops, or ICO services they offer."],
    [<h6>What is the future of SecurePAD?</h6>, "The future of SecurePAD involves expanding its services, potentially supporting multiple blockchains, and continuing to facilitate secure and efficient token launches."],
    [<h6>What are the risks associated with using SecurePAD?</h6>, "Like any crypto-related platform, there are risks associated with using SecurePAD, including market volatility, and project-specific risks. Users should conduct due diligence."],
    [<h6>What is SecurePAD?</h6>, "SecurePAD is a token launchpad platform that provides services like airdrops, staking, and ICO services to crypto projects looking to launch tokens securely."],
    [<h6>How do I participate in an IDO on SecurePAD?</h6>, "To participate in an IDO on SecurePAD, users typically need to follow the specific instructions provided by the project launching the token, which may include whitelisting and contributing assets"],
    [<h6>What are the benefits of using SecurePAD?</h6>, "Using SecurePAD offers benefits such as secure token launches, access to early-stage crypto projects, and the potential for rewards through staking and airdrops."]
    ]
    const [content, SetContent] = useState({
        btn1: {
            line1: {
                no: "01",
                head: "STAKED TOKENS:",
                content: "This is the token held by the wallets that are staking the token, SecureDApp uses it so it doesn’t matter if you’re staking or not to be eligible for tiers. You may also use this token to make it so only those who stake are eligible for tiers or whatever suits your project."
            },
            line2: {
                no: "02",
                head: "PERCENT REWARD: ",
                content: " This reward depends on the amount you stake. E.g If the reward ratio is set to 10 and your holder stakes 100 tokens, they will earn 1,000 of the reward tokens per year."
            },
            line3: {
                no: "03",
                head: "FIXED REWARD:",
                content: "This means the reward amount is fixed. E.g If the reward ratio is set to 10,000, the total amount staked is 1,000 and your holder stakes 100 tokens, they will earn 4,000 of the reward tokens per year."

            },
            line4: {
                no: "04",
                head: "NO REWARD:",
                content: "There is no reward for staking, instead it can be used as a GOV token for a DAO once staked"
            }
        }, btn2: {
            line1: {
                no: "01",
                head: "Lock Tokens",
                content: "Lock tokens to disable them from being moved for a certain period of time"
            },
            line2: {
                no: "02",
                head: "Lock LP or Founder Tokens",
                content: "Lock LP or founder tokens to show commitment to your project"
            },
            line3: {
                no: "03",
                head: "Lock Team Tokens",
                content: "Lock team tokens for an agreed time"
            },
            line4: {
                no: "04",
                head: "Build Investor Confidence",
                content: "Create confidence with investors"
            },
            line5: {
                no: "05",
                head: "Share Token Lock Information",
                content: "Share token lock information via publicly accessible web page"
            }
        }, btn3: {
            line1: {
                no: "01",
                head: "Create Token Presale",
                content: "Create your token presale in minutes"
            },
            line2: {
                no: "02",
                head: "Proven Solidity Crowdsale Contract",
                content: "Proven solidity crowdsale contract"
            },
            line3: {
                no: "03",
                head: "Launch an ICO",
                content: "Run an initial coin offer (ICO)"
            },
            line4: {
                no: "04",
                head: "Run an STO",
                content: "Run a security token offering (STO)"
            },
            line5: {
                no: "05",
                head: "Set Up an IDO Token Presale",
                content: "Create an IDO token presale"
            },
        }, btn4: {
            line1: {
                no: "01",
                head: "Secure Airdrop Feature",
                content: "Secure Airdrop is a feature of the SecurePAD platform that allows users to participate in airdrops in a secure and transparent way."
            },
            line2: {
                no: "02",
                head: "Multi-Signature Wallet Security",
                content: "Secure Airdrop uses a multi-signature wallet to hold the airdrop tokens, which means that no single party can access the tokens without the approval of multiple parties."
            },
            line3: {
                no: "03",
                head: "Enhanced Security Measures",
                content: "This makes it much more difficult for hackers to steal the airdrop tokens."
            },
            line4: {
                no: "04",
                head: "Transparent Airdrop Tracking",
                content: "Secure Airdrop also allows users to track the status of their airdrop tokens, so they know when they have been received and when they can be claimed."
            },
            line5: {
                no: "05",
                head: "User-Friendly Airdrop Participation",
                content: "This makes it a more transparent and user-friendly way to participate in airdrops."
            },
        }, btn5: {
            line1: {
                no: "01",
                head: "A secure and compliant platform:",
                content: "SecurePAD is a decentralised platform, which means that it is not subject to the same regulations as centralised exchanges. This makes it a more attractive option for projects that are looking to launch their tokens without having to comply with a lot of red tape."
            },
            line2: {
                no: "02",
                head: "A user-friendly interface:",
                content: "SecurePAD's interface is designed to be user-friendly, making it easy for investors to participate in DEX Token Launches."
            },
            line3: {
                no: "03",
                head: "A wide range of features: ",
                content: "SecurePAD offers a wide range of features, including token listing, token sale, and token distribution. This makes it a one-stop shop for projects that are looking to launch their tokens."
            },
            line4: {
                no: "04",
                head: "A strong community:",
                content: "SecurePAD has a strong community of investors and supporters. This can help to ensure that projects that launch on SecurePAD have a successful DEX Token Launch."
            },
        }, btn6: {
            line1: {
                no: "01",
                head: "Security: ",
                content: "SecurePAD uses a number of security measures to protect projects and investors, including KYC/AML verification, smart contract auditing, and cold storage."
            },
            line2: {
                no: "02",
                head: "Compliance:",
                content: "SecurePAD is compliant with a number of regulations, including AML/KYC, CTF, and GDPR. This makes it a safe and secure platform for projects to tokenize their assets."
            },
            line3: {
                no: "03",
                head: "Community: ",
                content: "SecurePAD has a strong community of investors and supporters. This can help to ensure that projects that tokenize their assets on SecurePAD have a successful launch."
            },
            line4: {
                no: "04",
                head: "Liquidity:",
                content: "SecurePAD has a number of liquidity providers, which ensures that projects that tokenize their assets on the platform have access to liquidity."
            },
        }
    });
    const get_content = (btn_id, button_action, flex, product) => {
        let eleobj = document.getElementById("control_div");
        console.log("clicked", button_action);
        let obj = content.btn1;
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn3").classList.remove("active");
        document.getElementById("btn4").classList.remove("active");
        document.getElementById("btn5").classList.remove("active");
        document.getElementById("btn6").classList.remove("active");

        if (button_action == 1) {
            obj = content.btn1;
        } else if ((button_action == 2)) {
            obj = content.btn2;
        } else if ((button_action == 3)) {
            obj = content.btn3;
        } else if ((button_action == 4)) {
            obj = content.btn4;
        } else if ((button_action == 5)) {
            obj = content.btn5;
        } else if ((button_action == 6)) {
            obj = content.btn6;
        }
        document.getElementById(btn_id).classList.add("active");
        const inp_code = Object.keys(obj).map((key) => (
            `<div key="${key}" class="Product_item">
                <div class="num"><div>${obj[key].no}</div></div>
                <div class="p_content">
                    <h2>${obj[key].head}</h2>
                    <h6>${obj[key].content}</h6>
                </div>
            </div>`
        )).join('');
        const inp_code1 = Object.keys(obj).map((key) => (
            `<div key="${key}" class="Product_item" style="padding: 69px 0px;gap: 4px;display: flex;flex-direction: row;align-content: center;align-items: center;margin-top: -123px;">
                <div class="num"><div style="font-size: 67px;color: #15231d;text-transform: capitalize;background: linear-gradient(173deg, #52ee61, #3ce76600, #23d55500, #2af3b700);background-size: 200% 200%;-webkit-background-clip: text;-webkit-text-stroke: 2px transparent;">${obj[key].no}</div></div>
                <div class="p_content">
                    <h2>${obj[key].head}</h2>
                    <h6 class="h6_sample" style="font-size: 12px;width: 155px;color: white;">${obj[key].content}</h6>
                </div>
            </div>`
        )).join('');
        console.log(eleobj)
        // if (flex == 1) {
        eleobj.innerHTML = "<div className='Product_list' id='Product_list'>" + inp_code + "</div>";
        // }
        // else if (flex == 2) {
        //     eleobj.innerHTML = "<div className='Product_list1' id='Product_list1'>" + inp_code1 + "</div>";
        // }
        // else if (flex == 3) {
        //     eleobj.innerHTML = `<div style="display: flex;flex-direction: column;align-content: center;justify-content: center;align-items: center;"><p style="    margin-bottom: 80px;color: white;margin-top: -45px;width: 92%;">${product}</p>` + "<div className='Product_list' id='Product_list'>" + inp_code + "</div></div>";
        // }
        console.log(inp_code)
    }
    let clicks = 0;
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="dark"
                pauseOnHover
            />
            <div className='hole_page'>
                <div className='sample'>
                    <div className='Topclr'></div>
                    <div className='Buttomclr'></div>
                    <div className='Buttomclr1'></div>
                    <div className='Blueclr'></div>
                </div>
                <div id='sticky'>
                    <div className="Header">
                        <div className='logo_title'>
                            <img className='logo_img' src={Icon} alt="" />
                            <div className='title_content'>
                                <span style={{ fontSize: "35px", color: "rgb(212 212 212)" }}>Secured<span style={{ color: "white" }}>Pad</span></span>
                                <p style={{ fontSize: "13px", color: "rgb(212 212 212)" }}>By SecuredAPP</p>
                            </div>
                        </div>
                        <div className='nav_block'>
                            <nav className="navbar" id='navbar'>
                                <li><Link to={"/contact"} style={{ color: 'white' }}>Contact Us</Link></li>
                                <Link to={`/home`} >
                                    <button className="menu_btn">Launch SecurePad</button>
                                </Link>
                            </nav>
                            <div className='menubar_btn'>
                                <button className='menubar_btns' style={{ background: "transparent", border: "none" }} onClick={() => {
                                    console.log("clock")
                                    let obj = document.getElementById('navbar');
                                    let icon_ = document.getElementById('icon_cont');
                                    if (clicks % 2 == 0) {
                                        obj.style.transform = "translateY(70px)";
                                        icon_.src = "https://www.freeiconspng.com/thumbs/close-button-png/close-button-png-27.png";
                                        icon_.style.width = "20%";
                                        icon_.style.transition = "1s";
                                        icon_.style.animationdelay = "1s";
                                    } else {
                                        icon_.src = "https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg"
                                        obj.style.transform = "translateY(-200px)";
                                        icon_.style.width = "88px";
                                    }
                                    clicks++;
                                }}><img id='icon_cont' style={{ width: '88px' }} src='https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg'></img>
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
                                <Link to={`/token`}>
                                    <button>Launch Your Token Now</button>
                                </Link>

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
                                <Link to={`/token`} >
                                    <button>Launch Your Token Now</button>
                                </Link>
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
                                        Apply for Token Launch:<br />
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
                                        Smart Contract Development:<br />
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
                                        Tocken Distribution:<br />
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
                                    <button id="btn1" onClick={() => { get_content("btn1", 1, 1) }} className='active'>Secure Token Staking</button>
                                    <button id="btn2" onClick={() => { get_content("btn2", 2, 2) }} >Token Locker / Liquidity Locker</button>
                                    <button id="btn3" onClick={() => { get_content("btn3", 3, 2) }} >STO/ICO</button>
                                    <button id="btn4" onClick={() => { get_content("btn4", 4, 3, "") }} >Secure Airdrop</button>
                                    <button id="btn5" onClick={() => { get_content("btn5", 5, 3, "SecurePAD is a decentralised incubation and IDO launchpad that aims to bring top-notch crypto startup projects to the forefront within its community. It provides a platform for projects to launch their tokens, raise funds, and connect with investors.<br/><br/>SecurePAD will facilitate DEX Token Launch with ease by providing a number of features and services, including:") }} >DEX Token Launch</button>
                                    <button id="btn6" onClick={() => { get_content("btn6", 6, 3, "SecurePAD launchpad facilitates asset tokenization by providing a number of features and services, including:") }} >Asset Tokenization</button>
                                </div>
                            </div>
                            <div className='control_div' id='control_div'>
                                <div className='Product_list' id="Product_list">
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
                                        Apply for Token Launch:<br />
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
                                        Smart Contract Development:<br />
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
                                        Tocken Distribution:<br />
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
                                    <h3 style={{ fontSize: "17px", color: "white" }}>Haven't found the answers you are looking for? Contact us at</h3>
                                    <p>support@securdapp.in</p>
                                </div>
                                {/* <div className='fqa_btns'>
                                <button className='active'>Token</button>
                                <button>Security</button>
                            </div> */}
                            </div>
                            <div className='l_right'>

                                <div>
                                    {faq.map((item, index) => (
                                        <div key={index}>
                                            <hr style={{ color: "aliceblue" }} />
                                            <div className='plus'>
                                                <div onClick={() => { view_ans(`para_${index}`, `button_${index}`) }} >
                                                    <p onClick={() => { view_ans(`para_${index}`, `button_${index}`) }} >{item[0]}</p>
                                                    <p onClick={() => { view_ans(`para_${index}`, `button_${index}`) }} id={`para_${index}`} style={{ padding: '0px 0px 0px 50px', transform: 'scaleX(0)', display: 'none' }}>{item[1]}</p>
                                                </div>
                                                <div>
                                                    <img style={{ cursor: 'pointer', width: "20px" }} src={Plus} id={`button_${index}`} onClick={() => { view_ans(`para_${index}`, `button_${index}`) }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <hr style={{ color: "aliceblue" }} />
                                </div>
                            </div>
                        </div>
                        <div className='bottom_container'>
                            <div className='right_con'>
                                <h1>Receive Transmissions</h1>
                            </div>
                            <div>
                                <div className='input_style'>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        id="" />
                                    <button onClick={() => { sendMail(); }}><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className='footer_con'>
                            <div className='list_item'>
                                <ul>
                                    <h6>Company</h6>
                                    <li><a href="/" target="_blank" style={{ color: 'white' }}>Team</a></li>
                                    <li><a href="/" target="_blank" style={{ color: 'white' }}>About Us</a></li>
                                    <li><a href="/" target="_blank" style={{ color: 'white' }}>Request a Quote</a></li>
                                    <li><a href="/" target="_blank" style={{ color: 'white' }}>Referral</a></li>
                                    <li><a href="https://securedapp.gitbook.io/securedapp-launchpad/careers" target="_blank" style={{ color: 'white' }}>Career</a></li>
                                </ul>
                            </div>
                            <div className='list_item'>
                                <ul>
                                    <h6>Resource</h6>
                                    <li><a href="https://securedapp.io" style={{ color: 'white' }}>Solidity Shield</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Audit Process</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Our Services</a></li>
                                    <li><a href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securepad" style={{ color: 'white' }}>Privacy Policy</a></li>
                                    <li><a href="https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy" style={{ color: 'white' }}>Workplace Policy</a></li>
                                    <li><a href="/mission-and-core-values" style={{ color: 'white' }}>Our Mission & Core Values</a></li>

                                </ul>
                            </div>
                            <div className='list_item'>
                                <ul>
                                    <h6>Products</h6>
                                    <li><a href="/search" style={{ color: 'white' }}>Search</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Rewards</a></li>
                                    <li><a href="/wallet" style={{ color: 'white' }}>Wallet</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Firewall + VPN</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Talk</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>News</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Playlist</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>All features</a></li>

                                </ul>
                            </div>
                            <div className='list_item'>
                                <ul>
                                    <h6>Participate</h6>
                                    <li><a href="/" style={{ color: 'white' }}>Community</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Contributors</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Events</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Newsletters</a></li>

                                </ul>
                            </div>
                            <div className='list_item'>
                                <ul>
                                    <h6>Explore</h6>
                                    <li><a href="/token" style={{ color: 'white' }}>Tokens</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Apps & Services</a></li>
                                    <li><a href="/wallet" style={{ color: 'white' }}>Wallets</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Interchain security</a></li>
                                    <li><a href="/" style={{ color: 'white' }}>Blog</a></li>

                                </ul>
                            </div>
                        </div>
                        <hr style={{ color: "rgba(255, 255, 255, 0.20)" }} />
                        <div className='bottom_lable'>
                            <div>
                                <img className='flogo' src={Flogo} alt="" />
                            </div>
                            <div>
                                <ul className='list_content'>
                                    <li>
                                        <a href="https://securedapp.gitbook.io/securedapp-launchpad/t-and-c-securepad"
                                            target="_blank"  style={{ color: 'white' }}>
                                            Terms of Services
                                        </a>
                                    </li><span style={{ color: 'white' }}>|</span>
                                    <li>
                                        <a href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securepad"
                                            target="_blank"  style={{ color: 'white' }}>
                                            Privacy Policy
                                        </a>
                                    </li><span style={{ color: 'white' }}>|</span>
                                    <li>
                                        <a href="https://securepad.xyz"  style={{ color: 'white' }}>
                                            Lite Paper
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list_content'>
                                    <li><a href="https://discord.com/invite/jQcd5WwhNy" className="social-icon"><FontAwesomeIcon icon={faDiscord} style={{ color: 'white', height: '30px' }} /></a></li>
                                    <li><a href="https://twitter.com/secure_dapp" className="social-icon"><FontAwesomeIcon icon={faTwitter} style={{ color: 'white', height: '30px' }} /></a></li>
                                    <li><a href="https://www.instagram.com/securedapp_official/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} /></a></li>
                                    <li><a href="https://telegram.me/securedappcommunity" className="social-icon"><FontAwesomeIcon icon={faTelegram} style={{ color: 'white' }} /></a></li>
                                </ul>

                            </div>
                        </div>
                    </footer>
                </body>
            </div>
        </>
    )
}

export default LandingPage;