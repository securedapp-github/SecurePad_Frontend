import React from 'react'
import "../Style/price.css"
function price(props) {
  const {theme}=props
  return (
    <div 
    style={{height:"100%",backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`,paddingTop:"4%"}}>
    <h1 className="head" style={{color:`${theme==='Dark' ? 'white':'black'}`,borderBottom:`1px solid ${theme==='Dark' ? 'white':'black'}`}}>Coming Soon</h1>
     </div>

    // <div 
    // style={{height:"100%",backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`,paddingTop:"4%"}}>
    // <h1 className="head" style={{color:`${theme==='Dark' ? 'white':'black'}`,borderBottom:`1px solid ${theme==='Dark' ? 'white':'black'}`}}>Our Price</h1>
    //  <div className="price-section">  
    // <div className="price-section-items">
    //     <div className="card">
    //       <div className="card-header">
    //         <h2 className="topic">Chihuahua</h2>
    //       </div>
    //       <div className="card-body">
    //         <h3 className="price-text">$49 / mo</h3>
    //         <p>5 Matches Per Day</p>
    //         <p>10 Messages Per Day</p>
    //         <p>Unlimited App Usage</p>
    //       </div>
    //     </div>
    // </div>
    // <div className="price-section-items">
    //     <div className="card">
    //       <div className="card-header">
    //         <h2 className="topic">Chihuahua</h2>
    //       </div>
    //       <div className="card-body">
    //         <h3 className="price-text">$49 / mo</h3>
    //         <p>5 Matches Per Day</p>
    //         <p>10 Messages Per Day</p>
    //         <p>Unlimited App Usage</p>
    //       </div>
    //     </div>
    // </div>
    // <div className="price-section-items">
    //     <div className="card">
    //       <div className="card-header">
    //         <h2 className="topic">Chihuahua</h2>
    //       </div>
    //       <div className="card-body">
    //         <h3 className="price-text">$49 / mo</h3>
    //         <p>5 Matches Per Day</p>
    //         <p>10 Messages Per Day</p>
    //         <p>Unlimited App Usage</p>
    //       </div>
    //     </div>
    // </div>
    // <div className="price-section-items">
    //     <div className="card">
    //       <div className="card-header">
    //         <h2 className="topic">Chihuahua</h2>
    //       </div>
    //       <div className="card-body">
    //         <h3 className="price-text">$49 / mo</h3>
    //         <p>5 Matches Per Day</p>
    //         <p>10 Messages Per Day</p>
    //         <p>Unlimited App Usage</p>
    //       </div>
    //     </div>
    // </div>
    //  </div>
    //  </div>
  )
}

export default price
