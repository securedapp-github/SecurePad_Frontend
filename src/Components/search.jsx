import React, { useEffect, useState } from "react";
import "../Style/search.css" // Import the CSS file for styling
import FACTORYABI from "../ABI/FactoryABI.json";
import SALEABI from "../ABI/SaleABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import {useNavigate} from 'react-router-dom'
import Coin from '../assets/Coin.png';
import { ethers } from "ethers";

import {
    useAccount,
    useConnect,
    useContract,
    useContractRead,
    useContractWrite,
    useNetwork,
    useSigner,
    useWaitForTransaction,
    useProvider
} from "wagmi";

const New = ({ onSearch,theme }) => {
    const [search, setSearch] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [count, setcount] = useState(0);
    const [salesArray, setsalesArray] = useState([]);

    const provider = useProvider()
    const { address } = useAccount();

    const CONTRACT_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;
    const FactoryContract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: FACTORYABI,
        signerOrProvider: provider
    });
   

    const setdata = async(data) => {
        if (data.length > 0) {

    setsalesArray([]);
    for (let i = 0; i < data.length; i++) {

        let progress = 0;
        let saledetails;
        let hardcap;

        if (data[i].raised > 0) {
            progress = data[i].raised * 100 / data[i].hard;
        }

        if(data[i].hard > 1000000){
            hardcap = (data[i].hard / 1000000)+ "M";
        }else if(data[i].hard > 1000){
            hardcap = (data[i].hard / 1000)+ "K";
        }else{
            hardcap = data[i].hard;
        }

        let name = data[i].token_name;
        let status;
        let topstatus;

        let saleStartTime = data[i].start * 1000;
        let saleEndTime = data[i].end * 1000;

        if (saleStartTime > Date.now()) {
            const date = new Date(saleStartTime);
            const dateTimeString = date.toLocaleString();
            status = "Sale Starts at " + dateTimeString;
            topstatus = "Upcoming Sale";
        } else if (saleEndTime < Date.now()) {
            const date = new Date(saleEndTime);
            const dateTimeString = date.toLocaleString();
            status = "Sale Ended at " + dateTimeString;
            topstatus = "Sale Ended";
        } else {
            const date = new Date(saleEndTime);
            const dateTimeString = date.toLocaleString();
            status = "Sale Ends at " + dateTimeString;
            topstatus = "Sale Live";
        }

        saledetails = {
            'id': i + 1,
            'title': name,
            'description': '', //data[i].desc,
            'image': data[i].image,
            'soft': data[i].soft,
            'hard': hardcap,
            'progress': progress,
            'liq': 20,
            'lock': data[i].cliff * 30,
            'end': status,
            'token': data[i].payment_name,
            'sale': data[i].sale_address,
            'kyc': data[i].kyc,
            'audit':data[i].audit,
            'vetted':data[i].vetted,
            'coin_image':data[i].coin_image,
            'topstatus': topstatus
        };
        if (i == 0) {
            setsalesArray([]);
        }
        setsalesArray(prevItems => [...prevItems, saledetails]);
    }

}
}

const getSales = async () => {
fetch("https://139-59-5-56.nip.io:3443/getSales")
// fetch("http://localhost:8000/getSales")        
.then((res) => res.json())
.then((data) => setdata(data))           
}

    useEffect(() => {
        getSales();
    }, []);


    const cardsData = [
        {
            id: 1,
            title: 'MEME ELON DOGE FLOKI',
            description: '',
            image: 'https://blog.kleros.io/content/images/size/w2000/2019/12/header-2nd-sale-1.jpg',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 2,
            title: 'HCOIN BASE GOT DOWN',
            description: 'Fair Launch-Max:No Limit',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 3,
            title: 'BIT CRYPTO CURRENCY',
            description: 'Fair Launch-Max:No Limit',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 4,
            title: 'Card 4',
            description: 'This is the description of Card 4.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 5,
            title: 'Card 5',
            description: 'This is the description of Card 5.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 6,
            title: 'Card 6',
            description: 'This is the description of Card 6.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },

        {
            id: 7,
            title: 'Card 7',
            description: 'This is the description of Card 7.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 8,
            title: 'Card 8',
            description: 'This is the description of Card 8.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
        {
            id: 9,
            title: 'Card 9',
            description: 'This is the description of Card 9.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
            soft: 100,
            hard: 10000,
            progress: 30,
            liq: 20,
            lock: 180,
            end: 12345678,
            token: 'BNB'
        },
    ];




    // Filter the cards based on the filterBy value

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredCards = salesArray.filter((card) =>
        card.title.toLowerCase().includes(filterBy.toLowerCase())
    );

    const searchedCards = filteredCards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="searchpage-container" style={{margin:"1.5vw 0"}}>
            <div className="search" style={{padding:"0 6vw"}}>
                <div className="search-container" style={{width:"20%",display:"flex",height:"2.5vw",border:"1px solid #ccc",padding:"0 1vw",borderRadius:"2vw"}}>
                    <div style={{width:"100%"}}>
                    <input
                        type="text" className="search-box" placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            border:"1px solid transparent",
                            backgroundColor: 'transparent',
                            width: '100%',
                            color: '#ccc'
                        }}
                    />
                    </div>
                    <div style={{paddingTop:"0.5vw"}}><svg height="1vw" width="1vw" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
                    </div></div>
            <div className="card-container">
                {salesArray.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        soft={card.soft}
                        hard={card.hard}
                        progress={card.progress}
                        liq={card.liq}
                        lock={card.lock}
                        end={card.end}
                        token={card.token}
                        sale={card.sale}
                        kyc={card.kyc}
                        audit={card.audit}
                        vetted={card.vetted}
                        coin_image={card.coin_image}
                        topstatus={card.topstatus}
                    />
                ))}

            </div>
        </div>

);
};

