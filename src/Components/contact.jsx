import React from 'react'
import '../Style/contact.css'
function contact() {
  return (
    <div style={{backgroundImage:"linear-gradient(to right,black,rgb(14, 14, 61))",paddingTop:"1%"}}>
    <h1 className="head">Contact Us</h1>
    <hr/>
    <form method="post" style={{padding:"0 2%"}} action="">
    <div className="name">
    <input type="text" id="firstname" placeholder="First Name"/>
    <input type="text" id="lastname" placeholder="Last Name"/>
    </div>
    <div className="mail">    
    <input type="email" id="email" placeholder="Email Address"/>
    <input type="number" id="phone" placeholder="Phone Number"/>
    </div>
    <textarea name="mensaje" id="mensaje" cols="250" style={{margin: "2% auto"}} rows="10" placeholder="Leave us a message."></textarea>
    <input type="submit" value="Send"/>
    
    </form>
    </div>
  )
}

export default contact
