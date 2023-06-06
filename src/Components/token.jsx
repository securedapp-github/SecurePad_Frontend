import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../Style/token.css"
import Vector from '../assets/Vector.png'
import Fox from '../assets/Fox.png'
import { ethers } from 'ethers';

import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useSigner,
  useWaitForTransaction,
} from "wagmi";
import FACTORYABI from "../ABI/FactoryABI.json";

function Token(props) {
  const {theme}=props
  const FACTORY_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;
  const [modal, setModal] = useState(false)
  const [token, setToken] = useState("");
  const [symbol, setSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const [decimals, setDecimals] = useState(18);
  const [newToken, setnewToken] = useState("");
  const [documents, setdocuments] = useState("");
  const [iskyc, setiskyc] = useState(false);
  const [isforce, setisforce] = useState(false);
  const [isdocument, setisdocument] = useState(false);

  const { data: signerData } = useSigner();

  const FactoryContract = useContract({
    addressOrName: FACTORY_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: signerData,
  });

  const createToken = async () => {
    // if(isdocument || iskyc || isforce || documents != ""){
    //   console.log(iskyc, isforce , documents);
    //   const tx = await FactoryContract.launchSecurityToken(documents, token, symbol, decimals, initialSupply, isforce);
    //   const receipt = await tx.wait()
    //   console.log("Token Launched = ", receipt.logs[0].address)
    //   setnewToken(receipt.logs[0].address);
    // //  setnewToken("0xA95C52AF59E43C528F24EFAC96A08e000012e0e3");

    // }else{

    console.log(token, symbol, decimals, ethers.utils.parseUnits(initialSupply, "ether").toString());
    const tx = await FactoryContract.launchSecureToken(token, symbol, decimals, ethers.utils.parseUnits(initialSupply, "ether").toString());
    const receipt = await tx.wait()
    console.log("Token Launched = ", receipt.logs[0].address)
    setnewToken(receipt.logs[0].address);
    //  setnewToken("0xA95C52AF59E43C528F24EFAC96A08e000012e0e3");
    // }
    setModal(true);
  }

  const handleDocumentChange = () => {
    setisdocument(!isdocument);
    setdocuments("");
  };
  const handleForceChange = () => {
    setisforce(!isforce);
  };
  const handleKYCChange = () => {
    setiskyc(!iskyc);
  };

  return (
    <div className="tokenBody" style={{ padding: "2%" }}>
      <div className="tokenCreate">
        <h2 style={{ fontWeight: "700", color: "#12D576" }}>Create ERC20 Token</h2>
        <h4 style={{ color:`${theme==='Dark' ? 'white':'black'}`, fontWeight: "400" }}>Get started by connecting your wallet</h4>

        <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}> <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
          <label htmlFor="html" style={{ color: "#949494", padding: "3px 2%" }}>Simple, fast and convenient token generator</label>
        </div>
        <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>
          <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
          <label htmlFor="css" style={{ color: "#949494", padding: "3px 2%" }}>No smart contract programming required</label><br />
        </div>
        <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>
          <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
          <label htmlFor="javascript" style={{ color: "#949494", padding: "3px 2%" }}>Get 100% ownership of generated tokens</label>
        </div>
        <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>
          <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
          <label htmlFor="scss" style={{ color: "#949494", padding: "3px 2%" }}>Set custom token name, symbol and initial supply</label>
        </div>
        <div style={{ padding: "2%", display: "flex", flexDirection: "row" }}>
          <svg width="25" height="30" style={{ fill: "#12D576" }} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="tokenIcon"><path d="M 12,1.1992188 C 6.0447983,1.1992188 1.1992188,6.0447983 1.1992188,12 1.1992188,17.955156 6.0447935,22.800781 12,22.800781 17.95516,22.800781 22.800781,17.95516 22.800781,12 22.800781,6.0447935 17.955156,1.1992188 12,1.1992188 Z m 0,1.6015624 c 5.090444,0 9.199219,4.1087253 9.199219,9.1992188 0,5.09044 -4.108779,9.199219 -9.199219,9.199219 C 6.9095065,21.199219 2.8007812,17.090444 2.8007812,12 2.8007812,6.9095017 6.9095017,2.8007813 12,2.8007812 Z"></path><path d="m 12,5.1992188 c -3.7460617,0 -6.8007813,3.0547195 -6.8007812,6.8007812 0,3.746053 3.0547179,6.800781 6.8007812,6.800781 3.746055,0 6.800781,-3.054726 6.800781,-6.800781 0,-3.7460633 -3.054728,-6.8007812 -6.800781,-6.8007812 z m 0,1.6015624 c 2.881347,0 5.199219,2.3178621 5.199219,5.1992188 0,2.881345 -2.317874,5.199219 -5.199219,5.199219 C 9.1186433,17.199219 6.8007812,14.881347 6.8007812,12 6.8007812,9.1186417 9.1186417,6.8007813 12,6.8007812 Z"></path></svg>
          <label htmlFor="sass" style={{ color: "#949494", padding: "3px 2%" }}>Sign and create with your own wallet</label>
        </div>

      </div>
      <div className="tokenSettings">
        <h2 style={{ color:`${theme==='Dark' ? 'white':'black'}` }}>Token Settings</h2>

        <div style={{color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>
          Token Name*
          <input
           
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{
              height: "48px",
              color:`${theme==='Dark' ? 'white':'black'}`,
              width: "100%",
              backgroundColor: "#2D5C8F1C",
              border: "1px solid #464646",
              borderRadius: "7px",
            }}
          ></input>
        </div>
        <div style={{ color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>
          Token Symbol*
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            style={{
              height: "48px",
              color:`${theme==='Dark' ? 'white':'black'}`,
              width: "100%",
              backgroundColor: "#2D5C8F1C",
              border: "1px solid #464646",
              borderRadius: "7px",
            }}
          ></input>
        </div>
        <div style={{ color:`${theme==='Dark' ? 'white':'black'}`, display: "flex", flexDirection: "row" }}>
          <div style={{ padding: "2%" }}>
            {" "}
            MAX Token Supply*
            <input
              type="number"
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              style={{
                height: "48px",
                color:`${theme==='Dark' ? 'white':'black'}`,
                width: "100%",
                backgroundColor: "#2D5C8F1C",
                border: "1px solid #464646",
                borderRadius: "7px",
              }}
            ></input>
          </div>
          <div hidden style={{ padding: "2%" }}>
            {" "}
            Decimals (0-18)*
            <input
              hidden
              type="number"
              readOnly
              value="18"
              // value={decimals}
              // pattern="\d+"
              // onChange={(e) => setDecimals(e.target.value)}
              style={{
                height: "48px",
                color:`${theme==='Dark' ? 'white':'black'}`,
                width: "100%",
                backgroundColor: "#2D5C8F1C",
                border: "1px solid #464646",
                borderRadius: "7px",
              }}
            ></input>
          </div>
        </div>


        <h2 style={{ color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>Security Token</h2>

        <div style={{ color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>
          <label>
            <input
              type="checkbox"
              checked={isdocument}
              onChange={handleDocumentChange}
            />
            Has Document
          </label>
        </div>
        {isdocument && (<>
            <input type="text" placeholder="Token Documents Link" value={documents} onChange={(e) => setdocuments(e.target.value)}
            style={{ width: "100%", height: "50px", borderRadius: "5px", border: "1px solid #949494", backgroundColor: "#f4f4f4" }} />
          </>)}

        <div style={{color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>
          <label>
            <input
              type="checkbox"
              checked={isforce}
              onChange={handleForceChange}
            />
            Can be Force Transferred
          </label>
        </div>

        <div style={{ color:`${theme==='Dark' ? 'white':'black'}`, padding: "2%" }}>
          <label>
            <input
              type="checkbox"
              checked={iskyc}
              onChange={handleKYCChange}
            />
            KYC Mandatory
          </label>
        </div>
          <div style={{padding: "2%"}}></div>
        <Button type="button" className="createtoken-button" onClick={() => {createToken()}}>
          Create Token
        </Button>


      </div>

      <Modal
        {...{
          show: modal,
          onHide: () => setModal(false)
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
            <h5 style={{ fontWeight: "700", paddingTop: "10px" }}>Token created successfully, view it on the block explorer</h5>
          </div>
          <div style={{ padding: "3% 8%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <div >Token Address</div>
              <div style={{ paddingTop: "30%" }}>Token Link</div>
            </div>
            <div>
              <div style={{ color: "#2D5C8F" }}>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#2882E3" />
                </svg>{newToken}</div>
              <div style={{ color: "#2D5C8F", paddingTop: "10%" }}>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#2882E3" />
                </svg>{newToken}</div>
            </div>
          </div>
          <div style={{ textAlign: "center", paddingTop: "5%" }}>
            <Button onClick={() => { setModal(false) }} style={{ backgroundColor: "black",color:"white", padding: "7px 40px", fontSize: "20px", fontWeight: "450" }} variant="">
              <img src={Fox} alt="" />
              Add to Metamask</Button>
            <br />

            <Link to={`/managetoken/${newToken}`} >
              <Button style={{ marginTop: "3%", backgroundColor: "#12D576", border: "#12D576", padding: "7px 40px", fontSize: "20px", fontWeight: "450" }} variant="">
                Go to Manage Token</Button>
            </Link>

            <div style={{ color: "#12D576", fontWeight: "600", fontSize: "17px", cursor: "pointer", paddingTop: "3%" }}>Go back to create token</div>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Token
