import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../Style/home.css'
import Home from '../assets/home.png'
function home() {
  return (
    <div className="home">
      <div style={{paddingTop:"1vw",paddingLeft:"6vw",paddingRight:"8vw"}}>
        <div id="unleash" style={{fontWeight:"700",color:"#12D576"}}>
          <div>Unleash Your Token's Full</div>
          <div>Potential</div>
           </div>
        <div id='unleash_para' style={{color:"#949494",paddingTop:"4%"}}>
        Welcome to our Token Launchpad, your gateway to blockchain success! We offer end-to-end services for token creation, sale, locking, staking, and airdrops on multiple chains. Empower your project with our streamlined solutions and unleash the full potential of decentralized innovation.
          </div>
          
  {/* <button style={{padding:"2% 8%",marginTop:"6%",backgroundColor:"#12D576",borderRadius:"25px",fontSize:"20px",fontWeight:"400"}}>
  <ConnectButton showBalance={false} />
  </button> */}
      </div>
      <div style={{paddingRight:"14%"}}>
      <img src={Home} alt="not found"  id="home_img" />
      </div>
    </div>
    
  )
}

export default home