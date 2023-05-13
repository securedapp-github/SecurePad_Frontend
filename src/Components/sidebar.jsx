import React from 'react'
import '../Style/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import {Link} from  'react-router-dom'
import Wallet from './Wallet.jsx'
import Contact from './contact.jsx'
import Price from './price.jsx'
function sidebar(props) {
    const {page}=props
    function Main(){
        if(page=="contact")return <Contact/>
        if(page=="pricing")return <Price/>
        if(page=="wallet")return <Wallet/>
    }
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
           <Link to="/pricing"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link> 
            <Link to="/contact"><div style={{padding:"10px",color:"white"}}>Contact</div></Link>
            <Link to="/"><div style={{padding:"10px",color:"white"}}>ConnectWallet</div></Link>
        </div>
    </div>
    <Main/>
    </div>
    </div>
  )
}

export default sidebar
