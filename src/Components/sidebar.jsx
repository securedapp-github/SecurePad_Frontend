import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect,useState } from 'react'
import 'Style/sidebar.css'
import { Link } from 'react-router-dom'
import Wallet from './Wallet.jsx'
import Contact from './contact.jsx'
import Price from './price.jsx'
import Token from './token.jsx'
import Contract from './contract.jsx'
import Sale from './sale.jsx'
import Logo from '../assets/logo.png'
import Lock from './lock.jsx'
import Home from './home.jsx'
import Manage from './manage.jsx'
import Search from './search.jsx'
import ManageLock from './manageLock.jsx'
import BuySale from './buysale.jsx'
import Mains from './main.jsx'
import LockToken from './lockToken.jsx'
import Saletoken from './saleToken.jsx'
import ManageSale from './managesale.jsx'
import DistributeToken from './distributeToken.jsx'
import EditSale from './editSale.jsx'
import Error from './error.jsx'
import {useLocation} from 'react-router-dom'
import { Offcanvas } from "react-bootstrap";
import {Side1} from './sidebar1.jsx'

import {
  useAccount
} from "wagmi";


function Sidebar(props) {
  useEffect(()=>{
    let alp=document.getElementById('sidebar2')
    alp.addEventListener('click',()=>{
      alp.style.transform='translate(-100vw)'
    })
  },[])
  const [expand1,setExpand1]=useState(false)
  const [col,setCol]=useState([false,false,false,false,false,false,false,false,false,false,false,false])
  const [show, setShow] = useState(false);
  const [theme,setTheme]=useState('Dark')
  const handleShow = () => {
    let alp=document.getElementById('sidebar2')
      alp.style.transform='translate(10px)';setExpand1(true);
    // setTimeout(()=>{
    // if(alp && theme==='Dark')alp.style.backgroundColor='#101010'
    // if(alp && theme==='Light')alp.style.backgroundColor='whitesmoke'},50)
  }
  const [size,setSize]=useState("0")
  const { page } = props
  const location=useLocation()
  function Main() {
    const { address } = useAccount();
    if (page == "home") return <Home />
    if(page== "error")return <Error/>
    if (typeof address == 'undefined') {
      return <Wallet />
    } else {
      if (page == "contact") return <Contact theme={theme}/>
      if (page == "pricing") return <Price theme={theme}/>
      if (page == "wallet") return <Wallet theme={theme}/>
      if (page == "token") return <Token theme={theme}/>
      if (page == "contract") return <Contract theme={theme}/>
      if (page == "sale") return <Sale theme={theme}/>
      if (page == "lock") return <Lock theme={theme}/>
      if (page == 'manage') return <Manage theme={theme}/>
      if (page == "search") return <Search theme={theme}/>
      if (page == "locktoken") return <LockToken />
      if (page == "managelock") return <ManageLock />
      if (page == "buysale") return <BuySale theme={theme}/>
      if(page=='managetoken'){
        return <Mains theme={theme}/>
      }
      if(page=='locktoken'){
        return <LockToken theme={theme}/>
      }
      if(page=='saletoken'){
        return <Saletoken theme={theme}/>
      }
      if(page=='editsale'){
        return <EditSale theme={theme}/>
      }
      if(page=='managesale'){
        return <ManageSale theme={theme}/>
      }
      if(page=='distributetoken'){
        return <DistributeToken theme={theme}/>
      }
    }
  }
  function Toggle(){
    let alp=document.getElementsByClassName('offcanvas')[0]
    if(theme==='Dark'){setTheme('Light'); 
    if(alp)alp.style.backgroundColor='whitesmoke'}
    else {setTheme('Dark');
    if(alp)alp.style.backgroundColor='#101010'}
  }
  function ThemeIcon(){
    if(theme==='Dark') return (<svg width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.465 12.7708C17.635 12.3658 17.1492 12.0208 16.7417 12.2008C15.9271 12.5584 15.047 12.7423 14.1575 12.7408C10.67 12.7408 7.84333 9.97084 7.84333 6.55334C7.84206 5.39946 8.16988 4.26914 8.78833 3.295C9.025 2.92167 8.74083 2.405 8.3075 2.515C4.96667 3.3675 2.5 6.34417 2.5 9.885C2.5 14.0908 5.97917 17.5 10.2717 17.5C13.5217 17.5 16.305 15.5458 17.465 12.7708Z" fill="#12D576"/>
    <path d="M13.0092 2.58583C12.5675 2.29083 12.0408 2.8175 12.335 3.25916L12.86 4.04666C13.073 4.36597 13.1866 4.74118 13.1866 5.125C13.1866 5.50881 13.073 5.88403 12.86 6.20333L12.335 6.99083C12.0408 7.4325 12.5683 7.95916 13.01 7.66416L13.7967 7.13916C14.116 6.92619 14.4912 6.81254 14.875 6.81254C15.2588 6.81254 15.634 6.92619 15.9533 7.13916L16.7408 7.66416C17.1825 7.95916 17.7092 7.4325 17.4142 6.99083L16.8892 6.20333C16.6762 5.88403 16.5625 5.50881 16.5625 5.125C16.5625 4.74118 16.6762 4.36597 16.8892 4.04666L17.4142 3.25916C17.7092 2.8175 17.1825 2.29083 16.74 2.58583L15.9533 3.11083C15.634 3.3238 15.2588 3.43746 14.875 3.43746C14.4912 3.43746 14.116 3.3238 13.7967 3.11083L13.0092 2.58583Z" fill="#12D576"/>
    </svg>)
    else return (<svg width="19" height="19"  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 14.25C8.24022 14.25 7.03204 13.7496 6.14124 12.8588C5.25044 11.968 4.75 10.7598 4.75 9.5C4.75 8.24022 5.25044 7.03204 6.14124 6.14124C7.03204 5.25044 8.24022 4.75 9.5 4.75C10.7598 4.75 11.968 5.25044 12.8588 6.14124C13.7496 7.03204 14.25 8.24022 14.25 9.5C14.25 10.7598 13.7496 11.968 12.8588 12.8588C11.968 13.7496 10.7598 14.25 9.5 14.25ZM9.5 12.4688C10.2874 12.4688 11.0425 12.156 11.5992 11.5992C12.156 11.0425 12.4688 10.2874 12.4688 9.5C12.4688 8.71264 12.156 7.95753 11.5992 7.40078C11.0425 6.84403 10.2874 6.53125 9.5 6.53125C8.71264 6.53125 7.95753 6.84403 7.40078 7.40078C6.84403 7.95753 6.53125 8.71264 6.53125 9.5C6.53125 10.2874 6.84403 11.0425 7.40078 11.5992C7.95753 12.156 8.71264 12.4688 9.5 12.4688ZM16.2177 2.78231C16.3004 2.86502 16.3661 2.96323 16.4109 3.07132C16.4557 3.17941 16.4787 3.29527 16.4787 3.41228C16.4787 3.52929 16.4557 3.64515 16.4109 3.75324C16.3661 3.86133 16.3004 3.95954 16.2177 4.04225L14.9577 5.301C14.8489 5.41824 14.7104 5.50394 14.5569 5.54908C14.4035 5.59422 14.2406 5.59713 14.0856 5.5575C13.9306 5.51787 13.7892 5.43717 13.6762 5.32389C13.5633 5.21062 13.4829 5.06897 13.4437 4.91388C13.404 4.75905 13.4068 4.5964 13.4517 4.44302C13.4966 4.28964 13.5821 4.15119 13.699 4.04225L14.9577 2.7835C15.1247 2.61672 15.3511 2.52303 15.5871 2.52303C15.8231 2.52303 16.0495 2.61672 16.2165 2.7835L16.2177 2.78231ZM5.301 13.699C5.46779 13.866 5.56147 14.0924 5.56147 14.3284C5.56147 14.5644 5.46779 14.7908 5.301 14.9577L4.04225 16.2177C3.96013 16.3028 3.86189 16.3707 3.75325 16.4174C3.64461 16.4641 3.52776 16.4888 3.4095 16.4898C3.29125 16.4909 3.17396 16.4684 3.06448 16.4237C2.95501 16.379 2.85554 16.3129 2.77188 16.2293C2.68821 16.1457 2.62204 16.0463 2.5772 15.9369C2.53237 15.8275 2.50978 15.7102 2.51075 15.5919C2.51172 15.4737 2.53624 15.3568 2.58286 15.2481C2.62949 15.1394 2.69729 15.0411 2.78231 14.9589L4.04106 13.699C4.12377 13.6162 4.22198 13.5506 4.33007 13.5058C4.43816 13.461 4.55402 13.4379 4.67103 13.4379C4.78804 13.4379 4.9039 13.461 5.01199 13.5058C5.12008 13.5506 5.21829 13.6162 5.301 13.699ZM9.5 0C9.73621 0 9.96274 0.0938334 10.1298 0.260858C10.2968 0.427883 10.3906 0.654417 10.3906 0.890625V2.67188C10.3906 2.90808 10.2968 3.13462 10.1298 3.30164C9.96274 3.46867 9.73621 3.5625 9.5 3.5625C9.26379 3.5625 9.03726 3.46867 8.87023 3.30164C8.70321 3.13462 8.60938 2.90808 8.60938 2.67188V0.890625C8.60938 0.654417 8.70321 0.427883 8.87023 0.260858C9.03726 0.0938334 9.26379 0 9.5 0ZM3.5625 9.5C3.5625 9.73621 3.46867 9.96274 3.30164 10.1298C3.13462 10.2968 2.90808 10.3906 2.67188 10.3906H0.890625C0.654417 10.3906 0.427883 10.2968 0.260858 10.1298C0.0938334 9.96274 0 9.73621 0 9.5C0 9.26379 0.0938334 9.03726 0.260858 8.87023C0.427883 8.70321 0.654417 8.60938 0.890625 8.60938H2.67188C2.90808 8.60938 3.13462 8.70321 3.30164 8.87023C3.46867 9.03726 3.5625 9.26379 3.5625 9.5ZM19 9.5C19 9.73621 18.9062 9.96274 18.7391 10.1298C18.5721 10.2968 18.3456 10.3906 18.1094 10.3906H16.3281C16.0919 10.3906 15.8654 10.2968 15.6984 10.1298C15.5313 9.96274 15.4375 9.73621 15.4375 9.5C15.4375 9.26379 15.5313 9.03726 15.6984 8.87023C15.8654 8.70321 16.0919 8.60938 16.3281 8.60938H18.1094C18.3456 8.60938 18.5721 8.70321 18.7391 8.87023C18.9062 9.03726 19 9.26379 19 9.5ZM9.5 15.4375C9.73621 15.4375 9.96274 15.5313 10.1298 15.6984C10.2968 15.8654 10.3906 16.0919 10.3906 16.3281V18.1094C10.3906 18.3456 10.2968 18.5721 10.1298 18.7391C9.96274 18.9062 9.73621 19 9.5 19C9.26379 19 9.03726 18.9062 8.87023 18.7391C8.70321 18.5721 8.60938 18.3456 8.60938 18.1094V16.3281C8.60938 16.0919 8.70321 15.8654 8.87023 15.6984C9.03726 15.5313 9.26379 15.4375 9.5 15.4375ZM13.699 13.699C13.866 13.5322 14.0924 13.4385 14.3284 13.4385C14.5644 13.4385 14.7908 13.5322 14.9577 13.699L16.2177 14.9577C16.38 15.1256 16.4699 15.3506 16.468 15.5841C16.466 15.8176 16.3725 16.041 16.2074 16.2063C16.0424 16.3715 15.819 16.4652 15.5855 16.4674C15.352 16.4695 15.127 16.3798 14.9589 16.2177L13.699 14.9589C13.6162 14.8762 13.5506 14.778 13.5058 14.6699C13.461 14.5618 13.4379 14.446 13.4379 14.329C13.4379 14.212 13.461 14.0961 13.5058 13.988C13.5506 13.8799 13.6162 13.7817 13.699 13.699ZM2.78231 2.78231C2.86502 2.69955 2.96323 2.6339 3.07132 2.5891C3.17941 2.54431 3.29527 2.52125 3.41228 2.52125C3.52929 2.52125 3.64515 2.54431 3.75324 2.5891C3.86133 2.6339 3.95954 2.69955 4.04225 2.78231L5.301 4.04225C5.45824 4.21119 5.54386 4.4345 5.53987 4.66525C5.53589 4.896 5.4426 5.11622 5.27962 5.27962C5.11622 5.4426 4.896 5.53589 4.66525 5.53987C4.4345 5.54386 4.21119 5.45824 4.04225 5.301L2.7835 4.04225C2.61672 3.87526 2.52303 3.64889 2.52303 3.41288C2.52303 3.17686 2.61672 2.95049 2.7835 2.7835L2.78231 2.78231Z" fill="black"/>
    </svg>)}

    // function ConnectWallet(){
    //   let alp=document.getElementsByClassName('ju367v8g _12cbo8i4 _12cbo8i6')[0]
    //   if(theme==='Dark')alp.style.color="white"
    //   else alp.style.color='black'
    // }

 useEffect(()=>{ 
ThemeIcon();
// ConnectWallet();
},[theme,location])
  function NavIcons() {
      return (
      <>
        <Link to="/search" className="rihtLink" id='sales'> <div onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,false,false])
                }} style={{ fontWeight: "400", padding: "10px", fontSize: "18px",color:`${theme==='Dark' ? 'white':'black'}` }}>PreSales</div>
        </Link>

        <Link to="/pricing" className="rihtLink" id='pricing'><div onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,false,false])
                }} style={{ fontWeight: "400", padding: "10px", fontSize: "18px",color:`${theme==='Dark' ? 'white':'black'}` }}>Pricing</div>
        </Link>
        <Link to="/contact" className="rihtLink" id='contact'><div onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,false,false])
                }} style={{ fontWeight: "400", padding: "10px",color:`${theme==='Dark' ? 'white':'black'}`, fontSize: "18px", paddingRight: "25px" }}>Contact</div>
        </Link> 
        <ConnectButton showBalance={false} />
        </>)
  }
  
  function showSide(event) {
    let beta = document.getElementsByClassName('sideNavButton')
    let alp2 = document.getElementsByTagName('svg')
    for (let i = 0; i < beta.length; ++i) {
      beta[i].style.border = "0"
      alp2[i].style.fill = "#464646"
    }
    let alp1 = event.target
    if (alp1.tagName == "path") alp1 = alp1.parentNode
    let alp = alp1.parentNode
    alp1.style.fill = "#12D576"
    alp.style.borderLeft = "5px solid #12D576"
  }

  return (
    <div className="mainpage">
          {/* <div onClick={Toggle} id='themeicon' style={{width:'50px',textAlign:'center',cursor:"pointer",color:`${theme==='Dark' ? '#12D576':'black'}`,padding:"0 1.5vw",border:`1px solid ${theme==='Dark' ? '#12D576':'black'}`,borderRadius:"7vw"}}>
          <ThemeIcon/>   
          </div> */}
          {/* <Link to="/search"  id='sales1'> <div style={{marginTop:'10px',cursor:"pointer",color:`${theme==='Dark' ? '#12D576':'black'}`,fontSize:"23px",fontWeight:"400",padding:"0 1.5vw",border:`1px solid ${theme==='Dark' ? '#12D576':'black'}`,borderRadius:"1.5vw"}}>Sales</div>
          </Link>
          <Link to="/pricing"  id='pricing1'><div style={{marginTop:'10px',cursor:"pointer",color:`${theme==='Dark' ? '#12D576':'black'}`,fontSize:"23px",fontWeight:"400",padding:"0 1.5vw",border:`1px solid ${theme==='Dark' ? '#12D576':'black'}`,borderRadius:"1.5vw"}}>Pricing</div>
          </Link> */}
        <div className="sidebar" id='sidebar2' style={{backgroundColor:`${theme==='Dark' ? '#101010':'whitesmoke'}`}}>
            <Link to='/'><div style={{paddingTop:'1.389vw'}} className='expanded_2' onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,false,false])
                }}>
            {/* <svg id='logo_1' style={{width:'100%',marginRight:'2px'}} width="3.2vw" height="3.2vw" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.5" width="55" height="55" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_342_1531" transform="scale(0.00407622 0.004329)"/>
            </pattern>
            <image id="image0_342_1531" width="685" height="231" xlinkHref="data:image/png;base64,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UmVhZHlxyWU8AAAQSGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0wMlQxNDoyMzo0MCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMi0xNVQxMzo1NToxMyswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDItMTVUMTM6NTU6MTMrMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MEMxNTI3QUQwQTExRURCQzczRjhEMDIzN0RGNzdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MEMxNTI4QUQwQTExRURCQzczRjhEMDIzN0RGNzdGIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzBkOTY4YjQtZmRkMC0yNjQxLTk4ZWItYTJkZTU4NWZhMTM1IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMGQ5NjhiNC1mZGQwLTI2NDEtOThlYi1hMmRlNTg1ZmExMzUiIHN0RXZ0OndoZW49IjIwMjMtMDEtMDJUMTQ6MjM6NDArMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmUwMDkwMjgtYmUyMy04ODQxLThkY2EtMzk2ZjI4MjgwZDg2IiBzdEV2dDp3aGVuPSIyMDIzLTAxLTAyVDE1OjQzOjExKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjExNzJhYzVkLWQ1MzktNTU0Ny04YzRkLTIzNGZlNWQwYzJlMSIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0xNVQxMzo1MDozMyswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcyYWM1ZC1kNTM5LTU1NDctOGM0ZC0yMzRmZTVkMGMyZTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzBkOTY4YjQtZmRkMC0yNjQxLTk4ZWItYTJkZTU4NWZhMTM1Ii8+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2VjdXJlRGFwcCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2VjdXJlRGFwcCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNlY3VyZURhcHAiIHBob3Rvc2hvcDpMYXllclRleHQ9IlNlY3VyZURhcHAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJHZXQgeW91ciBjb2RlIHZldHRlZCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iR2V0IHlvdXIgY29kZSB2ZXR0ZWQiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTZWN1cmVEYXBwIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJTZWN1cmVEYXBwIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iR2V0IHlvdXIgY29kZSB2ZXR0ZWQiIHBob3Rvc2hvcDpMYXllclRleHQ9IkdldCB5b3VyIGNvZGUgdmV0dGVkIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2VjdXJlRGFwcCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2VjdXJlRGFwcCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNlY3VyZURhcHAiIHBob3Rvc2hvcDpMYXllclRleHQ9IlNlY3VyZURhcHAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJHZXQgeW91ciBjb2RlIHZldHRlZCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iR2V0IHlvdXIgY29kZSB2ZXR0ZWQiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTZWN1cmVEYXBwIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJTZWN1cmVEYXBwIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iR2V0IHlvdXIgY29kZSB2ZXR0ZWQiIHBob3Rvc2hvcDpMYXllclRleHQ9IkdldCB5b3VyIGNvZGUgdmV0dGVkIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2VjdXJlRGFwcCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2VjdXJlRGFwcCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNlY3VyZURBcHAiIHBob3Rvc2hvcDpMYXllclRleHQ9IlNlY3VyZURBcHAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTZWN1cmVEYXBwIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJTZWN1cmVEYXBwIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2VjdXJlRGFwcCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2VjdXJlRGFwcCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlNlY3VyZURBcHAiIHBob3Rvc2hvcDpMYXllclRleHQ9IlNlY3VyZURBcHAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJTZWN1cmVEYXBwIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJTZWN1cmVEYXBwIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2VjdXJlREFwcCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2VjdXJlREFwcCIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0ICBvZiB0aGUgcHJpbnRpbmcgYW5kICB0eXBlc2V0dCIgcGhvdG9zaG9wOkxheWVyVGV4dD0iTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgIG9mIHRoZSBwcmludGluZyBhbmQgIHR5cGVzZXR0aW5nLiAiLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCAgb2YgdGhlIHByaW50aW5nIGFuZCAgdHlwZXNldHQiIHBob3Rvc2hvcDpMYXllclRleHQ9IkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0ICBvZiB0aGUgcHJpbnRpbmcgYW5kICB0eXBlc2V0dGlu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"/>
            </defs>
            </svg> */}
            <img id='logo_1' src="https://github.com/NagiPragalathan/GeeksforGeeks_files/blob/main/Screenshot_2023-07-17_134527-removebg-preview.png?raw=true" style={{width:'3.2vw',height:'3.2vw'}} alt="" />
            <div className='expanded-2 expanded_3' style={{fontWeight:'700',fontSize:'1.5vw',paddingTop:'0.6vw'}}>SecureDApp</div>
            </div>
            </Link>
            <div style={{paddingTop:'1.62vw',display:'flex',flexDirection:'column',height:'70%',justifyContent:'space-between'}}>
                <Link to='/'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([true,false,false,false,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/home">
                <path id="Vector" d="M12 2L3 9V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9L12 2Z" stroke={col[0] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M9 22V12H15V22" stroke={col[0] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[0] ? '#12D576':'white'}}>Home</div>
                </div>
                </Link>
                <Link to='/search'>
                <div className='expanded' id='sale_logo' style={{display:'none',marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,true,false])
                }}>
                <svg width='1.5vw' height='1.5vw' style={{width:'100%',marginRight:'2px',fill:'transparent',fill:`${col[11] ? '#12D576':'white'}`}} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.41 296.41" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 296.41 296.41">
                <g>
                  <path d="m268.115,109.241l-.007-48.16-45.821-14.862-28.274-39.001-45.808,14.944-45.809-14.943-28.273,39-45.821,14.862-.007,48.161-28.295,38.963 28.296,38.964 .006,48.16 45.821,14.862 28.274,39.001 45.808-14.944 45.809,14.943 28.273-39 45.821-14.862 .007-48.161 28.295-38.963-28.295-38.964zm-171.548,25.239c-4.941-4.971-7.695-11.228-7.695-18.772v-6.753c0-7.602 2.739-13.903 7.651-18.903 4.913-4.999 12.041-7.498 21.106-7.498 9.18,0 16.095,2.499 21.006,7.498 4.913,5 7.237,11.302 7.237,18.903v6.753c0,7.603-2.254,13.874-7.167,18.813-4.912,4.943-11.94,7.412-21.003,7.412-9.122,0.001-16.193-2.484-21.135-7.453zm26.026,68.062l-13.77-6.93 62.363-99.814 13.772,6.93-62.365,99.814zm84.279-14.997c0,7.66-2.392,13.961-7.275,18.902-4.883,4.941-11.83,7.409-20.894,7.409-9.121,0-16.257-2.483-21.258-7.454-4.997-4.97-7.573-11.256-7.573-18.857v-6.754c0-7.543 2.573-13.815 7.544-18.815 4.969-5.001 12.031-7.499 21.093-7.499 9.18,0 16.183,2.487 21.066,7.454 4.883,4.972 7.297,11.258 7.297,18.86v6.754z"/>
                  <path d="m124.645,122.965c1.608-1.947 2.227-4.373 2.227-7.279v-6.711c0-2.903-0.635-5.357-2.272-7.362-1.639-2.005-3.884-3.008-6.924-3.008-2.981,0-5.504,1.003-7.14,3.008-1.637,2.005-2.664,4.459-2.664,7.362v6.711c0,2.906 1.074,5.332 2.71,7.279 1.637,1.945 4.041,2.918 7.142,2.918 2.981-1.42109e-14 5.312-0.973 6.921-2.918z"/>
                  <path d="m178.554,170.527c-3.041,0-5.485,1.005-7.12,3.008-1.641,2.005-2.562,4.432-2.562,7.278v6.708c0,2.792 1.039,5.201 2.912,7.236 1.871,2.033 4.203,3.048 6.893,3.048 3.625,0 6.03-0.899 7.318-2.702 1.284-1.8 1.877-4.327 1.877-7.582v-6.708c0-2.847-0.755-5.273-2.422-7.278-1.667-2.003-3.915-3.008-6.896-3.008z"/>
                </g>
              </svg>
                <div className='expanded-2' style={{color:col[11] ? '#12D576':'white'}}>Presales</div>
                </div>
                </Link>
                <Link to='/wallet'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,true,false,false,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/user">
                <path id="Vector" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={col[1] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={col[1] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[1] ? '#12D576':'white'}}>User Profile</div>
                </div>
                </Link>
                <Link to='/token'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,true,false,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/credit-card">
                <path id="Vector" d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke={col[2] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M1 10H23" stroke={col[2] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[2] ? '#12D576':'white'}}>Create Token</div>
                </div>
                </Link>
                <Link to='/manage'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,true,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_342_1547)">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={col[3] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke={col[3] ? '#12D576':'#F2F2F2'}stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_342_1547">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <div className='expanded-2' style={{color:col[3] ? '#12D576':'white'}}>Manage Tokens</div>
                </div>
                </Link>
                <Link to='/contract'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,true,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="send">
                <path id="Vector" d="M22 2L11 13" stroke={col[4] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M22 2L15 22L11 13L2 9L22 2Z" stroke={col[4] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[4] ? '#12D576':'white'}}>AirDrop Tokens</div>
                </div> 
                </Link>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,true,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="dollar-sign">
                <path id="Vector" d="M12 1V23" stroke={col[5] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke={col[5] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[5] ? '#12D576':'white'}}>Create STO/ICO</div>
                </div>
                <Link to='/sale'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,true,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="tag">
                <path id="Vector" d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke={col[6] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M7 7H7.01" stroke={col[6] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[6] ? '#12D576':'white'}}>Token Sale</div>
                </div>
                </Link>
                <Link to='/lock'>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,true,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="lock">
                <path id="Vector" d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke={col[7] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke={col[7] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[7] ? '#12D576':'white'}}>Token Locker</div>
                </div>
                </Link>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,true,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="life-buoy">
                <path id="Vector" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M4.92993 4.92993L9.16993 9.16993" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_4" d="M14.8301 14.8301L19.0701 19.0701" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_5" d="M14.8301 9.16993L19.0701 4.92993" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_6" d="M14.8301 9.16989L18.3601 5.63989" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_7" d="M4.92993 19.0701L9.16993 14.8301" stroke={col[8] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-2' style={{color:col[8] ? '#12D576':'white'}}>Staking Pools</div>
                </div>
                <div className='expanded' style={{marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,true,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="rocket" clipPath="url(#clip0_342_1576)">
                <path id="Vector" d="M24.6608 0.932617C24.6294 0.786498 24.5565 0.65255 24.4508 0.546873C24.3451 0.441197 24.2112 0.368289 24.065 0.336914C22.4928 0 21.2628 0 20.0372 0C14.9982 0 11.9757 2.69531 9.72032 6.25H4.63243C4.19791 6.25037 3.77205 6.37152 3.4024 6.59993C3.03276 6.82834 2.73389 7.15501 2.53917 7.54346L0.126084 12.3677C0.0369692 12.5464 -0.00499852 12.7449 0.00416401 12.9444C0.0133265 13.1439 0.0733153 13.3377 0.178437 13.5075C0.283559 13.6773 0.430326 13.8174 0.604809 13.9145C0.779293 14.0117 0.975703 14.0626 1.1754 14.0625H6.2423L5.14513 15.1597C4.85217 15.4527 4.6876 15.8501 4.6876 16.2644C4.6876 16.6787 4.85217 17.0761 5.14513 17.3691L7.63048 19.855C7.77557 20.0001 7.94784 20.1152 8.13743 20.1938C8.32703 20.2723 8.53024 20.3128 8.73546 20.3128C8.94068 20.3128 9.14389 20.2723 9.33348 20.1938C9.52308 20.1152 9.69534 20.0001 9.84044 19.855L10.9376 18.7578V23.8281C10.9375 24.0278 10.9885 24.2241 11.0856 24.3985C11.1827 24.5729 11.3228 24.7197 11.4925 24.8248C11.6622 24.9299 11.8559 24.9899 12.0554 24.9991C12.2548 25.0083 12.4533 24.9664 12.6319 24.8774L17.4513 22.4658C17.8404 22.2715 18.1676 21.9725 18.3961 21.6025C18.6247 21.2324 18.7456 20.806 18.7452 20.3711V15.2729C22.2897 13.0122 24.9952 9.97998 24.9952 4.96582C25.0001 3.73535 25.0001 2.50488 24.6608 0.932617ZM18.7501 8.20312C18.3638 8.20312 17.9862 8.08858 17.665 7.87396C17.3438 7.65935 17.0935 7.35432 16.9457 6.99743C16.7978 6.64054 16.7591 6.24783 16.8345 5.86896C16.9099 5.4901 17.0959 5.14208 17.369 4.86893C17.6422 4.59578 17.9902 4.40977 18.3691 4.3344C18.7479 4.25904 19.1406 4.29772 19.4975 4.44555C19.8544 4.59338 20.1595 4.84371 20.3741 5.1649C20.5887 5.48609 20.7032 5.86371 20.7032 6.25C20.7032 6.768 20.4975 7.26479 20.1312 7.63107C19.7649 7.99735 19.2681 8.20312 18.7501 8.20312Z" fill={col[9] ? '#12D576':'white'}/>
                </g>
                <defs>
                <clipPath id="clip0_342_1576">
                <rect width="25" height="25" fill={col[9] ? '#12D576':'white'}/>
                </clipPath>
                </defs>
                </svg>
                <div className='expanded-2' style={{color:col[9] ? '#12D576':'white'}}>DEX Launch</div>
                </div>
                <Link to='/pricing'>
                <div className='expanded'  id='price_logo' style={{display:'none',marginTop:'15px'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,true,false,false])
                }}>
                <svg width='1.5vw' height='1.5vw' style={{width:'100%',marginRight:'2px',fill:'transparent',fill:`${col[10] ? '#12D576':'white'}`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                <div className='expanded-2' style={{color:col[10] ? '#12D576':'white'}}>Pricing</div>
                </div>
                </Link>
            
            <div className='expanded' style={{marginTop:'15px'}}   onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false,false,true])
                }}>
            <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="paperclip">
            <path id="Vector" d="M21.44 11.0499L12.25 20.2399C11.1242 21.3658 9.59723 21.9983 8.00505 21.9983C6.41286 21.9983 4.88589 21.3658 3.76005 20.2399C2.6342 19.1141 2.00171 17.5871 2.00171 15.9949C2.00171 14.4027 2.6342 12.8758 3.76005 11.7499L12.95 2.55992C13.7006 1.80936 14.7186 1.3877 15.78 1.3877C16.8415 1.3877 17.8595 1.80936 18.61 2.55992C19.3606 3.31048 19.7823 4.32846 19.7823 5.38992C19.7823 6.45138 19.3606 7.46936 18.61 8.21992L9.41005 17.4099C9.03476 17.7852 8.52577 17.996 7.99505 17.996C7.46432 17.996 6.95533 17.7852 6.58005 17.4099C6.20476 17.0346 5.99393 16.5256 5.99393 15.9949C5.99393 15.4642 6.20476 14.9552 6.58005 14.5799L15.07 6.09992" stroke={col[12] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            <div onClick={() => {window.open("https://securedapp.gitbook.io/securedapp-launchpad/", '_blank');}} className='expanded-2' style={{color:col[12] ? '#12D576':'white'}}>Docs</div>
            </div>
            </div>
        </div>
      <Side1 theme={theme}/>
      <div className="dashboard" style={{paddingLeft:'7vw',overflow: "auto",backgroundImage:`${theme==='Dark' ? 'linear-gradient(to right,black,rgb(14, 14, 61))' : 'linear-gradient(to right,#FBFBFB,#bff2d9)'}`}} >
      <div id='bars' style={{display:'none'}} onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg"   style={{fill:`${theme==='Dark'?'white':'black'}`}} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </div>
        <div className="navbar" style={{display:'flex',justifyContent:'space-between',color:`${theme==='Dark' ? 'whitesmoke':'black'}`, fontWeight: "700" }}>
          <div className="navBrand" >
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
              <img id='logo_img' src="https://github.com/NagiPragalathan/GeeksforGeeks_files/blob/main/Screenshot_2023-07-17_134527-removebg-preview.png?raw=true" style={{ width: '53px', height: '46px', marginTop: '-8px',}} alt="" />
              <div id='comp_name'><div style={{ color: "#12D576", fontSize: "35px", fontWeight: "700",height:'36px'}}>SecurePad</div><div style={{width:'100%',paddingTop:'10px',position:'relative',right:'-93px',fontSize: "12px", fontWeight: "400" }}> By SecureDApp</div></div>
            </div>
          {/* <div onClick={Toggle} id='themeicon' className="themeic" style={{cursor:"pointer",color:`${theme==='Dark' ? '#12D576':'black'}`,padding:"0 1.5vw",border:`1px solid ${theme==='Dark' ? '#12D576':'black'}`,borderRadius:"3vw"}}>
          <ThemeIcon/>
          </div> */}
          </div>
          <div className="riht" >
            {size ?<NavIcons />:<div></div>}
          </div>       
        </div>
        <Main />
      </div>
    </div>
  )
}

export default Sidebar
