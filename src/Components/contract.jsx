import React from 'react'
import '../Style/contract.css'
function contract() {
  return (
    <div className="tokenBody" style={{padding:"2%",justifyContent:"center"}}>
      <div className="tokenCreate" style={{width:"45%"}}>
        <h2 style={{fontWeight:"700",color:"#12D576"}}>Manage your tokens</h2>
        <div style={{paddingTop:"1%",padding:"2%",display:"flex",flexDirection:"row"}}><input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html" style={{color:"#949494",padding:"0 2%"}}>Create liquidity tool</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>
        <input type="radio" id="css" name="fav_language" value="CSS"/>
        <label htmlFor="css" style={{color:"#949494",padding:"0 2%"}}>Mint additional tokens, burn tokens</label><br/>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label htmlFor="javascript" style={{color:"#949494",padding:"0 2%"}}>Change token owner or renounce ownership</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>
        <input type="radio" id="scss" name="fav_language" value="SCSS"/>
        <label htmlFor="scss" style={{color:"#949494",padding:"0 2%"}}>Pause and unpause, manage whitelist and blacklist</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}>
        <input type="radio" id="sass" name="fav_language" value="SASS"/>
        <label htmlFor="sass" style={{color:"#949494",padding:"0 2%"}}>Works with all your tokens, even if created without Token Tool</label>
        </div>
      </div>
      <div className="tokenSettings" style={{width:"45%",backgroundColor:"transparent",border:"0",borderLeft:"1px solid"}}>
      <h3 style={{color:"white"}}>Token Contract Address</h3>
       <input type="text" style={{backgroundColor:"transparent",border:"1px solid #464646",borderRadius:"6px",width:"100%",color:"white"}}/>
       <button style={{padding:"2% 7%",backgroundColor:"#12D576",borderRadius:"25px",marginTop:"1%"}}>Continue</button>
       <h5 style={{padding:"3% 0",color:"white"}}>Don't have your token yet ? <span style={{color:"#12D576",fontWeight:"700"}}>Create Token</span></h5>
      </div>
    </div>
  )
}

export default contract
