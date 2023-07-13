import React, { useEffect, useState } from "react";
import "../Style/search.css" // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'

import {
    useAccount
} from "wagmi";

const New = ({ theme }) => {
    const DB_LINK = process.env.REACT_APP_DB;

    const [salesArray, setsalesArray] = useState([]);
    const { address } = useAccount();

    const setdata = async (data) => {
        if (data.length > 0) {

            setsalesArray([]);
            for (let i = 0; i < data.length; i++) {

                let progress = 0;
                let saledetails;
                let hardcap;

                if (data[i].raised > 0) {
                    progress = data[i].raised * 100 / data[i].hard;
                }

                if (data[i].hard > 1000000) {
                    hardcap = (data[i].hard / 1000000) + "M";
                } else if (data[i].hard > 1000) {
                    hardcap = (data[i].hard / 1000) + "K";
                } else {
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
                    'audit': data[i].audit,
                    'vetted': data[i].vetted,
                    'coin_image': data[i].coin_image,
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
            fetch(DB_LINK + "getSales")        
            .then((res) => res.json())
            .then((data) => setdata(data))
    }

    useEffect(() => {
        getSales();
    }, [address]);


    return (
        <div className="searchpage-container" style={{ margin: "1.5vw 0" }}>
           
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


const Card = ({ title, description, image, soft, hard, progress, liq, lock, end, token, sale, theme, audit, kyc, vetted, coin_image, topstatus }) => {
    const navigate = useNavigate()

    const GoToSaleDetail = async (sale) => {
        navigate('/buySale/' + sale);
    }

    return (
        <div onClick={() => { GoToSaleDetail(sale) }} style={{ cursor: "pointer" }}>
            <div style={{display:'flex',gap:'5px',width:'100%',justifyContent:'right'}}>
                <svg  id='indicator' style={{marginTop:'12px',fill:`${topstatus=='Sale Live'?'#00FF83': `${topstatus=='Sale Upcoming'?'#00A3FF':'red'}`}`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path width='8px' height='8px' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            <div className="status"style={{ fontSize: "20px", fontWeight: "700", color: "white", paddingRight: "19.2px" }}>{topstatus}</div>
            </div>
            <div className="card" style={{backgroundColor: "rgba(70,70,70,0.4)" }}>
                <img src={image} alt={title} className="card-image" />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src={coin_image} className='coin-image' style={{ paddingLeft: "38.4px", position: "relative", bottom: "5.8px", width: "96px", height: "57.6px" }} alt="not found" />
                    <div style={{ display: "flex", paddingRight: "29px", paddingTop: "38.5px", gap: "10px" }} className="audit">

                        {audit != "" && (
                            <div onClick={(event) => { event.stopPropagation(); window.open(audit, "_blank"); }} style={{ cursor: "pointer",background:'#009A4E', padding: "2px 10px",fontSize:'12px', fontWeight: "400", color: 'white', border: "1px solid #00FF83", borderRadius: "8px" }}>Audit</div>
                        )}
                        {kyc != "" && (
                            <div onClick={(event) => { event.stopPropagation(); window.open(kyc, "_blank"); }} style={{ cursor: "pointer",background:'#009A4E', padding: "2px 10px",fontSize:'12px', fontWeight: "400", color: 'white', border: "1px solid #00FF83", borderRadius: "8px" }}>KYC+</div>
                        )}
                        {vetted != "" && (
                            <div onClick={(event) => { event.stopPropagation(); window.open(vetted, "_blank"); }} style={{ cursor: "pointer",background:'#009A4E', padding: "2px 10px",fontSize:'12px', fontWeight: "400", color: 'white', border: "1px solid #00FF83", borderRadius: "8px" }}>Vetted</div>
                        )}
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <div className="progress-bar-container">
                        <span className="progress-text">Progress {progress}%</span>
                        <progress className="progress-bar" value={progress} max="100"></progress>
                        {/* <span className="value-text">5.073ETH </span>
>>>>>>> a03b1a4281b32790c4b32fcc2e41e259b33382ea
        <span className="new-text">10BNB</span> */}
                    </div>
                    <div className="box-container" style={{paddingTop:"15px"}}>
                        <div className="box box-1" style={{ fontSize: "12px" }}>
                            <span className="box-text">Softcap</span>
                            <span className="Softcap-text">{soft} </span>
                        </div>
                        <div className="box box-2" style={{ fontSize: "12px" }}>
                            <span className="box-text">Hardcap</span>
                            <span className="Softcap-text">{hard} </span>

                        </div>
                    </div> <div className="box-container">
                        <div className="box box-3" style={{ fontSize: "12px" }}>
                            <span className="box-text">Liquidity</span>
                            <span className="Liquidity-text">{liq}%</span>
                        </div>
                        <div className="box box-4" style={{ fontSize: "12px" }}>
                            <span className="box-text">Locked</span>
                            <span className="Locked-text">{lock} Days  </span>
                        </div>

                    </div>
                    <div className="line"> </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="end" style={{ fontSize: "14px", width: "50%" }}>{end}</div>
                        <div className='note' style={{position: "relative", bottom: "38.5px" }}>
                        <svg width='25px' height='25px' style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                        <svg width='25px' height='25px' style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                        </div>
                    </div>
                    <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                    </div>
                    {/* <div class="icon-container">
                    <span class="fas fa-bell"></span>
                    <span class="far fa-heart"></span></div> */}
                </div>
            </div>
        </div>
    );
};


export default New;

