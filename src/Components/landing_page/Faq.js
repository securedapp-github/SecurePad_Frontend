import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faAngleRight} from '@fortawesome/free-solid-svg-icons';

export const Faq = () => {
    const faq = ["What are the requirements for projects that want to launch an IDO on SecurePAD?",
    "How do I get involved with SecurePAD?",
    "What is the future of SecurePAD?",
    "What are the risks associated with using SecurePAD?",
    "What is SecurePAD?",
    "How do I participate in an IDO on SecurePAD?",
    "What are the benefits of using SecurePAD?"                
    ]
  return (
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
  )
}
