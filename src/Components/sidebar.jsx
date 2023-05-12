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
        <div className="navbar" style={{margin:"0 100px",color:"whitesmoke",fontWeight:"700"}}>
        <div><div><span  style={{color:"#12D576"}}>Token Tool</span><span> by SecureDApp</span></div></div>   
          <div className="right">
                <div>Pricing</div>
                <div>Contact</div>
                <div>ConnectWallet</div>
            </div>
        </div>
        <div className="wallet" style={{marginLeft:"auto", marginRight:"auto",marginTop:"auto",marginBottom:"auto"}}>
      <h1 style={{color:"#12D576",fontWeight:"700"}}>No Wallet Connected</h1>
      <h2 style={{color:"#FFFFFF"}}>Get started by connecting your wallet</h2>
      <h4 style={{padding:"2% 3%",margin:"0 18%",backgroundColor:"#12D576"}}>Connect Wallet</h4>
    </div>
        </div>
    </div>
  )
}

export default sidebar
