import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import CLogo from '../assets/Company-logo-dark.png'


export function Side1({theme}){
    const [expand,setExpand]=useState(true)
     function Arrow(){
        const handleExpand=()=>{
            let k2=document.getElementsByClassName('expanded-1')
            let k3=document.getElementsByClassName('expanded')
            if(expand){
                // setTimeout(()=>{for(let i=0;i<k2.length;++i){
                //     k2[i].style.display='block'
                //     k2[i].previousElementSibling.style.width='20%'
                //     if(i!==k2.length-1 && k3[i])k3[i].classList.add('expanded_1')
                // }},25)

                for(let i=0;i<k2.length;++i){
                    k2[i].style.display='block'
                    k2[i].previousElementSibling.style.width='20%'
                    if(i!==k2.length-1 && k3[i])k3[i].classList.add('expanded_1')
                }


                setExpand(false)
            }
            else{
                for(let i=0;i<k2.length;++i){
                    k2[i].style.display='none'
                    k2[i].previousElementSibling.style.width='100%'
                    if(i!==k2.length-1 && k3[i])k3[i].classList.remove('expanded_1')
                }
                setExpand(true)
            }
        }
        useEffect(()=>{
            let alp1=document.getElementById('arrow1')
            let alp2=document.getElementById('arrow2')
            let alp3=document.querySelector('.arrw1')
            let alp4=document.querySelector('.arrw2')
            let alp=document.getElementById('arrow')
    
            alp3.addEventListener('mouseenter',()=>{
                alp1.style.display='none'
                alp2.style.display='block'
            })
    
        
            alp4.addEventListener('mouseleave',()=>{
                alp1.style.display='block'
                alp2.style.display='none'
            })
        
        },[])
        return (
            <div id='arrow' onClick={handleExpand} style={{position:'absolute',top:'2.5vw',right:'-1.3vw',zIndex:'3'}}>
            <svg  style={{position:'relative',transform:'rotate(180deg)'}} id="arrow1"  width="2.08vw" height="2.08vw" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className='arrw1' cx="18" cy="18" r="18" fill="#12D576"/>
            <path  d="M15 24L21 18L15 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg  style={{position:'relative'}} id="arrow2"  width="2.08vw" height="2.08vw" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className='arrw2' cx="18" cy="18" r="18" fill="#2D5C8F"/>
            <path  d="M15 24L21 18L15 12" stroke='white' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        )
    }
    const [col,setCol]=useState([false,false,false,false,false,false,false,false,false,false])
    const navigate=useNavigate()
    return (
        <div className="sidebar" id='sidebar1'  style={{backgroundColor:`${theme==='Dark' ? '#101010':'whitesmoke'}`}}>
            <Arrow/>
            <Link to='/'><div style={{paddingTop:'1.389vw'}} className='expanded_2' onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,false])
                }}>
                    {expand ? <img id='logo_1' src={Logo} style={{width:'3.2vw',height:'3.2vw'}} alt="" />:<img id='logo_2' src={CLogo} style={{width:'100%',height:'4vw'}} alt="" />}
                         </div>
            </Link>
            <div style={{paddingTop:'1.62vw',display:'flex',flexDirection:'column',height:'70%',justifyContent:'space-between'}}>
                <Link to='/'>
                <div className='expanded' onClick={()=>{
                    setCol([true,false,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/home">
                <path id="Vector" d="M12 2L3 9V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9L12 2Z" stroke={col[0] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M9 22V12H15V22" stroke={col[0] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[0] ? '#12D576':'white'}}>Home</div>
                </div>
                </Link>
                <Link to='/wallet'>
                <div className='expanded'  onClick={()=>{
                    setCol([false,true,false,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/user">
                <path id="Vector" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={col[1] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={col[1] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[1] ? '#12D576':'white'}}>User Profile</div>
                </div>
                </Link>
                <Link to='/token'>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,true,false,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="24px/icon/credit-card">
                <path id="Vector" d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke={col[2] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M1 10H23" stroke={col[2] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[2] ? '#12D576':'white'}}>Create Token</div>
                </div>
                </Link>
                <Link to='/manage'>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,true,false,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_342_1547)">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={col[3] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke={col[3] ? '#12D576':'#F2F2F2'}stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_342_1547">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <div className='expanded-1' style={{color:col[3] ? '#12D576':'white'}}>Manage Tokens</div>
                </div>
                </Link>
                <Link to='/contract'>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,true,false,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="send">
                <path id="Vector" d="M22 2L11 13" stroke={col[4] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M22 2L15 22L11 13L2 9L22 2Z" stroke={col[4] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[4] ? '#12D576':'white'}}>AirDrop Tokens</div>
                </div> 
                </Link>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,false,true,false,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="dollar-sign">
                <path id="Vector" d="M12 1V23" stroke={col[5] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke={col[5] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[5] ? '#12D576':'white'}}>Create STO/ICO</div>
                </div>
                <Link to='/sale'>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,false,false,true,false,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="tag">
                <path id="Vector" d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke={col[6] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M7 7H7.01" stroke={col[6] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[6] ? '#12D576':'white'}}>Token Sale</div>
                </div>
                </Link>
                <Link to='/lock'>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,false,false,false,true,false,false,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="lock">
                <path id="Vector" d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke={col[7] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke={col[7] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
                <div className='expanded-1' style={{color:col[7] ? '#12D576':'white'}}>Token Locker</div>
                </div>
                </Link>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,true,false,false])
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
                <div className='expanded-1' style={{color:col[8] ? '#12D576':'white'}}>Staking Pools</div>
                </div>
                <div className='expanded' onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,true,false])
                }}>
                <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="rocket" clip-path="url(#clip0_342_1576)">
                <path id="Vector" d="M24.6608 0.932617C24.6294 0.786498 24.5565 0.65255 24.4508 0.546873C24.3451 0.441197 24.2112 0.368289 24.065 0.336914C22.4928 0 21.2628 0 20.0372 0C14.9982 0 11.9757 2.69531 9.72032 6.25H4.63243C4.19791 6.25037 3.77205 6.37152 3.4024 6.59993C3.03276 6.82834 2.73389 7.15501 2.53917 7.54346L0.126084 12.3677C0.0369692 12.5464 -0.00499852 12.7449 0.00416401 12.9444C0.0133265 13.1439 0.0733153 13.3377 0.178437 13.5075C0.283559 13.6773 0.430326 13.8174 0.604809 13.9145C0.779293 14.0117 0.975703 14.0626 1.1754 14.0625H6.2423L5.14513 15.1597C4.85217 15.4527 4.6876 15.8501 4.6876 16.2644C4.6876 16.6787 4.85217 17.0761 5.14513 17.3691L7.63048 19.855C7.77557 20.0001 7.94784 20.1152 8.13743 20.1938C8.32703 20.2723 8.53024 20.3128 8.73546 20.3128C8.94068 20.3128 9.14389 20.2723 9.33348 20.1938C9.52308 20.1152 9.69534 20.0001 9.84044 19.855L10.9376 18.7578V23.8281C10.9375 24.0278 10.9885 24.2241 11.0856 24.3985C11.1827 24.5729 11.3228 24.7197 11.4925 24.8248C11.6622 24.9299 11.8559 24.9899 12.0554 24.9991C12.2548 25.0083 12.4533 24.9664 12.6319 24.8774L17.4513 22.4658C17.8404 22.2715 18.1676 21.9725 18.3961 21.6025C18.6247 21.2324 18.7456 20.806 18.7452 20.3711V15.2729C22.2897 13.0122 24.9952 9.97998 24.9952 4.96582C25.0001 3.73535 25.0001 2.50488 24.6608 0.932617ZM18.7501 8.20312C18.3638 8.20312 17.9862 8.08858 17.665 7.87396C17.3438 7.65935 17.0935 7.35432 16.9457 6.99743C16.7978 6.64054 16.7591 6.24783 16.8345 5.86896C16.9099 5.4901 17.0959 5.14208 17.369 4.86893C17.6422 4.59578 17.9902 4.40977 18.3691 4.3344C18.7479 4.25904 19.1406 4.29772 19.4975 4.44555C19.8544 4.59338 20.1595 4.84371 20.3741 5.1649C20.5887 5.48609 20.7032 5.86371 20.7032 6.25C20.7032 6.768 20.4975 7.26479 20.1312 7.63107C19.7649 7.99735 19.2681 8.20312 18.7501 8.20312Z" fill={col[9] ? '#12D576':'white'}/>
                </g>
                <defs>
                <clipPath id="clip0_342_1576">
                <rect width="25" height="25" fill={col[9] ? '#12D576':'white'}/>
                </clipPath>
                </defs>
                </svg>
                <div className='expanded-1' style={{color:col[9] ? '#12D576':'white'}}>DEX Launch</div>
                </div>
            </div>
            <div className='expanded' style={{marginTop:'4vw'}} onClick={()=>{
                    setCol([false,false,false,false,false,false,false,false,false,false,true])
                }}>
            <svg style={{width:'100%',marginRight:'2px',fill:'transparent'}} width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="paperclip">
            <path id="Vector" d="M21.44 11.0499L12.25 20.2399C11.1242 21.3658 9.59723 21.9983 8.00505 21.9983C6.41286 21.9983 4.88589 21.3658 3.76005 20.2399C2.6342 19.1141 2.00171 17.5871 2.00171 15.9949C2.00171 14.4027 2.6342 12.8758 3.76005 11.7499L12.95 2.55992C13.7006 1.80936 14.7186 1.3877 15.78 1.3877C16.8415 1.3877 17.8595 1.80936 18.61 2.55992C19.3606 3.31048 19.7823 4.32846 19.7823 5.38992C19.7823 6.45138 19.3606 7.46936 18.61 8.21992L9.41005 17.4099C9.03476 17.7852 8.52577 17.996 7.99505 17.996C7.46432 17.996 6.95533 17.7852 6.58005 17.4099C6.20476 17.0346 5.99393 16.5256 5.99393 15.9949C5.99393 15.4642 6.20476 14.9552 6.58005 14.5799L15.07 6.09992" stroke={col[10] ? '#12D576':'#F2F2F2'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            <div className='expanded-1' style={{color:col[10] ? '#12D576':'white'}}>Docs</div>
            </div>
        </div>
    )
}