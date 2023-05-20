import React from 'react'
import '../Style/home.css'
import Home from '../assets/home.png'
function home() {
  return (
    <div className="home" style={{marginLeft:"auto", marginRight:"auto",marginTop:"6%",marginBottom:"auto",height:"90vh",overflowY:"hidden"}}>
      <div style={{paddingTop:"1%",paddingLeft:"6%"}}>
        <div style={{fontSize:"40px",fontWeight:"700",color:"#12D576"}}>Tokens have become easier to access.</div>
        <div style={{color:"#949494",paddingTop:"4%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
  <button style={{padding:"2% 8%",marginTop:"6%",backgroundColor:"#12D576",borderRadius:"25px",fontSize:"20px",fontWeight:"400"}}>Connect Wallet</button>
      </div>
      <div >
<img src={Home} alt="not found"  />
      </div>
    </div>
    
  )
}

export default home
