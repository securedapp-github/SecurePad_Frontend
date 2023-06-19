import React,{useState,useEffect} from 'react'
import '../Style/newHome.css'
import {Link} from 'react-router-dom'
import {Accordion} from 'react-bootstrap'
import {Basics,SFUND,SNFTS,IGOs,INOs,Blockchain,Security,ProjectSF,SeedStaking,Web3Games} from './accordion.jsx'

function NewHome() {
    const [accord,setAccord]=useState([true,false,false,false,false,false,false,false,false,false])
    function handleClick(e){
        let alp=e.target.id
        let ko=[false,false,false,false,false,false,false,false,false,false]
        ko[parseInt(alp[3])]=true
        setAccord(ko)
    }
    useEffect(()=>{
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
    },[accord])

  return (
    <div className="newHome">
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
    </div>
  )
}

export default NewHome
