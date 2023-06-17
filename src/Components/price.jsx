import React from 'react'
import "../Style/price.css"
function price(props) {
  const {theme}=props
  return (
    <div 
    style={{height:"100%",backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`,paddingTop:"4%"}}>
    <h1 className="head" style={{color:`${theme==='Dark' ? 'white':'black'}`,borderBottom:`1px solid ${theme==='Dark' ? 'white':'black'}`}}>Coming Soon</h1>
     </div>
  )
}

export default price
