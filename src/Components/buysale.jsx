import React, { useEffect, useState } from "react";
import Dodge from '../assets/Dodge.png';
import Coin from '../assets/Coin.png';
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import SALEABI from "../ABI/SaleABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import { Button, Modal } from 'react-bootstrap'

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
    const {theme}=props
    const navigate = useNavigate();
    const { SALE } = useParams();
    const provider = useProvider()
    const { address } = useAccount();
    const [progress, setprogress] = useState(0);
    const [price, setprice] = useState(0);
    const [decimal, setdecimal] = useState(0);

    const [soft, setsoft] = useState(0);
    const [hard, sethard] = useState(0);
    const [status, setstatus] = useState('');
    const [token, settoken] = useState('');
    const [pay, setpay] = useState('');
    const [payaddress, setpayaddress] = useState('');

    const [buyamount, setbuyamount] = useState(0);
    const { data: signerData } = useSigner();


    function Change(e) {
        e.preventDefault()
        navigate('/search')
    }

    function countDecimals(value){ 
        if ((value % 1) != 0) 
            return value.toString().split(".")[1].length;  
        return 0;
    };


    const getSaleInfo = async () => {

        let SaleContract = new ethers.Contract(
            SALE,
            SALEABI,
            provider
        );
        let [tokens, pay, tokenPrice, investorMin, investorMax, softCap, hardCap, saleStartTime, saleEndTime, cliff, lockMonths, whitelistOn, Raised] = await SaleContract.getSaleDetails();

        if (Raised.toString() > 0) {
            setprogress(Raised.toString() * 100 / hardCap.toString());
        }

        let p = tokenPrice.toString();
        let d = countDecimals(p / 10000);
        let prices = (p * 10**d)/ 10000; 
        setprice(prices);
        setdecimal(10 ** d);

        setsoft(ethers.utils.formatEther(softCap.toString()));
        sethard(ethers.utils.formatEther(hardCap.toString()));
        setpayaddress(pay);

        let TOKENCONTRACT = new ethers.Contract(
            tokens,
            TOKENABI,
            provider
        );
        settoken(await TOKENCONTRACT.symbol());
        if (pay != '0x0000000000000000000000000000000000000000') {
            TOKENCONTRACT = new ethers.Contract(
                pay,
                TOKENABI,
                provider
            );
            setpay(await TOKENCONTRACT.symbol());
        }
        // else{
        //     setpay(nativeTokenSymbol);
        // }

        saleStartTime = saleStartTime.toString() * 1000;
        saleEndTime = saleEndTime.toString() * 1000;

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

    useEffect(() => {
        if (!address) return;
        getSaleInfo();
    }, [address]);

    
    const buyToken = async () => {

        let SaleContract = new ethers.Contract(
            SALE,
            SALEABI,
            signerData
        );

        if (payaddress == '0x0000000000000000000000000000000000000000') {
            const tx = await SaleContract.buyToken(ethers.utils.parseUnits(buyamount.toString(), "ether"), { value: ethers.utils.parseUnits(buyamount.toString(), "ether") });
            const receipt = await tx.wait()
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
                const receipt2 = await tx.wait()
                if (receipt2.status == 1) {
                    // sale success toast
                }
            }
        }

    }

    return (
        <div className="tokenSale1" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1vw 5vw", }}>
            <div>
                <div onClick={Change} style={{ cursor: "pointer", display: "flex" }}><div style={{ paddingTop: "0.5vw" }}><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></div>
                    <div style={{ fontSize: "2vw", color: "#646464" }}>
                        Back</div></div>
                <div style={{ width: "100%", marginTop: "3vw", backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "2vw" }}>
                    <img style={{ height: "250px", width: "800px" }} src="https://blog.kleros.io/content/images/size/w2000/2019/12/header-2nd-sale-1.jpg" alt="not found" />
                    <br />
                    <img src={Coin} style={{ paddingLeft: "2vw" }} alt="not found" />
                    <div style={{ paddingLeft: "1vw", paddingTop: "0.2vw", color:`${theme==='Dark' ? 'white':'black'}`, fontSize: "3vw", fontWeight: "900" }}>MEME ELON DOGE FLOKI</div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>All Presale contributors will be eligible for PEPELON #PELO airdrop. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>https://twitter.com/PELO_Pepelon </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        Memelon Description.</div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        MEME token with USDT rewards & self liqudity mechanism from Bitball Ecosystem — MEMELON.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        MEME token launched by Bitball Ecosystem for MEME community via NFTs, hodlers rewards and a defi platform in future.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        MEMEs created will be converted into NFTs & Auctioned or rewarded to our community.
                    </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        Relaunched for for better tokenomics & decentralization. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        Liquidity locked till 2024 </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>

                        Promotions & lot of marketing planning. </div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>

                        Cross chain integration in future, i.e Ethereum chain, Binance chain & others. </div>
                    <div style={{ paddingLeft: "1vw", paddingTop: "1vw", fontSize: "1vw", color:`${theme==='Dark' ? 'white':'black'}`, whiteSpace: "pre-wrap" }}>
                        TAX - 2% (only on Polygon chain.) </div>

                </div>
            </div>
            <div>
                {/* <div style={{ fontWeight: "700", fontSize: "1vw", marginTop: "6vw", padding: "0.5vw 1.5vw", borderRadius: "1.5vw", backgroundColor: "rgba(70,70,70,0.4)" }}>
                    <span style={{ color:`${theme==='Dark' ? 'white':'black'}` }}>Connect Network to</span>
                    <span><svg className="tokenSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="19.000000pt" style={{ fill: "#FFFFFF" }} viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M82 197 c-25 -26 -29 -36 -20 -45 9 -9 17 -7 35 10 l23 21 23 -21
c18 -17 26 -19 35 -10 9 9 5 19 -20 45 -18 18 -35 33 -38 33 -3 0 -20 -15 -38
-33z"/>
                            <path d="M14 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                            <path d="M104 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                            <path d="M194 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                            <path d="M62 87 c-9 -11 -4 -21 23 -47 l35 -34 35 34 c27 26 32 36 23 47 -9
11 -15 10 -35 -8 l-23 -22 -23 22 c-20 18 -26 19 -35 8z"/>
                        </g>
                    </svg></span>
                    <span style={{ color: "#12D576" }}>BNB Smart Chain</span>
                </div> */}
                <div style={{ backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "1.3vw", marginTop: "4vw", color:`${theme==='Dark' ? 'white':'black'}`, padding: "0.5vw 1.5vw" }}>
                    <div>
                        <span style={{ fontSize: "1.4vw", fontWeight: "700" }}>{status}</span>
                        {/* <span style={{ fontSize: "1.1vw" }}>00:05:45:20</span>
                        <span style={{ paddingLeft: "3vw" }}><svg className="tokenSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="40.000000pt" height="34.000000pt" style={{ fill: "#FFFFFF" }} viewBox="0 0 24.000000 24.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                stroke="none">
                                <path d="M82 197 c-25 -26 -29 -36 -20 -45 9 -9 17 -7 35 10 l23 21 23 -21
c18 -17 26 -19 35 -10 9 9 5 19 -20 45 -18 18 -35 33 -38 33 -3 0 -20 -15 -38
-33z"/>
                                <path d="M14 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                                <path d="M104 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                                <path d="M194 129 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"/>
                                <path d="M62 87 c-9 -11 -4 -21 23 -47 l35 -34 35 34 c27 26 32 36 23 47 -9
11 -15 10 -35 -8 l-23 -22 -23 22 c-20 18 -26 19 -35 8z"/>
                            </g>
                        </svg></span> */}
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
                    <div style={{ fontSize: "1.1vw", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ border: "2px solid #464646", display: "flex", borderRadius: "1.5vw", padding: "0.3vw 0.5vw" }}>
                            <input
                                value={buyamount}
                                onChange={(e) => setbuyamount(e.target.value)}
                                placeholder={'0 ' + pay} style={{ fontWeight: "600", color:`${theme==='Dark' ? 'white':'black'}`, fontSize: "1.1vw", width: "10vw", border: "2px solid transparent", backgroundColor: "transparent" }} type="text" />
                            <div style={{ color: "#12D576", fontWeight: "700",paddingTop:"0.5vw" }}>MAX</div>
                        </div>
                        <div onClick={() => { buyToken() }} style={{ backgroundColor: "#464646", padding: "1vw 2vw 1vw 2vw", borderRadius: "1.5vw" }}>
                            BUY {' ' + token}
                        </div>
                    </div>
                    <div style={{ paddingTop: "2vw", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646" }}>
                        <div>Total Contributors</div>
                        <div>0</div>
                    </div>
                    {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>AVG Contribution</div>
                        <div>0.587 BNB</div>
                    </div> */}
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Sale Rate</div>
                        <div> { price } Matic = {decimal} {token} </div>
                    </div>
                    {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Listing Rate</div>
                        <div>7,935,227,272.727 MEMELON / BNB</div>
                    </div> */}
                    {/* <div style={{ paddingTop: "2vw", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646" }}>
                        <div>My Contribution</div>
                        <div>0 BNB</div>
                    </div> */}
                    {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>Total Reserved Tokens</div>
                        <div>0 MEMELON</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BuySale
