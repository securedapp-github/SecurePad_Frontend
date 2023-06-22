import React,{useState,useEffect} from 'react'
import '../Style/newHome.css'
import {Link} from 'react-router-dom'
import {Accordion} from 'react-bootstrap'
import {Basics,SFUND,SNFTS,IGOs,INOs,Blockchain,Security,ProjectSF,SeedStaking,Web3Games} from './accordion.jsx'
import Logo from '../assets/logo.png'
import Kucoin from '../assets/KUCOIN.png'
import Huobi from '../assets/Huobi.png'
import PancakeSwap from '../assets/PancakeSwap.png'
import Gate from '../assets/Gate.png'
import Bybit from '../assets/BYBIT.png'
import VideoSource from '../assets/mixkit-animation-of-futuristic-devices-99786.mp4'
import Space from '../assets/space.webp'

function NewHome() {
    const [accord,setAccord]=useState([true,false,false,false,false,false,false,false,false,false])

    function handleClick(e){
        let alp=e.target.id
        let ko=[false,false,false,false,false,false,false,false,false,false]
        ko[parseInt(alp[3])]=true
        setAccord(ko)
    }
    useEffect(()=>{
        let canvas1=document.getElementById('igo_launchpad')
        let canvas2=document.getElementById('ino_launchpad')
        let canvas3=document.getElementById('stake_farm')
        let alp1=document.getElementsByClassName('slide1')[0]
        canvas1.addEventListener('mouseenter',(event)=>{
            alp1.style.transform='translateY(0)'
            alp1.style.opacity=1
                alp2.style.opacity=0;
                alp2.style.transform='translateY(100%)'
                alp3.style.opacity=0;
                alp3.style.transform='translateY(100%)'
            alp1.addEventListener('mouseleave',()=>{
                alp1.style.opacity=0;
                alp1.style.transform='translateY(100%)'
            })
            document.addEventListener('mouseleave',()=>{
                alp1.style.opacity=0;
                alp1.style.transform='translateY(100%)'
            })
        })
        let alp2=document.getElementsByClassName('slide2')[0]
        canvas2.addEventListener('mouseenter',(event)=>{
            alp2.style.transform='translateY(0)'
            alp2.style.opacity=1
                alp1.style.opacity=0;
                alp1.style.transform='translateY(100%)'
                alp3.style.opacity=0;
                alp3.style.transform='translateY(100%)'
            alp2.addEventListener('mouseleave',()=>{
                alp2.style.opacity=0;
                alp2.style.transform='translateY(100%)'
            })
            document.addEventListener('mouseleave',()=>{
                alp2.style.opacity=0;
                alp2.style.transform='translateY(100%)'
            }) 
        })
        let alp3=document.getElementsByClassName('slide3')[0]
        canvas3.addEventListener('mouseenter',(event)=>{
            alp3.style.transform='translateY(0)'
            alp3.style.opacity=1
                alp1.style.opacity=0;
                alp1.style.transform='translateY(100%)'
                alp2.style.opacity=0;
                alp2.style.transform='translateY(100%)'
            alp3.addEventListener('mouseleave',()=>{
                alp3.style.opacity=0;
                alp3.style.transform='translateY(100%)'
            })
            document.addEventListener('mouseleave',()=>{
                alp3.style.opacity=0;
                alp3.style.transform='translateY(100%)'
            })
        })

        for(let i in accord){
            let alp=document.getElementById(`btn${i}`)
            if(accord[i]){
                alp.style.backgroundColor="#5643b0"
                alp.style.textShadow="none"
                alp.style.color="white"
                alp.addEventListener('mouseover',()=>{
                    alp.style.textShadow="none"
                    alp.style.color="white"
                })
            }
            else {
                alp.addEventListener('mouseover',()=>{
                    alp.style.textShadow="0 0 0.7vw #5643b0";
                    alp.style.color="#5643b0"
                })
                alp.addEventListener('mouseleave',()=>{
                    alp.style.textShadow="none";
                    alp.style.color="white"
                })
                alp.style.background="#41424a"
            }
        }
    })

  return (
    <>
    <div className="newHome">
        <div className="newHome-Navbar">
            <div className='newHome-Navbar-1'>
                <div>
                    <img src={Logo} alt="image" />
                </div>
                <div style={{padding:"0.3vw 0",cursor:"pointer"}}>SecureDApp</div>
            </div>
            <div className="newHome-Navbar-2">
                <div id='igo_launchpad' >IGO Launchpad</div>
                <div id='ino_launchpad'>INO Launchpad</div>
                <div id='stake_farm'>Stake/Farm</div>
                <div id='claims'>Claims</div>
            </div>
            <div className='newHome-Navbar-3'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 640 512"><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                </div>
            </div>
            <div className='newHome-Navbar-4'>
                <div style={{cursor:"pointer",backgroundColor:"#512fd9",borderRadius:"0.2vw",fontWeight:"600",padding:"0.2vw 1vw"}}>Connect</div>
                <div style={{padding:"0.5vw",backgroundColor:"#202130"}}><svg width="1vw" height="1vw" style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></div>
            </div>
        </div>
        <div className="newHome-Slide">
            <div className='slide1'>
                <div>
                    <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>IGO Launchpad Home</div>
                    <div style={{fontSize:'0.7vw'}}>Learn more about the way the IGOs 
                    </div><div style={{fontSize:'0.7vw'}}>
                    work at seedify, and how to join 
                    </div><div style={{fontSize:'0.7vw'}}>them</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:"2vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Claim</div>
                    <div style={{fontSize:'0.7vw'}}>Browse the available claims and see</div>
                    <div style={{fontSize:'0.7vw'}}>ones you are eligible for</div>
                    </div>
                    </div>
                </div>
                <div>
                <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Purchase SFUND</div>
                    <div style={{fontSize:'0.7vw'}}>Acquire our main token and reap the</div>
                    <div style={{fontSize:'0.7vw'}}>reward of its utility in our</div>
                    <div style={{fontSize:'0.7vw'}}>ecosystem</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:'2vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Guides</div> 
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                </div>
                <div style={{marginLeft:'10vw',borderLeft:'0.156vw solid #9ea9a9',paddingLeft:'4vw'}}>
                    <div>
                        <img src={Space} alt="" />
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500'}}>Introducing SNFTs</div>
                        <div style={{cursor:'pointer',fontSize:'0.9vw'}}>Learn more about our newest product</div>
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500',paddingTop:'0.2vw'}}>Read More</div>
                    </div>
                </div>
            </div>
            <div className='slide2'>
            <div>
                    <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>IGO Launchpad Home</div>
                    <div style={{fontSize:'0.7vw'}}>Learn more about the way the IGOs 
                    </div><div style={{fontSize:'0.7vw'}}>
                    work at seedify, and how to join 
                    </div><div style={{fontSize:'0.7vw'}}>them</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:"2vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Claim</div>
                    <div style={{fontSize:'0.7vw'}}>Browse the available claims and see</div>
                    <div style={{fontSize:'0.7vw'}}>ones you are eligible for</div>
                    </div>
                    </div>
                </div>
                <div>
                <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Purchase SFUND</div>
                    <div style={{fontSize:'0.7vw'}}>Acquire our main token and reap the</div>
                    <div style={{fontSize:'0.7vw'}}>reward of its utility in our</div>
                    <div style={{fontSize:'0.7vw'}}>ecosystem</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:'2vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Guides</div> 
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                </div>
                <div style={{marginLeft:'10vw',borderLeft:'0.156vw solid #9ea9a9',paddingLeft:'4vw'}}>
                    <div>
                        <img src={Space} alt="" />
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500'}}>Introducing SNFTs</div>
                        <div style={{cursor:'pointer',fontSize:'0.9vw'}}>Learn more about our newest product</div>
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500',paddingTop:'0.2vw'}}>Read More</div>
                    </div>
                </div>
            </div>
            <div className='slide3'>
            <div>
                    <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg"  width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 640 512"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Stake SFUNDS</div>
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:"2vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 640 512"><path d="M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Farm SFUNDS</div>
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                </div>
                <div>
                <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg"  width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 640 512"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Stake SNNFTS</div>
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:'0.5vw',paddingTop:'2vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 640 512"><path d="M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Farm SNFTS</div> 
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                </div>
                <div>
                <div style={{display:"flex",gap:'0.5vw'}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width='1.1vw' height='1.1vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg></div>
                    <div>
                    <div style={{fontSize:"1.1vw",fontWeight:"550"}}>Guides</div>
                    <div style={{fontSize:'0.7vw'}}>Explore our documentation and help</div>
                    <div style={{fontSize:'0.7vw'}}>articles to guide your quest at</div>
                    <div style={{fontSize:'0.7vw'}}>seedify</div>
                    </div>
                    </div>
                </div>
                <div style={{width:'25%',marginLeft:'10vw',borderLeft:'0.156vw solid #9ea9a9',paddingLeft:'4vw'}}>
                    <div>
                        <img src={Space} alt="" />
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500'}}>Introducing SNFTs</div>
                        <div style={{cursor:'pointer',fontSize:'0.9vw'}}>Learn more about our newest product</div>
                        <div style={{cursor:'pointer',fontSize:'1.2vw',fontWeight:'500',paddingTop:'0.2vw'}}>Read More</div>
                    </div>
                </div>
            </div>
        </div>
    <div className="newHome-Head">
        <div>
            <div className="newHome-Head-1">Join Top-Tier AI, Web3</div>
            <div className="newHome-Head-1">Gaming & Metaverse</div>
            <div className="newHome-Head-1">IDOs With Seedify</div>
            <div style={{paddingTop:"2vw"}}>
            <div className="newHome-Head-2">Decide your tier, stake or farm $SFUND, and participate in all</div>
            <div className='newHome-Head-2'>the token launches we bring to you in a guaranteed way.</div>
        </div>
        <div className="newHome-Head-3">
            <button className="newHome-Head-3-1">Buy $SFUND</button>
            <button className="newHome-Head-3-2">How to Start</button>
        </div>
        <div className='newHome-Head-4'>AVAILABLE ON:</div>
        <div className='newHome-Head-5'>
            <div>
                <img src={Kucoin} style={{height:"2.5vw"}} alt="image" />
            </div>
            <div>
                <img src={Gate} style={{height:"2.5vw"}} alt="image" />
            </div>
            <div>
                <img src={Huobi} style={{height:"2.5vw"}} alt="image" />
            </div>
        </div>
        <div className="newHome-Head-6">
            <div>
                <img src={Bybit} style={{height:"6vw"}} alt="image" />
            </div>
            <div>
                <img src={PancakeSwap} style={{height:"6vw"}} alt="image" />
            </div>
        </div>
        </div>

        <div>
        </div>
    </div>
    <div className='newHome-SFUND'>
        <div className='newHome-SFUND-1'>How To Buy SFUND</div>
        <div className='newHome-SFUND-2'><iframe style={{width:"45vw",height:"30vw",borderRadius:"0.7vw"}} src="https://www.youtube.com/embed/HvCt-wXtR7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
    <div className='newHome-video'>
        <div>Find out more about what you can do with SFUND</div>
        <button>Watch Videos</button>
    </div>
    <div className="newHome-Join">
        <div>
            <div className='newHome-Join-1'>How to join the</div>
            <div className='newHome-Join-1'>blockchain gaming</div>
            <div className='newHome-Join-1'>revolution with us</div>
            <div className='newHome-Join-2' style={{paddingTop:"1.5vw"}}>Only 3 little steps are needed for you to start enjoying all the</div>
            <div className='newHome-Join-2'>advantages of Seedify</div>
        </div>
        <div>
            <div style={{display:"flex",gap:'1.5vw'}}>
                <div>
                <div className='newHome-Join-svg'><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height='2vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></div>
                {/* <div style={{marginLeft:'2vw',width:'0',height:'9vw',border:'1px solid #9e9fa3'}}></div> */}
                </div>
                <div>
                    <div className='newHome-Join-head'>Purchase SFUND Token</div>
                    <div className='newHome-Join-para' style={{paddingTop:"0.8vw"}}>SFUND is Seedify`s token that enables its holders to</div>
                    <div className='newHome-Join-para'>participate in the IGOs, INOs, stake and farm for passive</div>
                    <div className='newHome-Join-para'>income</div>
                    <button className='newHome-Join-button'>Buy SFUND</button>
                </div>
            </div>
            <div style={{display:"flex",gap:'1.5vw',paddingTop:"1.5vw"}}>
                <div>
                <div className='newHome-Join-svg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height='2vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
                {/* <div style={{marginLeft:'2vw',width:'0',height:'9vw',border:'1px solid #9e9fa3'}}></div> */}
                </div>
                </div>
                <div>
                    <div className='newHome-Join-head'>Stake or Farm your SFUND</div>
                    <div className='newHome-Join-para' style={{paddingTop:"0.8vw"}}>Add your SFUND to one of our staking or farming pools and</div>
                    <div className='newHome-Join-para'>earn passive income</div>
                    <button className='newHome-Join-button'>Start Now</button>
                </div>
            </div>
            <div style={{display:"flex",gap:'1.5vw',paddingTop:"1.5vw"}}>
                <div className='newHome-Join-svg'>
                    <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height='2vw' style={{fill:"white"}} viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                </div>
                {/* <div style={{marginLeft:'2vw',width:'0',height:'9vw',border:'1px solid #9e9fa3'}}></div> */}
                </div>
                <div>
                    <div className='newHome-Join-head'>Complete KYC</div>
                    <div className='newHome-Join-para' style={{paddingTop:"0.8vw"}}>It’s a simple step to ensure your participation in the IGOs</div>
                    <div className='newHome-Join-para'>(not necessary for INOs)</div>
                    <button className='newHome-Join-button'>Buy SFUND</button>
                </div>
            </div>
            <div style={{display:"flex",gap:'1.5vw',paddingTop:"1.5vw"}}>
                <div className='newHome-Join-svg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height='2vw' style={{fill:"white"}} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                </div>
                <div>
                    <div className='newHome-Join-head'>You're all set!</div>
                    <div className='newHome-Join-para' style={{paddingTop:"0.8vw"}}>Now you can participate in the sales for tokens and NFTs</div>
                    <div className='newHome-Join-para'>of the best blockchain projects</div>
                </div>
            </div>
        </div>
    </div>
      <div className="newHome-FAQ">
        <div style={{width:"55%"}}>
            <div className='newHome-FAQ-heading'>
                <div>Frequently Asked</div>
                <div>Questions</div>
            </div>
            <div className="newHome-FAQ-note">
                <div>Haven't found the answers you are looking for?Contact us at</div>
                <Link to="#" style={{textDecoration:"none",color:"#79f0f6"}}>support@seedify.com</Link>
            </div>
            <div className="newHome-FAQ-button">
                <div className="newHome-FAQ-button-1">
                    <div style={{backgroundColor:"#41424a",padding:"1vw 2.8vw"}} id="btn0" onClick={handleClick}>Basics</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 2.8vw"}} id="btn1" onClick={handleClick}>SFUNDS</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 2.8vw"}} id="btn2" onClick={handleClick}>SNFTS</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 2.8vw"}} id="btn3" onClick={handleClick}>IGOS</div>
                </div>
                <div className="newHome-FAQ-button-2">
                    <div style={{backgroundColor:"#41424a",padding:"1vw 4.1vw"}} id="btn4" onClick={handleClick}>INOs</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 4.1vw"}} id="btn5" onClick={handleClick}>Blockchain</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 4.1vw"}} id="btn6" onClick={handleClick}>Security</div>
                </div>
                <div className="newHome-FAQ-button-3">
                    <div style={{backgroundColor:"#41424a",padding:"1vw 1.2vw"}} id="btn7" onClick={handleClick}>Project Selection Framework</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 1.2vw"}} id="btn8" onClick={handleClick}>Seed Staking</div>
                    <div style={{backgroundColor:"#41424a",padding:"1vw 1.2vw"}} id="btn9" onClick={handleClick}>Web3 Games</div>
                </div>
            </div>
        </div>
        <div style={{width:"40%",paddingTop:"1.5vw"}}>
       {accord[0] ? <Basics/>:(accord[1]? <SFUND/> : (accord[2]? <SNFTS/>:(accord[3]?<IGOs/>:(accord[4]?<INOs/>:(accord[5]?<Blockchain/>:(accord[6]?<Security/>:(accord[7]?<ProjectSF/>:(accord[8]?<SeedStaking/>:(accord[9]?<Web3Games/>:<div></div>)))))))))}
        </div>
      </div>
      <div className='newHome-video-2'>
        <div style={{fontSize:"1.5vw"}}>Are you a web3 game studio looking to get incubated or launched by Seedify?</div>
        <button>Apply Now</button>
    </div>
    <div className='newHome-footer'>
        <div>
            <div className='newHome-Navbar-1'>
                <div>
                    <img src={Logo} alt="image" />
                </div>
                <div style={{padding:"0.3vw 0",cursor:"pointer",color:"white"}}>SecureDApp</div>
            </div>
            <div style={{paddingTop:"1.5vw"}}>Seedify.fund is a Blockchain Gaming focused</div>
            <div>Incubator and Launchpad. Through staking $SFUND,</div>
            <div>become eligible to buy game tokens before everyone</div>
            <div>else, and have an edge in the play to earn era!</div>
        </div>
        <div style={{paddingTop:"1vw",color:"white"}}>
            <div>Terms of Services</div>
            <div style={{paddingTop:"0.5vw"}}>Privacy Policy</div>
            <div style={{paddingTop:"0.5vw"}}>Whitepaper</div>
        </div>
        <div style={{paddingTop:"1vw",color:"white"}}>
            <div style={{fontSize:"1.2vw"}}>Stay in touch with us</div>
            <div className='newHome-Navbar-3'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 640 512"><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" style={{fill:"white"}} viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default NewHome
