import React,{useState} from 'react'
import '../Style/locktoken.css'
import {Button} from 'react-bootstrap'
function LockToken() {
 const [alp,setAlp]=useState(false)
    function Mains(){
        return (    <>
        <div style={{fontSize:"30px",fontWeight:"700",color:"#12D576"}}>TTTE</div>
        <div style={{fontSize:"20px",color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <div>
        <div >Token address</div>
        <div style={{paddingTop:"10%",paddingBottom:"10%"}}>Total Token supply</div>
        <Button onClick={()=>{setAlp(true)}} style={{fontSize:"20px",backgroundColor:"#12D576",border:"#12D576",color:"black",fontWeight:"400",padding:"5% 10%"}}>Create Locker</Button>
    </div>
    <div>
        <div>
<svg width="20" height="22" style={{paddingRight:"2px"}} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576"/>
</svg>0x6581613221851c216531z516818151121351613515</div>
        <div style={{color:"#525252",paddingTop:"3%"}}>
         10,000.0</div>
    </div>
</div>
</>
    )
    }
    function Mains1(){
       return ( <>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:"30px",fontWeight:"700",color:"#12D576",paddingBottom:"4%"}}>
            <div>
                TTTE
            </div>
            <div>
                0.0% Locked
            </div>
        </div>
        <div style={{fontSize:"20px",color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <div>
        <div >Token address</div>
        <div style={{paddingTop:"10%"}}>Total Token supply</div>
        <div style={{paddingTop:"10%"}}>Total Token supply</div>
        <div style={{paddingTop:"10%",paddingBottom:"10%"}}>Total local token</div>
    </div>
    <div>
        <div>
<svg width="20" height="22" style={{paddingRight:"2px"}} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576"/>
</svg>0x6581613221851c216531z516818151121351613515</div>
        <div style={{paddingTop:"3%"}}>
<svg width="20" height="22" style={{paddingRight:"2px"}} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576"/>
</svg>0x96478574351831681235165x351655135135c355</div>
        <div style={{color:"#525252",paddingTop:"4%"}}>
         10,010.0</div>
        <div style={{color:"#525252",paddingTop:"3%"}}>
         0.0</div>
    </div>
</div>
<div style={{paddingTop:'4%',display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<Button style={{fontSize:"20px",backgroundColor:"#12D576",border:"1px solid #12D576",color:"black",fontWeight:"400",padding:"1% 12%"}}>Specify token lock</Button>
<Button style={{fontSize:"20px",backgroundColor:"transparent",border:"1px solid #12D576",color:"#12D576",fontWeight:"400",padding:"1% 20%"}}>Share</Button>
</div>
        </>)
    }

  return (
    <div class="locktoken" style={{padding:"2%",margin:"0 12% 0 15%"}}>
            <div className="lockTokenFirstRow" style={{width:"110%"}}><div style={{paddingTop:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" style={{fill:"#12D576"}} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></div>
              <div style={{paddingLeft:"20px",width:"70%"}}>
       <div style={{padding:"0",margin:"0",fontSize:"35px",fontWeight:"700",color:"#12D576"}}>Lock Token</div> 
        <div style={{fontSize:"25px",color:"white",fontWeight:"300",paddingBottom:"6%"}}>
      0x65484x051681x151651184500561454351351500505
      </div>
      <div className="lockTokenSecondRow" style={{width:"100%",padding:"5% 5%",border:"2px dotted #464646"}}>
    {alp ? <Mains1/>:<Mains/>}
    </div>
    </div>
    </div>
    </div>
  )
}

export default LockToken
