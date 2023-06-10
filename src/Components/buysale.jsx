import React, { useEffect, useState } from "react";
import Dodge from '../assets/Dodge.png';
import Coin from '../assets/Coin.png';
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import SALEABI from "../ABI/SaleABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import { Button, Modal } from 'react-bootstrap'
import Loader from 'utils/loader';
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

function BuySale(props) {
    const { theme } = props

    const navigate = useNavigate();
    const { SALE } = useParams();
    const provider = useProvider()
    const { address } = useAccount();
    const [progress, setprogress] = useState(0);
    const [price, setprice] = useState(0);
    const [decimal, setdecimal] = useState(0);
    const [balance, setbalance] = useState(0);

    const [soft, setsoft] = useState(0);
    const [hard, sethard] = useState(0);
    const [status, setstatus] = useState('');
    const [token, settoken] = useState('');
    const [pay, setpay] = useState('');
    const [payaddress, setpayaddress] = useState('');
    const [loading, setLoading] = useState(false);

    const [buyamount, setbuyamount] = useState(0);
    const { data: signerData } = useSigner();


    function Change(e) {
        e.preventDefault()
        navigate('/search')
    }

    function countDecimals(value) {
        if ((value % 1) != 0)
            return value.toString().split(".")[1].length;
        return 0;
    };


    const setdata = async (data) => {
        try {
            if (data.length > 0) {
                console.log(data);

                if (data[0].raised > 0) {
                    setprogress(data[0].raised * 100 / data[0].hard);
                }

                let p = data[0].price;
                let d = countDecimals(p / 10000);
                let prices = (p * 10 ** d) / 10000;
                setprice(prices);
                setdecimal(10 ** d);

                setsoft(data[0].soft);
                sethard(data[0].hard);
                setpayaddress(data[0].payment_address);

                let TOKENCONTRACT = new ethers.Contract(
                    data[0].token_address,
                    TOKENABI,
                    provider
                );

                settoken(data[0].token_name);
                let bal = await TOKENCONTRACT.balanceOf(address);
                bal = ethers.utils.formatEther(bal.toString());
                setbalance(bal);
                setpay(data[0].payment_name);


                let saleStartTime = data[0].start * 1000;
                let saleEndTime = data[0].end * 1000;

                if (saleStartTime > Date.now()) {
                    const date = new Date(saleStartTime);
                    const dateTimeString = date.toLocaleString();
                    setstatus("Sale Starts at " + dateTimeString);
                } else if (saleEndTime < Date.now()) {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString();

                    setstatus("Sale Ended at " + dateTimeString);
                } else {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString();
                    setstatus("Sale Ends at " + dateTimeString);
                }
            }
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            console.log("Error", e);
        }
    }


    const getSaleInfo = async () => {
        try {
            setLoading(true);

            fetch("https://139-59-5-56.nip.io:3443/getSale?sale=" + SALE)
                // fetch("http://localhost:8000/getSale?sale="+SALE)        
                .then((res) => res.json())
                .then((data) => setdata(data))

        } catch (e) {
            setLoading(false);
            console.log("Error", e);
        }
    }

    useEffect(() => {
        getSaleInfo();
    }, []);

    const blurryDivStyle = {
        filter: loading? 'blur(5px)':'blur(0px)'
      };

    const buyToken = async () => {
        try {
            setLoading(true);
            let SaleContract = new ethers.Contract(
                SALE,
                SALEABI,
                signerData
            );

            if (payaddress == '0x0000000000000000000000000000000000000000') {
                const tx = await SaleContract.buyToken(ethers.utils.parseUnits(buyamount.toString(), "ether"), { value: ethers.utils.parseUnits(buyamount.toString(), "ether") });
                const receipt = await tx.wait();
                if (receipt.status == 1) {
                    alert("Purchase Successful");
                    setLoading(false);
                }

            } else {

                let TOKENCONTRACT = new ethers.Contract(
                    payaddress,
                    TOKENABI,
                    signerData
                );
                const tx = await TOKENCONTRACT.approve(SALE, ethers.utils.parseUnits(buyamount.toString(), "ether"));
                const receipt = await tx.wait();
                if (receipt.status == 1) {
                    const tx2 = await SaleContract.buyToken(ethers.utils.parseUnits(buyamount.toString(), "ether"));
                    const receipt2 = await tx2.wait()
                    if (receipt2.status == 1) {
                        alert("sale success toast");
                        setLoading(false);
                    }
                }
            }

        } catch (e) {
            setLoading(false);
            console.log("Error", e);
        }

    }

    return (<>

        {loading && (<Loader />)}


        <div className="tokenSale1" style={{ ...blurryDivStyle, display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1vw 5vw", }}>
            <div>
                <div onClick={Change} style={{ cursor: "pointer", display: "flex" }}><div style={{ paddingTop: "0.5vw" }}><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></div>
                    <div style={{ fontSize: "2vw", color: "#646464" }}>
                        Back</div></div>
                <div style={{ paddingBottom:"2vw",width: "100%", marginTop: "3vw", backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "3vw" }}>
                    <img style={{ height: "250px", width: "100%",borderRadius:"3vw",padding:"0.2vw" }} src="https://blog.kleros.io/content/images/size/w2000/2019/12/header-2nd-sale-1.jpg" alt="not found" />
                    <br />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img src={Coin} style={{ position:"relative",paddingLeft: "3vw",bottom:"1.8vw"}} alt="not found" />
                    <div style={{display:"flex",gap:"0.4vw",color:"white",paddingRight:"3vw",fontSize:"1.3vw"}}>
                        <div style={{display:"flex",gap:"0.2vw",border:"1px solid white",padding:"0.2vw 0.5vw",borderRadius:"2vw",height:"2.7vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{fill:"#12D576"}} fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg></div>
                        <div>Audit</div>
                        </div>
                        <div style={{display:"flex",gap:"0.2vw",border:"1px solid white",padding:"0.2vw 0.5vw",borderRadius:"2vw",height:"2.7vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{fill:"#12D576"}} fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg></div>
                        <div>KYC+</div>
                        </div>
                        <div style={{display:"flex",gap:"0.2vw",border:"1px solid white",padding:"0.2vw 0.5vw",borderRadius:"2vw",height:"2.7vw"}}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{fill:"#12D576"}} fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg></div>
                        <div>Vetted</div>
                        </div>
                    </div>
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "0.2vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, fontSize: "3vw", fontWeight: "900" }}>MEME ELON DOGE FLOKI</div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>All Presale contributors will be eligible for PEPELON #PELO airdrop. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>https://twitter.com/PELO_Pepelon </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        Memelon Description.</div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        MEME token with USDT rewards & self liqudity mechanism from Bitball Ecosystem — MEMELON.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        MEME token launched by Bitball Ecosystem for MEME community via NFTs, hodlers rewards and a defi platform in future.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        MEMEs created will be converted into NFTs & Auctioned or rewarded to our community.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        Relaunched for for better tokenomics & decentralization. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        Liquidity locked till 2024 </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>

                        Promotions & lot of marketing planning. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>

                        Cross chain integration in future, i.e Ethereum chain, Binance chain & others. </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw",fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>
                        TAX - 2% (only on Polygon chain.) </div>

                </div>
            </div>
            <div>

                <div style={{ backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "1.3vw", marginTop: "6vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, padding: "1vw 1.5vw" }}>
                    <div>
                        <span style={{ fontSize: "1.4vw", fontWeight: "600" }}>{status}</span>

                    </div>
                    <div style={{ marginTop: "1vw", height: "1vw", borderRadius: "1vw", backgroundColor: "#464646" }}>
                        <div style={{ height: "1vw", width: "20%", borderRadius: "1vw", backgroundColor: "#12D576" }}></div>
                    </div>
                    <div style={{ fontSize: "1.2vw", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>{soft}{" " + token}</div>
                        <div>{hard}{" " + token}</div>
                    </div>
                    <div style={{ fontSize: "1.1vw", paddingTop: "0.7vw" }}>
                        {/* Buy */}
                    </div>
                    <div style={{fontSize:"1.5vw"}}>Contribute</div>
                    <div style={{ fontSize: "1.1vw", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{height:"100%",border: "2px solid #464646", display: "flex", borderRadius: "1.5vw", padding: "0.3vw 0.2vw" }}>
                            <input
                                value={buyamount}
                                onChange={(e) => setbuyamount(e.target.value)}
                                placeholder={'0 ' + pay} style={{padding:"0",fontWeight: "600", color: `${theme === 'Dark' ? 'white' : 'black'}`, fontSize: "1.1vw", width: "10vw", border: "2px solid transparent", backgroundColor: "transparent" }} type="text" />
                            <div style={{color: "#12D576", fontWeight: "700", paddingTop: "0.2vw" }}>{pay}</div>
                        </div>
                        <div onClick={() => { buyToken() }} style={{ backgroundColor: "#464646",height:"100%",padding: "0.5vw 1vw", borderRadius: "1.5vw" }}>
                            BUY {' ' + token}
                        </div>
                    </div>
                    <div style={{ paddingTop: "2vw", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646" }}>
                        <div>Expected Token</div>
                        <div>{buyamount * decimal}</div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Sale Rate</div>
                        <div> {price} {pay} = {decimal} {token} </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Your Balance</div>
                        <div> {balance} {token} </div>
                    </div>

                </div>
            </div>

        </div> 
        </>
    )
}

export default BuySale
