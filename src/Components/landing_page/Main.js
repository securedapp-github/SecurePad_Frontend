import React from 'react'
import I_PAD from '../../assets/i_pad.png'

export const Main = () => {
  return (
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
  )
}
