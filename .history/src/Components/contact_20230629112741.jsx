import React from 'react'
import '../Style/contact.css'
function contact(props) {
  const {theme}=props
  return (
    
    <div style={{backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`,padding:"2vw 20vw"}}>
    <h1 className="head" style={{color:`${theme==='Dark' ? 'white':'black'}`,borderBottom:`1px solid ${theme==='Dark' ? 'white':'black'}`}} >Contact Us</h1>
    <form method="post" style={{padding:"0 2%"}} action="">
    
   
   
    </form>
    </div>
  )
}

export default contact
