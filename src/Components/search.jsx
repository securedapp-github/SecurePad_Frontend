import React, { useEffect, useState } from "react";
import "../Style/search.css" // Import the CSS file for styling
import FACTORYABI from "../ABI/FactoryABI.json";
import SALEABI from "../ABI/SaleABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import {useNavigate} from 'react-router-dom'

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

const New = ({ onSearch }) => {
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
   

    const getSales = async () => {

        let [count,] = await FactoryContract.GetAllSales(0, 0);
        count = count.toString();
        setcount(count);
        let saledetails;

        let [, sales] = await FactoryContract.GetAllSales(count, 0);
        console.log(sales);
        if (sales.length > 0) {

            setsalesArray([]);
            for (let i = 0; i < 1; i++) {
                //   for (let i = 0; i < sales.length; i++) {
                let SaleContract = new ethers.Contract(
                    sales[i],
                    SALEABI,
                    provider
                );
                let [tokens, , , , , softCap, hardCap, saleStartTime, saleEndTime, cliff, lockMonths, , Raised] = await SaleContract.getSaleDetails();
                let progress = 0;
                
                if(Raised.toString() > 0){
                 progress = Raised.toString() * 100 / hardCap.toString();
                }

                let TOKENCONTRACT = new ethers.Contract(
                    tokens,
                    TOKENABI,
                    provider
                );
                let name = await TOKENCONTRACT.name();

                let status;

                saleStartTime = saleStartTime.toString() * 1000;
                saleEndTime = saleEndTime.toString() * 1000;

                if (saleStartTime > Date.now()) {
                    const date = new Date(saleStartTime);
                    const dateTimeString = date.toLocaleString();
                    status = "Sale Starts at " + dateTimeString;
                } else if (saleEndTime < Date.now()) {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString(); 

                    status = "Sale Ended at " + dateTimeString;
                } else {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString(); 
                    status = "Sale Ends at " + dateTimeString;
                }

                saledetails = {
                    'id': i + 1, 
                    'title': name, 
                    'description': '',
                    'image': 'https://blog.kleros.io/content/images/size/w2000/2019/12/header-2nd-sale-1.jpg',
                    'soft': ethers.utils.formatEther(softCap.toString()),
                    'hard': ethers.utils.formatEther(hardCap.toString()),
                    'progress': progress,
                    'liq': 20,
                    'lock': lockMonths.toString() * 30,
                    'end': status,
                    'token': 'BNB',
                    'sale' : sales[i]
                };
                if (i == 0) {
                    setsalesArray([]);
                }
                setsalesArray(prevItems => [...prevItems, saledetails]);
            }

        }
    }

    useEffect(() => {
        if (!address) return;
        getSales();
    }, [address]);


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

    const filteredCards = cardsData.filter((card) =>
        card.title.toLowerCase().includes(filterBy.toLowerCase())
    );

    const searchedCards = filteredCards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="container">
            <div className="search">
                <div class="search-container">
                    <input
                        type="text" class="search-box" placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid #ccc',
                            borderRadius: '25px',
                            padding: '8px',
                            marginBottom: '10px',
                            marginTop: '20px',
                            width: '20%',
                            color: '#ccc'
                        }}
                    /></div>

                <div className="filter" style={{ marginLeft: '1100px', marginTop: '-60px' }}>
                    <select
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '8px',
                            marginLeft: '10px',
                            color: '#ccc',
                        }}

                    >
                        <option value="" style={{ color: 'blue' }}>All</option>
                        {cardsData.map((option, index) => (
                            <option
                                key={index}
                                value={option.title}
                                style={{ color: 'blue' }}
                            >
                                {option.title}
                            </option>
                        ))}

                        {/* <option value="" style={{ color: 'blue' }}>All</option>
                                <option value="MEME ELON DOGE FLOKI" style={{ color: 'blue' }}>MEME ELON DOGE FLOKI</option>
                                <option value="HCOIN BASE GOT DOWN" style={{ color: 'blue' }}>HCOIN BASE GOT DOWN</option>
                                <option value="BIT CRYPTO CURRENCY" style={{ color: 'blue' }}>BIT CRYPTO CURRENCY</option>
                                <option value="Card 4" style={{ color: 'blue' }}>Card 4</option>
                                <option value="Card 5" style={{ color: 'blue' }}>Card 5</option>
                                <option value="Card 6" style={{ color: 'blue' }}>Card 6</option>
                                <option value="Card 7" style={{ color: 'blue' }}>Card 7</option>
                                <option value="Card 8" style={{ color: 'blue' }}>Card 8</option>
                                <option value="Card 9" style={{ color: 'blue' }}>Card 9</option> */}
                    </select>
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
                    />
                ))}


            </div>
        </div>


    );
};

const Card = ({ title, description, image, soft, hard, progress, liq, lock, end, token, sale }) => {
    const navigate=useNavigate()

    const GoToSaleDetail = async(sale) => {
        navigate('/buySale/'+sale);
    }
    
    return (
        <div onClick={() => {GoToSaleDetail(sale)}} style={{cursor:"pointer",backgroundColor:"rgba(70,70,70,0.4)",width:"25vw",height:"30vw",borderRadius:"2vw"}}>
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="progress-bar-container">
                    <span className="progress-text">Progress {progress}%</span>
                    <progress className="progress-bar" value={progress} max="100"></progress>
                    {/* <span className="value-text">5.073ETH </span>
        <span className="new-text">10BNB</span> */}
                </div>
                <div className="box-container">
                    <div className="box box-1">
                        <span className="box-text">Softcap</span>
                        <span className="Softcap-text">{soft} </span>
                    </div>
                    <div className="box box-2">
                        <span className="box-text">Hardcap</span>
                        <span className="Softcap-text">{hard} </span>

                    </div>
                    <div className="box box-3">
                        <span className="box-text">Liquidity</span>
                        <span className="Liquidity-text">{liq}%</span>
                    </div>
                    <div className="box box-4">
                        <span className="box-text">Locked</span>
                        <span className="Locked-text">{lock} Days  </span>
                    </div>

                </div>
                <div class="line"> </div>
                <span className="end">{end}</span>
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
