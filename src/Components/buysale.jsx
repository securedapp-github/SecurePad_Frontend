import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import SALEABI from "../ABI/SaleABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import { Button, Modal } from 'react-bootstrap'
import Loader from 'utils/loader';
import { ethers } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

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
    const provider = useProvider();
    const { address } = useAccount();
    const [progress, setprogress] = useState(0);
    const [price, setprice] = useState(0);
    const [decimal, setdecimal] = useState(0);
    const [balance, setbalance] = useState(0);
    const [paybalance, setpaybalance] = useState(0);

    const [soft, setsoft] = useState(0);
    const [hard, sethard] = useState(0);
    const [status, setstatus] = useState('');
    const [token, settoken] = useState('');
    const [pay, setpay] = useState('');
    const [payaddress, setpayaddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [allowed, setallowed] = useState(true);

    const [kyc, setkyc] = useState('');
    const [audit, setaudit] = useState('');
    const [vetted, setvetted] = useState('');
    const [desc, setdesc] = useState('');
    const [image, setimage] = useState('');
    const [coin, setcoin] = useState('');
    const [web, setweb] = useState('');
    const [twi, settwi] = useState('');
    const [git, setgit] = useState('');
    const [tel, settel] = useState('');
    const [dis, setdis] = useState('');




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
                
                if (data[0].raised > 0) {
                    setprogress(data[0].raised * 100 / data[0].hard);
                }

                let p = data[0].price;
                let d = countDecimals(p / 10000);
                let prices = (p * 10 ** d) / 10000;
                setprice(prices);
                setdecimal(10 ** d);

                setkyc(data[0].kyc);
                setaudit(data[0].audit);
                setvetted(data[0].vetted);
                setdesc(data[0].desc);
                setcoin(data[0].coin_image);
                setimage(data[0].image);

                const alllinks = data[0].links.split('---');
                setweb(alllinks[0]);
                settwi(alllinks[1]);
                setgit(alllinks[2]);
                settel(alllinks[3]);
                setdis(alllinks[4]);
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

                if (data[0].payment_address != "0x0000000000000000000000000000000000000000") {
                    let FundContract = new ethers.Contract(
                        data[0].payment_address,
                        TOKENABI,
                        provider
                    );
                    let funds = await FundContract.balanceOf(address);
                    funds = ethers.utils.formatEther(funds.toString());
                    setpaybalance(funds);
                } else {
                    let balance = await provider.getBalance(address);
                    balance = ethers.utils.formatEther(balance.toString());
                    balance = Number(balance).toFixed(2);
                    setpaybalance(balance);
                }

                let saleStartTime = data[0].start * 1000;
                let saleEndTime = data[0].end * 1000;

                if (saleStartTime > Date.now()) {
                    const date = new Date(saleStartTime);
                    const dateTimeString = date.toLocaleString();
                    setallowed(false);
                    setstatus("Sale Starts at " + dateTimeString);
                } else if (saleEndTime < Date.now()) {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString();
                    setallowed(false);
                    setstatus("Sale Ended at " + dateTimeString);
                } else {
                    const date = new Date(saleEndTime);
                    const dateTimeString = date.toLocaleString();
                    setallowed(true);
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
        filter: loading ? 'blur(5px)' : 'blur(0px)'
    };

    const updateRaisedDB = async (sale, amount) => {

        fetch('https://139-59-5-56.nip.io:3443/updatePurchase', {
        // fetch('http://127.0.0.1:8000/updatePurchase', {
         method: 'POST',
         body: JSON.stringify({
            salecontract: sale,
            saleamount: amount,
         }),
         headers: {
            'Content-type': 'application/json',
         },
      })
         .then((res) => {res.json()})
         .then((data) => {
            toast.success('Token Purchased Successfully');
            setLoading(false);
            setTimeout(function(){window.location.reload(true);}, 5000);
         })
         .catch((err) => {
            console.log(err.message);
            setLoading(false);
         });

    }

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
                    console.log("Updating Purchased Amount of "+ buyamount * decimal);
                    updateRaisedDB(SALE, buyamount * decimal);
                }
            } else {
                let TOKENCONTRACT = new ethers.Contract(
                    payaddress,
                    TOKENABI,
                    signerData
                );
                console.log("Approving Token for payment");
                const tx = await TOKENCONTRACT.approve(SALE, ethers.utils.parseUnits(buyamount.toString(), "ether"));
                const receipt = await tx.wait();
                if ( receipt.status == 1 ) {
                    console.log("TOken Approved");
                    console.log("Initiating Transfer");
                    toast.success('Token Approved Successfully, Please Confirm Purchase now');
                    const tx2 = await SaleContract.buyToken(ethers.utils.parseUnits(buyamount.toString(), "ether"));
                    const receipt2 = await tx2.wait()
                    if (receipt2.status == 1 ) {
                        console.log("Token Alloted successfully, Updating DB");
                        updateRaisedDB(SALE, buyamount * decimal);
                    }
                }
            }

        } catch (e) {
            console.log("Error", e);
            setLoading(false);
            toast.error('An error occurred while purchasing tokens');
        }
    }

    return (<>

        {loading && (<Loader />)}

        <ToastContainer
            position="top-center"
            autoClose={5000}
            theme="dark"
            pauseOnHover
        />

        <div className="tokenSale1" style={{ ...blurryDivStyle, display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1vw 5vw", }}>

        <div style={{width:"60%"}}>
                <div onClick={Change} style={{ cursor: "pointer", display: "flex" }}><div style={{ paddingTop: "0.5vw" }}><svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></div>
                    <div style={{ fontSize: "2vw", color: "#646464" }}>
                        Back</div></div>
                <div style={{ paddingBottom: "2vw", width: "100%", marginTop: "3vw", backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "3vw" }}>
                    <img style={{ height: "250px", width: "100%", borderRadius: "3vw", padding: "0.2vw" }} src={image} alt="not found" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <img src={coin} style={{ maxWidth: '10vw', maxHeight: '6vw',  position: "relative", paddingLeft: "3vw", bottom: "1.8vw" }} alt="not found" />
                        
                        <div style={{ paddingTop: "0.2vw" }}>

                            {web !== undefined && (
                                <svg onClick={(event) => { window.open(web, "_blank"); }} xmlns="http://www.w3.org/2000/svg" width="1.3vw" height="1.3vw" style={{ cursor:"pointer", fill: "#12D576", margin: "0.4vw" }} className="bi bi-globe" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                </svg>
                            )} {twi !== undefined && (
                                <svg onClick={(event) => { window.open(twi, "_blank"); }} xmlns="http://www.w3.org/2000/svg" width="1.3vw" height="1.3vw" style={{cursor:"pointer", fill: "#12D576", margin: "0.4vw" }} className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            )}{git !== undefined && (
                                <svg onClick={(event) => { window.open(git, "_blank"); }} xmlns="http://www.w3.org/2000/svg" width="1.3vw" height="1.3vw" style={{cursor:"pointer", fill: "#12D576", margin: "0.4vw" }} className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            )} {tel !== undefined && (
                                <svg onClick={(event) => { window.open(tel, "_blank"); }} width="1.3vw" height="1.3vw" viewBox="0 0 16 16" style={{cursor:"pointer", margin: "0.4vw" }} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99549 0.5C6.51213 0.5 5.06208 0.939867 3.82871 1.76398C2.59534 2.58809 1.63405 3.75943 1.06639 5.12987C0.498733 6.50032 0.350208 8.00832 0.639597 9.46318C0.928986 10.918 1.64329 12.2544 2.69219 13.3033C3.74108 14.3522 5.07745 15.0665 6.53231 15.3559C7.98717 15.6453 9.49517 15.4968 10.8656 14.9291C12.2361 14.3614 13.4074 13.4001 14.2315 12.1668C15.0556 10.9334 15.4955 9.48336 15.4955 8C15.4955 7.01509 15.3015 6.03982 14.9246 5.12987C14.5477 4.21993 13.9952 3.39314 13.2988 2.6967C12.6023 2.00026 11.7756 1.44781 10.8656 1.0709C9.95567 0.693993 8.9804 0.5 7.99549 0.5ZM10.3805 11.864C10.3525 11.9341 10.3098 11.9973 10.2554 12.0495C10.2009 12.1018 10.1359 12.1417 10.0647 12.1667C9.99353 12.1917 9.91781 12.2012 9.84266 12.1945C9.7675 12.1879 9.69465 12.1652 9.62899 12.128L7.59274 10.5455L6.28624 11.7515C6.25591 11.7739 6.22044 11.7883 6.1831 11.7934C6.14575 11.7985 6.10771 11.7942 6.07249 11.7808L6.32299 9.539L6.33049 9.54575L6.33574 9.5015C6.33574 9.5015 9.99949 6.1655 10.1487 6.02375C10.3002 5.882 10.25 5.85125 10.25 5.85125C10.259 5.67875 9.97924 5.85125 9.97924 5.85125L5.12449 8.97425L3.10324 8.28575C3.10324 8.28575 2.79274 8.17475 2.76349 7.9295C2.73274 7.6865 3.11299 7.5545 3.11299 7.5545L11.1507 4.361C11.1507 4.361 11.8115 4.067 11.8115 4.5545L10.3805 11.864Z" fill="#12D576" />
                                </svg>
                            )} {dis !== undefined && (
                                <svg onClick={(event) => { window.open(dis, "_blank"); }} xmlns="http://www.w3.org/2000/svg" width="1.3vw" height="1.3vw" style={{cursor:"pointer", fill: "#12D576", margin: "0.4vw" }} className="bi bi-discord" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                </svg>
                            )}
                        </div>
                        <div style={{ display: "flex", gap: "0.4vw", color: "white", paddingRight: "3vw", fontSize: "1.3vw" }}>
                            {audit != "" && (
                                <Link onClick={(event) => { window.open(audit, "_blank"); }} style={{textDecoration:"none",color:'white', display: "flex", gap: "0.2vw", border: "1px solid white", padding: "0.2vw 0.5vw", borderRadius: "2vw", height: "2.7vw" }}>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{ fill: "#12D576" }} fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    </svg></div>
                                    <div>Audit</div>
                                </Link>
                            )}
                            {kyc != "" && (
                                <Link onClick={(event) => { window.open(kyc, "_blank"); }} style={{textDecoration:"none",color:'white', display: "flex", gap: "0.2vw", border: "1px solid white", padding: "0.2vw 0.5vw", borderRadius: "2vw", height: "2.7vw" }}>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{ fill: "#12D576" }} fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    </svg></div>
                                    <div>KYC+</div>
                                </Link>
                            )}
                            {vetted != "" && (
                                <Link onClick={(event) => { window.open(vetted, "_blank"); }} style={{textDecoration:"none",color:'white', display: "flex", gap: "0.2vw", border: "1px solid white", padding: "0.2vw 0.5vw", borderRadius: "2vw", height: "2.7vw" }}>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" style={{ fill: "#12D576" }} fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    </svg></div>
                                    <div>Vetted</div>
                                </Link>
                            )}
                        </div>
                    </div> <div style={{ paddingLeft: "1vw", paddingTop: "0.2vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, fontSize: "3vw", fontWeight: "900" }}>{token} TOKEN SALE</div>
                    <div style={{ paddingLeft: "1vw", fontSize: "1vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, whiteSpace: "pre-wrap" }}>{desc}</div>
                    
                    <div style={{display:"flex",padding:"1vw",justifyContent:"space-between",color:"white",fontSize:"1vw"}}>
                        <div style={{width:"50%"}}>
                                <div style={{padding:"0 0 1.55vw 0",borderBottom:"1px solid #464646"}}>Presale Address</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Token Name</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Sale Type</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Token Symbol</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Token Supply</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Tokens For Presale</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Tokens For Liquidity</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Soft Cap</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Presale Start Time (UTC)</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Presale End Time (UTC)</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Liquidity Percent</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Liquidity Unlock Time (UTC)</div>
                        </div>
                        <div style={{width:"50%"}}>
                        <div style={{paddingBottom:"0.5vw",borderBottom:"1px solid #464646"}}>
                            <div>0xAB4Ba356C8a54e7B1E72fa03aE491574bFb0a1EF</div>
                            <div style={{fontSize:"0.7vw"}}>Do not send PLS directly to the presale address!</div>
                        </div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>Fair Launch</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>BadMF</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>BAD</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>251,700,000,000</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>90,000,000,000</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>64,800,000,000</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>70,000,000 PLS</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>2023-06-09 22:30</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>2023-06-17 22:30</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>80%</div>
                                <div style={{padding:"0.8vw 0",borderBottom:"1px solid #464646"}}>2025-06-16 23:30</div>
                        </div>
                     </div>


                </div>
            </div>
            <div>

                <div style={{ backgroundColor: "rgba(70,70,70,0.4)", borderRadius: "1.3vw", marginTop: "6vw", color: `${theme === 'Dark' ? 'white' : 'black'}`, padding: "1vw 1.5vw" }}>
                    <div>
                        <span style={{ fontSize: "1.4vw", fontWeight: "600" }}>{status}</span>
                    </div>
                    <div className="progress-bar-container">
                    {/* <span className="progress-text">Progress {progress}%</span> */}
                    <progress className="progress-bar"  value={progress} max="100"></progress>
                    {/* <span className="value-text">{soft}{" " + token} </span>
        <span className="new-text">{hard}{" " + token}</span> */}
                </div>

                    {/* <div style={{ marginTop: "1vw", height: "1vw", borderRadius: "1vw", backgroundColor: "#464646" }}>
                        <div style={{ height: "1vw", width: "20%", borderRadius: "1vw", backgroundColor: "#12D576" }}>
                        </div>
                    </div> */}

                    <div style={{ fontSize: "1.2vw", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                       { soft != 0 && ( 
                        <div>{soft}{" " + token}</div>
                       )}
                       { soft == 0 && ( 
                        <div></div>
                       )}
                        <div>{hard}{" " + token}</div>
                    
                    </div>
                    
                    { allowed && (
                    <div style={{ fontSize: "1.1vw", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ height: "100%", border: "2px solid #464646", display: "flex", borderRadius: "1.5vw", padding: "0.3vw 0.2vw" }}>                            <input
                            value={buyamount}
                            onChange={(e) => setbuyamount(e.target.value)}
                            placeholder={'0 ' + pay} style={{ padding: "0", fontWeight: "600", color: `${theme === 'Dark' ? 'white' : 'black'}`, fontSize: "1.1vw", width: "10vw", border: "2px solid transparent", backgroundColor: "transparent" }} type="text" />
                            <div style={{ color: "#12D576", fontWeight: "700", paddingTop: "0.2vw" }}>{pay}</div>
                        </div>
                        <div onClick={() => { buyToken() }} style={{ cursor:"pointer", backgroundColor: "#464646", height: "100%", padding: "0.5vw 1vw", borderRadius: "1.5vw" }}>                            BUY {' ' + token}
                        </div>
                    </div>
                    )}

                    <div style={{ paddingTop: "2vw", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646" }}>
                        <div>Expected Token</div>
                        <div>{buyamount * decimal}</div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Sale Rate</div>
                        <div> {price} {pay} = {decimal} {token} </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Your {token} Balance</div>
                        <div> {balance} </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #464646", paddingTop: "0.4vw" }}>
                        <div>Your {pay} Balance</div>
                        <div> {paybalance} </div>
                    </div>

                </div>
            </div>

        </div>
    </>
    )
}

export default BuySale
