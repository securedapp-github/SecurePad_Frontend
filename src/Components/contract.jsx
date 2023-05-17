import React from 'react'
import '../Style/contract.css'
function contract() {
  
  return (
    <div className="tokenBody" style={{padding:"2%",justifyContent:"center"}}>
      <div className="tokenCreate" style={{width:"45%"}}>
        <h2 style={{fontWeight:"700",color:"#12D576"}}>Manage your tokens</h2>
        <div style={{paddingTop:"1%",padding:"2%",display:"flex",flexDirection:"row"}}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="13.000000pt" height="20.000000pt" viewBox="0 0 21.000000 21.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
        fill="#464646" stroke="none">
        <path d="M61 197 c-14 -6 -34 -27 -44 -46 -59 -99 85 -203 160 -116 47 53 40
        114 -17 153 -37 25 -64 27 -99 9z m109 -32 c54 -54 12 -149 -65 -149 -73 0
        -117 91 -70 145 41 45 91 46 135 4z"/>
        <path d="M66 149 c-15 -12 -26 -30 -26 -44 0 -24 41 -65 65 -65 24 0 65 41 65
        65 0 24 -41 65 -65 65 -7 0 -24 -9 -39 -21z m74 -9 c11 -11 20 -27 20 -35 0
        -19 -36 -55 -55 -55 -19 0 -55 36 -55 55 0 19 36 55 55 55 8 0 24 -9 35 -20z"/>
        </g>
        </svg> 
        <label htmlFor="html" style={{color:"#949494",padding:"0 2%"}}>Create liquidity tool</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="13.000000pt" height="20.000000pt" viewBox="0 0 21.000000 21.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
        fill="#464646" stroke="none">
        <path d="M61 197 c-14 -6 -34 -27 -44 -46 -59 -99 85 -203 160 -116 47 53 40
        114 -17 153 -37 25 -64 27 -99 9z m109 -32 c54 -54 12 -149 -65 -149 -73 0
        -117 91 -70 145 41 45 91 46 135 4z"/>
        <path d="M66 149 c-15 -12 -26 -30 -26 -44 0 -24 41 -65 65 -65 24 0 65 41 65
        65 0 24 -41 65 -65 65 -7 0 -24 -9 -39 -21z m74 -9 c11 -11 20 -27 20 -35 0
        -19 -36 -55 -55 -55 -19 0 -55 36 -55 55 0 19 36 55 55 55 8 0 24 -9 35 -20z"/>
        </g>
        </svg> 
        <label htmlFor="css" style={{color:"#949494",padding:"0 2%"}}>Mint additional tokens, burn tokens</label><br/>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="13.000000pt" height="20.000000pt" viewBox="0 0 21.000000 21.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
        fill="#464646" stroke="none">
        <path d="M61 197 c-14 -6 -34 -27 -44 -46 -59 -99 85 -203 160 -116 47 53 40
        114 -17 153 -37 25 -64 27 -99 9z m109 -32 c54 -54 12 -149 -65 -149 -73 0
        -117 91 -70 145 41 45 91 46 135 4z"/>
        <path d="M66 149 c-15 -12 -26 -30 -26 -44 0 -24 41 -65 65 -65 24 0 65 41 65
        65 0 24 -41 65 -65 65 -7 0 -24 -9 -39 -21z m74 -9 c11 -11 20 -27 20 -35 0
        -19 -36 -55 -55 -55 -19 0 -55 36 -55 55 0 19 36 55 55 55 8 0 24 -9 35 -20z"/>
        </g>
        </svg> 
        <label htmlFor="javascript" style={{color:"#949494",padding:"0 2%"}}>Change token owner or renounce ownership</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="13.000000pt" height="20.000000pt" viewBox="0 0 21.000000 21.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
        fill="#464646" stroke="none">
        <path d="M61 197 c-14 -6 -34 -27 -44 -46 -59 -99 85 -203 160 -116 47 53 40
        114 -17 153 -37 25 -64 27 -99 9z m109 -32 c54 -54 12 -149 -65 -149 -73 0
        -117 91 -70 145 41 45 91 46 135 4z"/>
        <path d="M66 149 c-15 -12 -26 -30 -26 -44 0 -24 41 -65 65 -65 24 0 65 41 65
        65 0 24 -41 65 -65 65 -7 0 -24 -9 -39 -21z m74 -9 c11 -11 20 -27 20 -35 0
        -19 -36 -55 -55 -55 -19 0 -55 36 -55 55 0 19 36 55 55 55 8 0 24 -9 35 -20z"/>
        </g>
        </svg> 
        <label htmlFor="scss" style={{color:"#949494",padding:"0 2%"}}>Pause and unpause, manage whitelist and blacklist</label>
        </div>
        <div style={{padding:"2%",display:"flex",flexDirection:"row"}}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="13.000000pt" height="20.000000pt" viewBox="0 0 21.000000 21.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
        fill="#464646" stroke="none">
        <path d="M61 197 c-14 -6 -34 -27 -44 -46 -59 -99 85 -203 160 -116 47 53 40
        114 -17 153 -37 25 -64 27 -99 9z m109 -32 c54 -54 12 -149 -65 -149 -73 0
        -117 91 -70 145 41 45 91 46 135 4z"/>
        <path d="M66 149 c-15 -12 -26 -30 -26 -44 0 -24 41 -65 65 -65 24 0 65 41 65
        65 0 24 -41 65 -65 65 -7 0 -24 -9 -39 -21z m74 -9 c11 -11 20 -27 20 -35 0
        -19 -36 -55 -55 -55 -19 0 -55 36 -55 55 0 19 36 55 55 55 8 0 24 -9 35 -20z"/>
        </g>
        </svg> 
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
