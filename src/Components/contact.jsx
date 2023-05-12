import React from 'react'
import '../Style/contact.css'
function contact() {
  return (
    <div class="container">
    <h1>Contact Us</h1>
    <hr/>
    <form method="post" action="">
    <div className="name">
    <input type="text" id="firstname" placeholder="First Name"/>
    <input type="text" id="lastname" placeholder="Last Name"/>
    </div>
    <div className="mail">    
    <input type="email" id="email" placeholder="Email Address"/>
    <input type="number" id="phone" placeholder="Phone Number"/>
    </div>
    <label for="mensaje"><textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Leave us a message."></textarea></label>
    <input type="submit" value="Send"/>
    </form>
    </div>
  )
}

export default contact
