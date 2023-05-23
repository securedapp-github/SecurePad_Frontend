import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../Style/managetoken.css'
import Mains from './main.jsx'
function manageToken() {
  return (
    <div className="manageToken">
      <div className="sidebar" style={{backgroundColor:"black",justifyContent:"start"}}>
      <Link to='/'><img  style={{paddingLeft:"20px",paddingTop:"20px"}} src={Logo} alt="not found" /> </Link>
      </div>
      <div className="dashboard" style={{overflow:"auto"}} >
    <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
    <div  className="navBrand" style={{position:"absolute",left:"2%"}}><div><span  style={{color:"#12D576",fontSize:"20px",fontWeight:"700"}}>Token Tool</span><span style={{fontSize:"20px",fontWeight:"400"}}> by SecureDApp</span></div></div>   
      <div className="riht" style={{position:"absolute",right:"3%"}}>
      <Link to="/pricing" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",fontSize:"20px",color:"white",}}>Pricing</div></Link> 
            <Link to="/contact" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",color:"white",fontSize:"20px",paddingRight:"25px"}}>Contact</div></Link> 
            <ConnectButton showBalance={false} />
        </div>
    </div>
     <Mains/>
    </div>
    </div>
  )
}

export default manageToken
