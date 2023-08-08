import React, { useState } from 'react'

export const Process = () => {

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
    return (
    <div>
        <body>
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
        </body>
    </div>
  )
}

export default Process;