import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../Style/home.css'
import Home from '../assets/home.png'
function home() {
  return (
    <div className="home" style={{marginTop:'4%'}}>
      <div style={{paddingTop:"1vw"}}>
        <div id="unleash" style={{fontWeight:"700",color:"#12D576",fontSize:'2vw'}}>
          <div>Empowering Your Token</div>
          <div>to Its Fullest</div>
           </div>
        <div id='unleash_para' style={{color:"#949494",paddingTop:"4%",fontSize:'1vw'}}>
        Unleash decentralized innovation with our Token Launchpad! We provide end-to-end services for token creation, sales, locking, staking, and airdrops on multiple chains. Strengthen your project and tap into the blockchain's full potential with our efficient solutions.
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