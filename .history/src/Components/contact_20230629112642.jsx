import React from 'react'
import '../Style/contact.css'
function contact(props) {
  const {theme}=props
  return (
    
    <div style={{backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`,padding:"2vw 20vw"}}>
    <h1 className="head" style={{color:`${theme==='Dark' ? 'white':'black'}`,borderBottom:`1px solid ${theme==='Dark' ? 'white':'black'}`}} >Contact Us</h1>
    <form method="post" style={{padding:"0 2%"}} action="">
    
    <div className="mail">    
    <input type="email" id="email" placeholder="Email Address"/>
    <input type="number" id="phone" placeholder="Phone Number"/>
    </div>
    <div style={{padding: "2% 0",margin:"0 auto"}} >
    <textarea name="mensaje" id="mensaje" style={{margin:"0 auto"}}  cols="250" rows="10" placeholder="Leave us a message."></textarea>
    <div style={{padding: "1% 0",margin:"0 auto"}}>
    <input type="submit"   value="Send"/>
    </div>
    </div>
    </form>
    </div>
  )
}

export default contact
