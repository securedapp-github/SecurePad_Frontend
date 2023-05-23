import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import '../Style/main.css'
import Group from '../assets/Group.png'
function Main() {
    const [modal,setModal]=useState(false)
    const [modal1,setModal1]=useState(false)
    const [modal2,setModal2]=useState(false)
    const [modal3,setModal3]=useState(false)
  return (
    <div className="main" style={{padding:"2%",margin:"0 12% 0 15%"}}>
      <div className="mainFirstRow" style={{width:"100%",}}><div style={{paddingTop:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" style={{fill:"#12D576"}} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></div>
      <div style={{paddingLeft:"20px"}}>
       <div style={{padding:"0",margin:"0",fontSize:"35px",fontWeight:"700",color:"#12D576"}}>Manage Token</div> 
        <div style={{fontSize:"25px",color:"white",fontWeight:"300"}}>
      0x65484x051681x151651184500561454351351500505
      </div>
      <div style={{paddingTop:"4%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{fontSize:"30px",fontWeight:"500",color:"#12D576"}}>Test(TTTE)</div>
        <div style={{color:"white",fontSize:"25px"}}><svg width="30" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6379 6.6991C14.7696 6.47107 14.8389 6.21241 14.8389 5.9491C14.8389 5.6858 14.7696 5.42713 14.6379 5.1991L12.4139 1.3471C12.2823 1.11909 12.0929 0.929751 11.8649 0.798111C11.6369 0.666471 11.3782 0.597168 11.1149 0.597168C10.8516 0.597168 10.593 0.666471 10.365 0.798111C10.1369 0.929751 9.94758 1.11909 9.81592 1.3471L1.18192 16.3001C1.05027 16.5281 0.980959 16.7868 0.980957 17.0501C0.980955 17.3134 1.05026 17.5721 1.18191 17.8001C1.31356 18.0281 1.50291 18.2175 1.73093 18.3491C1.95896 18.4808 2.21762 18.5501 2.48092 18.5501H6.92892C7.19239 18.5503 7.45125 18.481 7.67946 18.3494C7.90768 18.2177 8.09719 18.0283 8.22892 17.8001L14.6379 6.6991ZM19.7479 18.5511C20.0113 18.5513 20.2701 18.4821 20.4983 18.3505C20.7264 18.2189 20.9159 18.0296 21.0477 17.8015C21.1794 17.5735 21.2488 17.3147 21.2489 17.0513C21.2489 16.788 21.1796 16.5292 21.0479 16.3011L17.9139 10.8731C17.7823 10.6451 17.5929 10.4558 17.3649 10.3241C17.1369 10.1925 16.8782 10.1232 16.6149 10.1232C16.3516 10.1232 16.093 10.1925 15.865 10.3241C15.6369 10.4558 15.4476 10.6451 15.3159 10.8731L12.1819 16.3011C12.0503 16.5291 11.981 16.7878 11.981 17.0511C11.981 17.3144 12.0503 17.5731 12.1819 17.8011C12.3136 18.0291 12.5029 18.2185 12.7309 18.3501C12.959 18.4818 13.2176 18.5511 13.4809 18.5511H19.7489H19.7479Z" fill="#12D576"/>
</svg>Mumbai</div>
        </div>
      <Button style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 15px",fontSize:"20px",fontWeight:"400"}} variant="">Verify Token</Button>
      <div style={{display:"flex",flexDirection:"row",fontSize:"20px",paddingTop:"4%",gap:"30px"}}>
        <div style={{color:"white"}}>
            <div style={{padding:"5px 0"}}>Token Name</div>
            <div style={{padding:"5px 0"}}>Token Supply</div>
            <div style={{padding:"5px 0"}}>Token Supply</div>
        </div >
        <div style={{color:"#525252"}}>
            <div style={{padding:"5px 0"}}>Test</div>
            <div style={{padding:"5px 0"}}>10,000.0</div>
            <div style={{padding:"5px 0"}}>0x46816813065506510051306581x050206505065106035</div>
        </div>
      </div>
      <div style={{paddingTop:"4%",display:"flex",flexDirection:"row",gap:"20px"}}>
      <Button onClick={() => setModal(true)} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 75px",fontSize:"20px",fontWeight:"450"}} variant="">Mint</Button>
      <Button onClick={() => setModal1(true)} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 75px",fontSize:"20px",fontWeight:"450"}} variant="">Burn</Button>
      <Button onClick={() => setModal2(true)} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Change Owner</Button>
      <Button onClick={() => setModal3(true)} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Renounce Ownership</Button>
      </div>
      <div style={{paddingTop:"2%",display:"flex",flexDirection:"row",gap:"20px"}}>
      <Button style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 20px",fontSize:"20px",fontWeight:"450"}} variant="">Blacklist Address</Button>
      <Button style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 70px",fontSize:"20px",fontWeight:"450"}} variant="">Pause</Button>
      <Button style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 105px",fontSize:"20px",fontWeight:"450"}} variant="">Add Liquidity pool to DEX</Button>
      </div>
      <div style={{paddingTop:"2%",display:"flex",flexDirection:"row",gap:"20px"}}>
      <Button style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 30px",fontSize:"20px",fontWeight:"450"}} variant="">Edit asset documentation</Button>
      <Button style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Change token per address limit</Button>
      <Button style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Force transaction</Button>
      </div>
        </div>
        <Modal
      {...{show:modal,
        onHide:() => setModal(false)}}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
        <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{fontWeight:"700"}}>Mint Token</h4>
        <div >Test  -  current token supply 10,000.00</div>
        <div style={{paddingTop:"30px"}}>Number of new token to mint</div>
        <input type="text" style={{width:"100%",height:"50px",borderRadius:"5px",border:"1px solid #12D576"}}/>
        <div style={{paddingTop:"20px",fontWeight:"700"}}>Recipient address of newly minted tokens</div>
        <input placeholder="Enter recipient address"type="text" style={{width:"100%",height:"50px",borderRadius:"5px",border:"1px solid #949494"}}/>
        <div style={{width:"100%",paddingTop:"15%",display:"flex",flexDirection:"row",jsutifyContent:"space-between",gap:"52%"}}>
        <Button onClick={()=>{setModal(false) }} style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Cancel</Button>
      <Button onClick={()=>{setModal(false) }} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Submit</Button>
        </div>
      </Modal.Body>
    </Modal>
        <Modal
      {...{show:modal1,
        onHide:() => setModal1(false)}}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
                <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <h4 style={{fontWeight:"700"}}>Burn</h4>
        <div >Test  -  current token supply 10,000.00</div>
        <div style={{paddingTop:"30px"}}>In order to burn the token, you need to enter the number of tokens you want to burn.</div>
        <div style={{paddingTop:"20px"}}>Quantity</div>
        <input placeholder="e.g 50000"type="text" style={{width:"100%",height:"50px",borderRadius:"5px",border:"1px solid #949494"}}/>
        <div style={{width:"100%",paddingTop:"15%",display:"flex",flexDirection:"row",jsutifyContent:"space-between",gap:"52%"}}>
        <Button onClick={()=>{setModal1(false) }} style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Cancel</Button>
      <Button onClick={()=>{setModal1(false) }} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Submit</Button>
        </div>
      </Modal.Body>
    </Modal>
        <Modal
      {...{show:modal2,
        onHide:() => setModal2(false)}}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
                <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <h4 style={{fontWeight:"700"}}>Burn</h4>
        <div >Test  -  current token supply 10,000.00</div>
        <div style={{paddingTop:"30px"}}>Specify new owner below.</div>
        <div style={{paddingTop:"20px"}}>Quantity</div>
        <input placeholder="Enter owner address"type="text" style={{width:"100%",height:"50px",borderRadius:"5px",border:"1px solid #949494"}}/>
        <div style={{width:"100%",paddingTop:"15%",display:"flex",flexDirection:"row",jsutifyContent:"space-between",gap:"52%"}}>
        <Button onClick={()=>{setModal2(false) }} style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Cancel</Button>
      <Button onClick={()=>{setModal2(false) }} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Submit</Button>
        </div>
      </Modal.Body>
    </Modal>
        <Modal
      {...{show:modal3,
        onHide:() => setModal3(false)}}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
                <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div style={{paddingTop:"8%",textAlign:"center"}}>
<img src={Group} alt="not found" />
<h4 style={{fontWeight:"700"}}>Are you sure?</h4>
</div>
<div style={{padding:"10% 12%"}}>If you renounce ownership , you will lose the ability to manage the token.</div>
<div style={{width:"100%",paddingTop:"15%",display:"flex",flexDirection:"row",jsutifyContent:"space-between",gap:"52%"}}>
        <Button onClick={()=>{setModal3(false) }} style={{backgroundColor:"transparent",color:"#12D576",border:"2px solid #12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Cancel</Button>
      <Button onClick={()=>{setModal3(false) }} style={{backgroundColor:"#12D576",border:"#12D576",padding:"7px 25px",fontSize:"20px",fontWeight:"450"}} variant="">Confirm</Button>
        </div>
      </Modal.Body>
    </Modal>
      </div>

    </div>
  )
}

export default Main
