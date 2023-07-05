import React, { useEffect, useState } from "react";
import '../Style/locktoken.css'
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { Button, Modal } from 'react-bootstrap'
import Vector from '../assets/Vector.png'
import Fox from '../assets/Fox.png'
import { Link } from 'react-router-dom'
import { formatAddress } from '../utils/address';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'utils/loader';

import {
  useAccount,
  useContract,
  useSigner,
  useProvider
} from "wagmi";

import LOCKABI from "../ABI/LockABI.json";
import TOKENABI from "../ABI/TokenABI.json";
import FACTORYABI from "../ABI/FactoryABI.json";

function LockToken() {
  const FACTORY_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;

  const [loading, setLoading] = useState(false);

  const { TOKEN } = useParams();
  const [alp, setAlp] = useState(false)
  const { data: signerData } = useSigner();
  const { address } = useAccount();
  const provider = useProvider()

  const [tokenName, settokenName] = useState("");
  const [tokenSupply, settokenSupply] = useState(0);
  const [balance, setbalance] = useState(0);
  const [lock, setLock] = useState("");
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  // const [approveflag, setapproveflag] = useState(0);
  const [newtime, setNewtime] = useState(0);
  const [newtoken, setnewtoken] = useState(0);

  const [release, setRelease] = useState(0);



  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [page, setPage] = useState(true)



  const TokenContract = useContract({
    addressOrName: TOKEN,
    contractInterface: TOKENABI,
    signerOrProvider: provider,
  });

  const FactoryContract = useContract({
    addressOrName: FACTORY_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: signerData,
  });

  const specifyToken = async () => {
    setModal(true);
  }

  const approve = async () => {

    try {
      setLoading(true);
      let TOKENCONTRACT = new ethers.Contract(
        TOKEN,
        TOKENABI,
        signerData
      );
      console.log(amount);
      let locktokenamount = ethers.utils.parseUnits(amount.toString(), 'ethers');
        console.log(locktokenamount);
      const tx = await TOKENCONTRACT.approve(lock, locktokenamount);
      const receipt = await tx.wait()
      if (receipt.status == 1) {
        toast.success('Token Approved Successfully');

        let LOCKCONTRACT = new ethers.Contract(
          lock,
          LOCKABI,
          signerData
        );

        const tx2 = await LOCKCONTRACT.depositToken(amount, time, release);
        const receipt2 = await tx2.wait();
        if (receipt2.status == 1) {
          setTimeout(function () { window.location.reload(true); }, 5000);
          toast.success('Token Locked Successfully');

          setModal(false);
          setPage(false);
          setLoading(false);
        }
      }

        // setModal(false); 
        // setPage(false);


      
      setLoading(false);
    } catch (e) {
      toast.error('An error occurred while locking tokens');
      setLoading(false);
      console.log("Error", e);
    }

  }

  const blurryDivStyle = {
    filter: loading ? 'blur(5px)' : 'blur(0px)'
  };

  const copyAddress = (copytext) => {
    navigator.clipboard.writeText(copytext);
    toast('Address Copied');
  };


  const reLockToken = async () => {
    try {
      setLoading(true);

    let LOCKCONTRACT = new ethers.Contract(
      lock,
      LOCKABI,
      signerData
    );
    
    let relocktokenamount = ethers.utils.parseUnits(newtoken.toString());
    const tx = await LOCKCONTRACT.reLock(newtime, relocktokenamount);
    const receipt = await tx.wait();
    if (receipt.status == 1) {
      setModal2(false);
      setModal3(true);
    }

    // setModal2(false); 
    // setModal3(true);


    setLoading(false);
  } catch (e) {
    toast.error('An error occurred while relocking tokens');
    setLoading(false);
    console.log("Error", e);
  }

  }

  const launchTokenContract = async () => {
    try {
      setLoading(true);
      const tx = await FactoryContract.launchLock(TOKEN);
      const receipt = await tx.wait();
      if (receipt.status == 1) {
      console.log("Token Launched = ", receipt.logs[0].address)
      setLock(receipt.logs[0].address);
      setAlp(true);
      }

      // setLock("0xa603352e96beb06a0d217C59Ee0CcA161312E309");

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error", e);
    }

  }

  const readTokenDetails = async () => {

    let [name, , supply] = await TokenContract.getTokenInfo()

    settokenName(name);
    await new Promise(resolve => setTimeout(resolve, 1000));

    let bal = await TokenContract.balanceOf(address);
    await new Promise(resolve => setTimeout(resolve, 1000));

    bal = ethers.utils.formatEther(bal.toString());
    setbalance(bal);

    supply = ethers.utils.formatEther(supply.toString());
    settokenSupply(supply);
  }

  useEffect(() => {
    if (!signerData) return;
    readTokenDetails();
  }, [signerData, TOKEN, address]);


  function Mains() {
    return (<>
      <div style={{ fontSize: "30px", fontWeight: "700", color: "#12D576" }}>{tokenName}</div>
      <div style={{ fontSize: "20px", color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <div style={{ paddingTop: "1vw", paddingBottom: "1vw" }}>Token address</div>
          <div style={{ paddingTop: "1vw", paddingBottom: "1vw" }}>Total Token Supply</div>
          <div style={{ paddingTop: "1vw", paddingBottom: "1vw" }}>Wallet Token Balance</div>

          <Button onClick={launchTokenContract} style={{ fontSize: "20px", backgroundColor: "#12D576", border: "#12D576", color: "black", fontWeight: "400", padding: "1vw 2vw" }}>Create Locker</Button>
        </div>
        <div>
          <div onClick={() => {copyAddress(TOKEN)}} style={{ paddingTop: "1vw", paddingBottom: "1vw" }}>
            <svg width="20" height="22" style={{ paddingRight: "2px" }} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576" />
            </svg>{formatAddress(TOKEN)}</div>

          <div style={{ color: "#525252", paddingTop: "1vw", paddingBottom: "1vw" }}>
            {tokenSupply}</div>

          <div style={{ color: "#525252", paddingTop: "1vw", paddingBottom: "1vw" }}>
            {balance}</div>
        </div>
      </div>
    </>
    )
  }

  function Mains1() {
    return (<>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "30px", fontWeight: "700", color: "#12D576", paddingBottom: "4%" }}>
        <div>
          {tokenName} Lock Details
        </div>
        {/* <div>
          0.0% Locked
        </div> */}
      </div>
      <div style={{ fontSize: "20px", color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <div >Token Address</div>
          <div style={{ paddingTop: "2vw" }}>Lock Address</div>
          <div style={{ paddingTop: "2vw" }}>Total Token Supply</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Total Locked Token</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Tokens to be locked</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Lock Months</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Vested Release Months</div>
        </div>
        <div>
          <div onClick={() => {copyAddress(TOKEN)}}>
            <svg width="20" height="22" style={{ paddingRight: "2px" }} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576" />
            </svg>{formatAddress(TOKEN)}</div>
          <div onClick={() => {copyAddress(lock)}} style={{ paddingTop: "2vw" }}>
            <svg width="20" height="22" style={{ paddingRight: "2px" }} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576" />
            </svg>{formatAddress(lock)}</div>
          <div style={{ color: "#525252", paddingTop: "2vw" }}>
            {tokenSupply}</div>
          <div style={{ color: "#525252", paddingTop: "2vw", paddingBottom: "2vw" }}>
            0.0</div>
          <div style={{ color: "#525252",marginTop: "2vw", marginBottom: "2vw", }}>
            <input className="locktoken1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" type="number" style={{ width: "100%", height: "50px", borderRadius: "5px",  border: "1px solid #949494" }} />
          </div>
          <div style={{ color: "#525252", marginTop: "2vw", marginBottom: "2vw",}}>
            <input className="locktoken1" value={time} onChange={(e) => setTime(e.target.value)} type="number" placeholder="0" style={{ width: "100%", height: "50px", borderRadius: "5px", border: "1px solid #949494", backgroundColor: "#f4f4f4" }} />
          </div>
          <div style={{ color: "#525252",marginTop: "2vw", marginBottom: "2vw",}}>
            <input className="locktoken1" value={release} onChange={(e) => setRelease(e.target.value)} placeholder="Enter Months" type="number" style={{ width: "100%", height: "50px", borderRadius: "5px",  border: "1px solid #949494" }} />
          </div>
        </div>
      </div>

      <div style={{ width: "100%", paddingTop: "15%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <Button onClick={() => { setModal(false) }} style={{ backgroundColor: "transparent", color: "#12D576", border: "2px solid #12D576", padding: "7px 25px", fontSize: "20px", fontWeight: "450" }} variant="">Cancel</Button>
        </div> <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2%" }}>
          <Button onClick={approve} style={{ backgroundColor: "#12D576", border: "#12D576", padding: "7px 25px", fontSize: "20px", fontWeight: "450" }} variant="">Approve & Lock</Button>
        </div>
      </div>

    </>)
  }

  function Mains2() {
    return (<>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "30px", fontWeight: "700", color: "#12D576", paddingBottom: "4%" }}>
        <div>
          {tokenName}
        </div>
        <div>
          {(amount * 100) / tokenSupply} % Locked
        </div>
      </div>
      <div style={{ fontSize: "20px", color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <div >Token Address</div>
          <div style={{ paddingTop: "2vw" }}>Lock Address</div>
          <div style={{ paddingTop: "2vw" }}>Total Token Supply</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Total Locked Token</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>ReLock with more Token</div>
          <div style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>Lock Months</div>

        </div>
        <div>
          <div onClick={() => {copyAddress(TOKEN)}}>
            <svg width="20" height="22" style={{ paddingRight: "2px" }} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576" />
            </svg>{formatAddress(TOKEN)}</div>
          <div onClick={() => {copyAddress(lock)}} style={{ paddingTop: "2vw" }}>
            <svg width="20" height="22" style={{ paddingRight: "2px" }} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#12D576" />
            </svg>{formatAddress(lock)}</div>
          <div style={{ color: "#525252", paddingTop: "2vw" }}>
            {tokenSupply}</div>
          <div style={{ color: "#525252", paddingTop: "2vw" }}>
            {amount}</div>
            <div style={{ color: "#525252", paddingTop: "2vw" }}>
            <input value={newtoken} onChange={(e) => setnewtoken(e.target.value)} type="number" placeholder="0" style={{ width: "100%", height: "50px", borderRadius: "5px", border: "1px solid #949494", backgroundColor: "#f4f4f4" }} />
            </div>
            <div style={{ color: "#525252", paddingTop: "2vw" }}>
            <input value={newtime} onChange={(e) => setNewtime(e.target.value)} type="number" placeholder="0" style={{ width: "100%", height: "50px", borderRadius: "5px", border: "1px solid #949494", backgroundColor: "#f4f4f4" }} />
            </div>
        </div>
      </div>
      <div style={{ color: "#525252"}}>(Relock only applicable if current lock period is over)</div>

      <div style={{ paddingTop: '4%', display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Button onClick={() => { reLockToken() }} style={{ fontSize: "20px", backgroundColor: "#12D576", border: "1px solid #12D576", color: "black", fontWeight: "400", padding: "1% 12%" }}>Relock token</Button>
      </div>





      <Modal
        {...{
          show: modal3,
          onHide: () => setModal3(false)
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div style={{ paddingTop: "8%", textAlign: "center", paddingLeft: "9%", paddingRight: "9%" }}>
            <img src={Vector} alt="not found" />
            <h5 style={{ fontWeight: "700", paddingTop: "10px" }}>Token Relocked Successfully</h5>
          </div>
          <div style={{ padding: "3% 8%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <div >Token Address</div>
              <div style={{ paddingTop: "30%" }}>Lock Address</div>
            </div>
            <div>
              <div onClick={() => {copyAddress(TOKEN)}} style={{ color: "#2D5C8F" }}>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#2882E3" />
                </svg>{formatAddress(TOKEN)}</div>
              <div onClick={() => {copyAddress(lock)}} style={{ color: "#2D5C8F", paddingTop: "2vw" }}>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#2882E3" />
                </svg>{formatAddress(lock)}</div>
            </div>
          </div>
          <div style={{ textAlign: "center", paddingTop: "5%" }}>
            <div style={{ color: "#12D576", fontWeight: "600", fontSize: "17px", cursor: "pointer", paddingTop: "3%" }}>
              <Button onClick={() => { setModal3(false); }} style={{ backgroundColor: "transparent", color: "#12D576", border: "2px solid #12D576", padding: "7px 25px", fontSize: "20px", fontWeight: "450" }} variant="">Go Back</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>)
  }

  return (

    <>
      {loading && (<Loader />)}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="dark"
        pauseOnHover
      />

      <div className="locktoken" style={{ ...blurryDivStyle, padding: "2%", margin: "0 12% 0 15%" }}>
        <div className="lockTokenFirstRow" style={{ width: "100%" }}><div style={{ paddingTop: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" style={{ fill: "#12D576" }} viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></div>
          <div className="lockTokenFirstRow_1" style={{ paddingLeft: "20px", width: "70%" }}>
            <div style={{ padding: "0", margin: "0", fontSize: "35px", fontWeight: "700", color: "#12D576" }}>Lock Token</div>
            <div onClick={() => {copyAddress(TOKEN)}} style={{ fontSize: "25px", color: "white", fontWeight: "300", paddingBottom: "6%" }}>
              {formatAddress(TOKEN)}
            </div>
            <div className="lockTokenSecondRow" style={{ width: "150%", padding: "5% 5%", border: "2px dotted #464646" }}>
              {alp ? (page ? <Mains1 /> : <Mains2 />) : <Mains />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LockToken
