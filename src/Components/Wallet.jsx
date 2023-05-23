import React from 'react'
import {Link} from "react-router-dom"
function Wallet() {
  return (
    <div className="wallet" style={{marginLeft:"auto", marginRight:"auto",marginTop:"10%",marginBottom:"auto"}}>
  <h1 style={{color:"#12D576",fontWeight:"700",fontSize:"40px"}}>No Wallet Connected</h1>
  <h2 style={{color:"#FFFFFF",fontWeight:"300",fontSize:"30px"}}>Get started by connecting your wallet</h2>
  <button style={{padding:"2% 8%",marginTop:"6%",backgroundColor:"#12D576",borderRadius:"25px",fontSize:"20px",fontWeight:"400"}}>Connect Wallet</button>
</div>
  )
}

export default Wallet
