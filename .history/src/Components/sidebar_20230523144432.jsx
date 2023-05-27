import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from 'react'
import '../Style/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import {Link} from  'react-router-dom'
import Wallet from './Wallet.jsx'
import Contact from './contact.jsx'
import Price from './price.jsx'
import Token from './token.jsx'
import Contract from './contract.jsx'
import Send from './send.jsx'
import Sale from './sale.jsx'
import Search from './search.jsx'
import {Navbar,Nav} from'react-bootstrap'
function sidebar(props) {
    const {page}=props
    function Main(){
        if(page=="contact")return <Contact/>
        if(page=="pricing")return <Price/>
        if(page=="wallet")return <Wallet/>
        if(page=="token")return <Token/>
        if(page=="contract")return <Contract/>
        if(page=="search")return <Search/>
        if(page=="send")return <Send/>
        if(page=="sale")return <Sale/>
    }
  return (
    <div className="mainpage">
        <div className="sidebar">
          <Link to="/"> <div > <FontAwesomeIcon icon={faCoffee}  style={{color:"#464646"}} size="2x"/></div></Link> 
           <Link to="/token"> <div > <FontAwesomeIcon icon={faCoffee} style={{color:"#464646"}} size="2x"/></div></Link> 
            <Link to="/contract"><div > <FontAwesomeIcon icon={faCoffee} style={{color:"#464646"}} size="2x"/></div></Link>
            <Link to="/send"><div> <FontAwesomeIcon icon={faCoffee} style={{color:"#464646"}} size="2x"/></div></Link>
            <Link to="/sale"><div > <FontAwesomeIcon icon={faCoffee} style={{color:"#464646"}} size="2x"/></div></Link>
            <Link to="/search"><div > <FontAwesomeIcon icon={faCoffee} style={{color:"#464646"}} size="2x"/></div></Link>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
            <div > <FontAwesomeIcon icon={faCoffee} size="2x"/></div>
        </div>
        <div className="dashboard" style={{overflow:"auto"}} >
    <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
    <div  style={{position:"fixed",left:"10%",paddingBottom}}><div><span  style={{color:"#12D576"}}>Token Tool</span><span> by SecureDApp</span></div></div>   
      <div className="riht" style={{position:"fixed",right:"3%"}}>
           <Link to="/pricing"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link> 
            <Link to="/contact"><div style={{padding:"10px",color:"white"}}>Contact</div></Link>           
            <ConnectButton style={{padding:"10px",color:"white",backgroundColor:"transparent"}} showBalance={false} />  
            {/* <Link to="/"><div style={{padding:"10px",color:"white"}}>ConnectWallet</div></Link> */}
        </div>
    </div>
    <Main/>
    </div>
    </div>
  )
}

export default sidebar
