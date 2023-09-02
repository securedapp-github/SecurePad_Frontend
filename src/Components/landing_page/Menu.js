import React from 'react';
import {useEffect } from 'react';
import { Link } from 'react-router-dom'
import Icon from '../../assets/logo_img.png'

export const Menu = () => {
  let clicks = 0;
  useEffect(() => {
    const handleScroll = () => {
    let objs = document.getElementById('sticky');
      if (window.scrollY > 69) {
        objs.style.backgroundColor = '#0000008f';
      } else {
        objs.style.backgroundColor = 'transparent';
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
        <div id='sticky'>
            <div className="Header">
                <div className='logo_title'>
                    <img className='logo_img' src={Icon} alt="" />
                    <div className='title_content'>
                        <span style={{color:"rgb(212 212 212)"}}>Secured<span style={{color:"white"}}>Pad</span></span>
                        <p style={{fontSize:"6px",color:"rgb(212 212 212)"}}>By SecuredAPP</p>
                    </div>
                </div>
                <div className='nav_block'>
                    <nav className="navbar" id='navbar'>
                        <li><Link to="/landing_page" />Solidity Shield Scan</li>
                        <li><Link to="/landing_page" />Our Products</li>
                        <li><Link to="/landing_page" />Blog</li>
                        <button className="menu_btn">Token Tool</button>
                    </nav>
                    <div className='menubar_btn'>
                        <button className='menubar_btns' style={{background: "transparent",border: "none"}} onClick={()=>{
                            console.log("clock")
                            let obj = document.getElementById('navbar');
                            let icon_ =  document.getElementById('icon_cont');
                            if(clicks%2==0){
                                obj.style.transform = "translateY(70px)";
                                icon_.src = "https://www.freeiconspng.com/thumbs/close-button-png/close-button-png-27.png";
                                icon_.style.width = "20%";
                                icon_.style.transition= "1s";
                                icon_.style.animationdelay= "1s";
                            }else{
                                icon_.src="https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg"
                                obj.style.transform = "translateY(-200px)";
                                icon_.style.width = "88px";
                            }
                            clicks++;
                        }}><img id='icon_cont' style={{width:'88px'}} src='https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
