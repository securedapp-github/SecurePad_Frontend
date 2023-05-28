import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '../Style/managetoken.css'
import Mains from './main.jsx'
import LockToken from './lockToken.jsx'

function manageToken(props) {
  const {page}=props
  function ManageToken(){
    if(page=='managetoken'){
      return <Mains/>
    }
    if(page=='locktoken'){
      return <LockToken/>
    }
  }
  return (
    <div className="manageToken">
      <div className="sidebar" style={{backgroundColor:"black",justifyContent:"start"}}>
      <Link to='/'><img  style={{paddingLeft:"20px",paddingTop:"20px"}} src={Logo} alt="not found" /> </Link>
      </div>
      <div className="dashboard" style={{overflow:"auto"}} >
    <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
    <div  className="navBrand" style={{position:"absolute",left:"2%"}}><div><span  style={{color:"#12D576",fontSize:"20px",fontWeight:"700"}}>Token Launchpad</span><span style={{fontSize:"20px",fontWeight:"400"}}> by SecureDApp</span></div></div>   
      <div className="riht" style={{position:"absolute",right:"3%"}}>
      <Link to="/pricing" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",fontSize:"20px",color:"white",}}>Pricing</div></Link> 
            <Link to="/contact" className="rihtLink"><div style={{fontWeight:"400",padding:"10px",color:"white",fontSize:"20px",paddingRight:"25px"}}>Contact</div></Link> 
            <ConnectButton showBalance={false} />
        </div>
    </div>
     <ManageToken/>
    </div>
    </div>
  )
}

export default manageToken
