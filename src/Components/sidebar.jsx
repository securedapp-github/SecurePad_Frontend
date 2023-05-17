import { ConnectButton } from "@rainbow-me/rainbowkit";
import React,{useEffect} from 'react'
import '../Style/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import {faCircleO} from '@fortawesome/fontawesome-free-regular'
import {Link} from  'react-router-dom'
import Wallet from './Wallet.jsx'
import Contact from './contact.jsx'
import Price from './price.jsx'
import Token from './token.jsx'
import Contract from './contract.jsx'
import Send from './send.jsx'
import Sale from './sale.jsx'
import {Dropdown} from'react-bootstrap'
import Logo from '../assets/logo.png'
function Sidebar(props) {
    const {page}=props
    function Main(){
        if(page=="contact")return <Contact/>
        if(page=="pricing")return <Price/>
        if(page=="wallet")return <Wallet/>
        if(page=="token")return <Token/>
        if(page=="contract")return <Contract/>
        if(page=="send")return <Send/>
        if(page=="sale")return <Sale/>
    }
    function NavIcons(){
            let ai=document.getElementsByClassName('riht')[0]
    
            if(window.innerWidth>648)return (<><Link to="/pricing" className="rihtLink"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link> 
            <Link to="/contact" className="rihtLink"><div style={{padding:"10px",color:"white"}}>Contact</div></Link> 
            <ConnectButton showBalance={false} /> </>)
            if(window.innerWidth<=648)return (<Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Menu
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdown-basic" style={{backgroundColor:"#0d0d3a"}}>
                  <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/pricing"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link></Dropdown.Item>
                  <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/contact"><div style={{padding:"10px",color:"white"}}>Contact</div></Link> </Dropdown.Item>
                  <Dropdown.Item href=""><ConnectButton showBalance={false} /></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>)
        }
    // useEffect(()=>{  function NavIcons(){
    //     let ai=document.getElementsByClassName('riht')[0]

    //     if(window.innerWidth>648)ai.appendChild(<><Link to="/pricing" className="rihtLink"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link> 
    //     <Link to="/contact" className="rihtLink"><div style={{padding:"10px",color:"white"}}>Contact</div></Link> 
    //     <ConnectButton showBalance={false} /> </>)
    //     if(window.innerWidth<=648)ai.appendChild(<Dropdown>
    //         <Dropdown.Toggle variant="success" id="dropdown-basic">
    //           Menu
    //         </Dropdown.Toggle>
    //         <Dropdown.Menu id="dropdown-basic" style={{backgroundColor:"#0d0d3a"}}>
    //           <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/pricing"><div style={{padding:"10px",color:"white"}}>Pricing</div></Link></Dropdown.Item>
    //           <Dropdown.Item href="" style={{fontWeight:"700",color:"white"}}><Link to="/contact"><div style={{padding:"10px",color:"white"}}>Contact</div></Link> </Dropdown.Item>
    //           <Dropdown.Item href=""><ConnectButton showBalance={false} /></Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>)
    // }
    // window.addEventListener('resize',NavIcons);
    // return ()=>{
    // window.removeEventListener('resize',NavIcons)
    // }
    // },[])
  return (
    <div className="mainpage">
        <div className="sidebar">
            <Link to='/'><img src={Logo} alt="not found" /> </Link>
          <Link to="/"> <div > <svg width="40" height="30" viewBox="0 0 169 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_266_9)">
<path d="M163.239 65.2954C163.239 98.1752 136.584 124.83 103.705 124.83C70.8247 124.83 44.1704 98.1752 44.1704 65.2954C44.1704 32.4156 70.8247 5.76135 103.705 5.76135C136.584 5.76135 163.239 32.4156 163.239 65.2954Z" stroke="#464646" stroke-width="10"/>
<path d="M124.83 103.705C124.83 136.584 98.1752 163.239 65.2954 163.239C32.4156 163.239 5.76135 136.584 5.76135 103.705C5.76135 70.8248 32.4156 44.1705 65.2954 44.1705C98.1752 44.1705 124.83 70.8248 124.83 103.705Z" fill="#101010" stroke="#464646" stroke-width="10"/>
</g>
<defs>
<clipPath id="clip0_266_9">
<rect width="169" height="169" fill="white"/>
</clipPath>
</defs>
</svg></div></Link> 
           <Link to="/token"> <div > <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="27.000000pt" height="25.000000pt" viewBox="0 0 21.000000 21.000000"
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
</svg> </div></Link> 
            <Link to="/contract"><div ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="22.000000pt" height="23.000000pt" viewBox="0 0 22.000000 23.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,23.000000) scale(0.100000,-0.100000)"
fill="#464646" stroke="none">
<path d="M42 208 c-7 -7 -12 -22 -12 -35 0 -14 -6 -23 -15 -23 -10 0 -15 -10
-15 -30 0 -20 5 -30 15 -30 9 0 15 -9 15 -24 0 -34 26 -53 51 -38 15 9 23 9
38 0 25 -15 51 4 51 37 0 14 7 25 20 28 12 3 20 14 20 27 0 13 -8 24 -20 27
-13 3 -20 14 -20 28 0 34 -26 52 -52 36 -15 -9 -23 -10 -31 -2 -14 14 -30 14
-45 -1z m38 -8 c0 -13 37 -13 42 1 6 19 38 -3 38 -27 0 -14 7 -27 15 -30 8 -4
15 -14 15 -24 0 -10 -7 -20 -15 -24 -8 -3 -15 -16 -15 -30 0 -24 -32 -46 -38
-27 -5 14 -39 14 -44 0 -6 -19 -38 3 -38 27 0 14 -7 27 -15 30 -19 8 -19 40 0
48 8 3 15 16 15 30 0 22 10 33 33 35 4 1 7 -3 7 -9z"/>
<path d="M90 152 c-31 -10 -37 -34 -15 -55 27 -28 73 1 59 37 -7 18 -24 25
-44 18z m30 -32 c0 -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13
0 20 -7 20 -20z"/>
</g>
</svg></div></Link>
            <Link to="/send"><div> <svg width="35" height="27" viewBox="0 0 22 19" fill="#464646" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2075 0.455312C21.0913 0.35497 20.9499 0.288235 20.7986 0.262299C20.6473 0.236362 20.4917 0.252207 20.3487 0.308125L1.34937 7.74344C1.0801 7.84814 0.85214 8.03748 0.699797 8.28296C0.547454 8.52843 0.478977 8.81675 0.504676 9.10451C0.530374 9.39227 0.648857 9.6639 0.842287 9.87849C1.03572 10.0931 1.29362 10.239 1.57718 10.2944L6.49999 11.2609V16.75C6.49902 17.049 6.58787 17.3414 6.75503 17.5893C6.92219 17.8372 7.15995 18.0291 7.43749 18.1403C7.71461 18.2535 8.01936 18.2806 8.31213 18.2183C8.60489 18.1559 8.87211 18.0069 9.07906 17.7906L11.4528 15.3287L15.2187 18.625C15.4904 18.866 15.8409 18.9994 16.2041 19C16.3632 18.9999 16.5214 18.9749 16.6728 18.9259C16.9203 18.8474 17.1428 18.7054 17.3183 18.5141C17.4938 18.3228 17.6162 18.0889 17.6731 17.8356L21.4784 1.28125C21.5125 1.13195 21.5052 0.976206 21.4575 0.830706C21.4098 0.685206 21.3234 0.555438 21.2075 0.455312ZM15.4756 3.83031L7.07656 9.84531L2.42656 8.93312L15.4756 3.83031ZM7.99999 16.75V12.2987L10.3241 14.3369L7.99999 16.75ZM16.2059 17.5L8.45468 10.7031L19.6109 2.70719L16.2059 17.5Z" fill="#464646"/>
</svg>
</div></Link>
            <Link to="/sale"><div >
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="21.000000pt" height="22.000000pt" viewBox="0 0 21.000000 22.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,22.000000) scale(0.100000,-0.100000)"
fill="#464646" stroke="none">
<path d="M75 213 c-11 -3 -32 -17 -48 -31 -22 -21 -27 -34 -27 -72 0 -38 5
-51 29 -74 67 -64 177 -16 175 75 -2 65 -67 116 -129 102z m90 -38 c35 -34 35
-96 0 -130 -34 -35 -96 -35 -130 0 -35 34 -35 96 0 130 34 35 96 35 130 0z"/>
<path d="M78 159 c-22 -12 -23 -38 -3 -45 8 -4 15 -15 15 -26 0 -17 -3 -18
-15 -8 -10 8 -15 9 -15 2 0 -20 38 -34 60 -22 24 13 26 38 5 46 -8 4 -15 15
-15 26 0 17 3 18 15 8 10 -8 15 -9 15 -2 0 6 -9 16 -19 22 -23 12 -22 12 -43
-1z m12 -25 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m40 -55
c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z"/>
</g>
</svg>
</div></Link>
            <div ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="23.000000pt" height="21.000000pt" viewBox="0 0 23.000000 21.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)"
fill="#464646" stroke="none">
<path d="M52 198 c-7 -7 -12 -22 -12 -34 0 -13 -8 -24 -20 -27 -27 -7 -27 -47
0 -54 13 -3 20 -14 20 -28 0 -33 26 -52 51 -37 15 9 23 9 38 0 25 -15 51 4 51
37 0 14 7 25 20 28 12 3 20 14 20 27 0 13 -8 24 -20 27 -13 3 -20 14 -20 28 0
34 -26 52 -52 36 -15 -9 -23 -10 -31 -2 -14 14 -30 14 -45 -1z m38 -8 c0 -13
37 -13 42 1 6 19 38 -3 38 -27 0 -14 7 -27 15 -30 8 -4 15 -14 15 -24 0 -10
-7 -20 -15 -24 -8 -3 -15 -16 -15 -30 0 -24 -32 -46 -38 -27 -5 14 -39 14 -44
0 -6 -19 -38 3 -38 27 0 14 -7 27 -15 30 -19 8 -19 40 0 48 8 3 15 16 15 30 0
22 10 33 33 35 4 1 7 -3 7 -9z"/>
<path d="M109 140 c-3 -14 -2 -38 1 -55 6 -29 6 -29 11 -5 3 14 2 39 -1 55 -6
29 -6 29 -11 5z"/>
</g>
</svg></div>
            <div ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="22.000000pt" height="22.000000pt" viewBox="0 0 22.000000 22.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,22.000000) scale(0.100000,-0.100000)"
fill="#464646" stroke="none">
<path d="M80 207 c-13 -7 -29 -26 -35 -42 -5 -16 -18 -38 -27 -47 -22 -22 -23
-67 -4 -94 12 -16 27 -19 96 -19 69 0 84 3 96 19 20 28 17 73 -6 96 -11 11
-22 31 -26 44 -11 44 -54 63 -94 43z m78 -39 c3 -27 2 -28 -47 -28 -47 0 -51
2 -51 23 0 33 9 38 55 35 35 -3 40 -6 43 -30z m42 -98 l0 -50 -90 0 -90 0 0
50 0 50 90 0 90 0 0 -50z"/>
<path d="M84 86 c-10 -26 4 -48 28 -44 33 4 33 52 0 56 -13 2 -25 -3 -28 -12z
m42 -7 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/>
</g>
</svg></div>
        </div>
        <div className="dashboard" style={{overflow:"auto"}} >
    <div className="navbar" style={{color:"whitesmoke",fontWeight:"700"}}>
    <div  className="navBrand" style={{position:"absolute",left:"2%"}}><div><span  style={{color:"#12D576"}}>Token Tool</span><span> by SecureDApp</span></div></div>   
      <div className="riht" style={{position:"absolute",right:"3%"}}>
        <NavIcons/>
        </div>
    </div>
    <Main/>
    </div>
    </div>
  )
}

export default Sidebar
