import React from 'react'
import '../Style/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
function sidebar() {
    
  return (
    <div className="mainpage">
        <div className="sidebar">
            <div > <FontAwesomeIcon icon={faCoffee}  size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div> <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
        </div>
        <div className="dashboard"  >
        <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
        <div  style={{position:"absolute",left:"2%"}}><div><span  style={{color:"#12D576"}}>Token Tool</span><span> by SecureDApp</span></div></div>   
          <div className="riht" style={{position:"absolute",right:"3%"}}>
                <div style={{padding:"10px"}}>Pricing</div>
                <div style={{padding:"10px"}}>Contact</div>
                <div style={{padding:"10px"}}>ConnectWallet</div>
            </div>
        </div>
        <div className="wallet" style={{marginLeft:"auto", marginRight:"auto",marginTop:"auto",marginBottom:"auto"}}>
      <h1 style={{color:"#12D576",fontWeight:"700"}}>No Wallet Connected</h1>
      <h2 style={{color:"#FFFFFF"}}>Get started by connecting your wallet</h2>
      <h4 style={{padding:"2% 3%",marginTop:"10%",backgroundColor:"#12D576",borderRadius:"25px"}}>Connect Wallet</h4>
    </div>
        </div>
    </div>
  )
}

export default sidebar