const Card = ({ title, description, image, soft, hard, progress, liq, lock, end, token, sale , theme, audit, kyc, vetted, coin_image, topstatus}) => {
    const navigate=useNavigate()

    const GoToSaleDetail = async(sale) => {
        navigate('/buySale/'+sale);
    }
    
    return (
        <div onClick={() => {GoToSaleDetail(sale)}} style={{cursor:"pointer",borderRadius:"1.5vw"}}>
            <div style={{fontSize:"1.3vw",fontWeight:"700",color:"#12D576",textAlign:"end",paddingRight:"1vw"}}>{topstatus}</div>
        <div className="card" style={{borderRadius:"1.5vw",backgroundColor:"rgba(70,70,70,0.4)"}}>
            <img src={image} alt={title} className="card-image" />
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <img src={coin_image} style={{ paddingLeft: "2vw",position:"relative",bottom:"0.3vw",width:"5vw",height:"3vw" }} alt="not found" />
            <div style={{display:"flex",paddingRight:"1.5vw",paddingTop:"1vw",gap:"0.1vw"}}>

            {audit != "" && ( 
            <div onClick={(event) => {event.stopPropagation(); window.open(audit, "_blank");}} style={{cursor:"pointer",padding:"0.3vw 0.5vw",fontWeight:"700",color:'#12D576',border:"1px solid #12D576",borderRadius:"1vw"}}>Audit</div>
            )}
            {kyc != "" && ( 
            <div onClick={(event) => {event.stopPropagation(); window.open(kyc, "_blank");}} style={{cursor:"pointer",padding:"0.3vw 0.5vw",fontWeight:"700",color:'#12D576',border:"1px solid #12D576",borderRadius:"1vw"}}>KYC+</div>
            )}
            {vetted != "" && ( 
            <div onClick={(event) => {event.stopPropagation(); window.open(vetted, "_blank");}} style={{cursor:"pointer",padding:"0.3vw 0.5vw",fontWeight:"700",color:'#12D576',border:"1px solid #12D576",borderRadius:"1vw"}}>Vetted</div>
            )}
            </div>
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="progress-bar-container">
                    <span className="progress-text">Progress {progress}%</span>
                    <progress className="progress-bar"  value={progress} max="100"></progress>
                    {/* <span className="value-text">5.073ETH </span>
        <span className="new-text">10BNB</span> */}
                </div>
                <div className="box-container">
                    <div className="box box-1" style={{fontSize:"0.6vw"}}>
                        <span className="box-text">Softcap</span>
                        <span className="Softcap-text">{soft} </span>
                    </div>
                    <div className="box box-2" style={{fontSize:"0.6vw"}}>
                        <span className="box-text">Hardcap</span>
                        <span className="Softcap-text">{hard} </span>

                    </div>
                    </div> <div className="box-container">
                    <div className="box box-3" style={{fontSize:"0.6vw"}}>
                        <span className="box-text">Liquidity</span>
                        <span className="Liquidity-text">{liq}%</span>
                    </div>
                    <div className="box box-4" style={{fontSize:"0.6vw"}}>
                        <span className="box-text">Locked</span>
                        <span className="Locked-text">{lock} Days  </span>
                    </div>

                </div>
                <div className="line"> </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className="end" style={{fontSize:"0.8vw",width:"50%"}}>{end}</div>
                <div style={{dispaly:"flex",position:"relative",bottom:"2.5vw"}}>
                <svg height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                <svg height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                </div>
                </div>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                </head>
                {/* <div class="icon-container">
                    <span class="fas fa-bell"></span>
                    <span class="far fa-heart"></span></div> */}
            </div>
        </div>
        </div>
    );
};


export default New;
