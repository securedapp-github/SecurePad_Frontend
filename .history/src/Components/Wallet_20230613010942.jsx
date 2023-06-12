import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../Style/wallet.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FACTORYABI from "../ABI/FactoryABI.json";
import { ethers } from "ethers";
import TOKENABI from "../ABI/TokenABI.json";
import SALEABI from "../ABI/SaleABI.json";
import LOCKABI from "../ABI/LockABI.json";
import { formatAddress } from '../utils/address';
import Loader from 'utils/loader';

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

function Wallet(props) {
  const {theme}=props
  const CONTRACT_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;

  const { address } = useAccount();
  const [activeButton, setActiveButton] = useState(null);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const { data: signerData } = useSigner();
  const provider = useProvider()
  const [loading, setLoading] = useState(false);

  const [tokenArray, settokenArray] = useState([]);
  const [salesArray, setsalesArray] = useState([]);
  const [locksArray, setlocksArray] = useState([]);

  const FactoryContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: provider
  });

  const getToken = async () => {
    try{
      setLoading(true);

    let tokens = await FactoryContract.GetUserTokens(address);
    console.log("Toekns : ", tokens);
    let tokendetails;
    if (tokens.length > 0) {
        for (let i = 0; i < tokens.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        let TOKENCONTRACT = new ethers.Contract(
          tokens[i],
          TOKENABI,
          provider
        );
        let [name,symbol,] = await TOKENCONTRACT.getTokenInfo()

        tokendetails = { 'id': i + 1, 'token': tokens[i], 'name': name, 'symbol': symbol };
        
        if(i == 0){
          settokenArray([]);
        }
        settokenArray(prevItems => [...prevItems, tokendetails]);
      }
    }
    setLoading(false);

  } catch(e){
    console.log(e);
    setLoading(false);

  }
  }

  const getSales = async () => {
    try{
    setLoading(true);

    let sales = await FactoryContract.GetUserSales(address);
    console.log("Sales : ", sales);
    let saledetails;
    if (sales.length > 0) {
      setsalesArray([]);
          for (let i = 0; i < sales.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); 

        let SALESCONTRACT = new ethers.Contract(
          sales[i],
          SALEABI,
          provider
        );
        let [tokens, pay, , , , , , saleStartTime, saleEndTime, , , , ] 
        = await SALESCONTRACT.getSaleDetails();
          let status;
        if(saleStartTime > Date.now()){
          status = "Upcoming"
        }else if(saleEndTime < Date.now()){
          status = "Completed"
        }else{
          status = "Ongoing"
        }
        
        saledetails = { 'id': i + 1, 'sale': sales[i], 'token': tokens, 'payment': pay, 'status':status };
        if(i == 0){
          setsalesArray([]);
        }
        setsalesArray(prevItems => [...prevItems, saledetails]);
      }
    }
    setLoading(false);

  } catch(e){
    console.log(e);
    setLoading(false);

  }
  }

  const getLocks = async () => {
    try{
    setLoading(true);
    let locks = await FactoryContract.GetUserLocks(address);
    console.log("Locks : ", locks);
    let lockdetails;
    if (locks.length > 0) {
      setlocksArray([]);
          for (let i = 0; i < locks.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); 

        let LOCKCONTRACT = new ethers.Contract(
          locks[i],
          LOCKABI,
          provider
        );
        let token = await LOCKCONTRACT.token();
        let duration = await LOCKCONTRACT.lockDuration();
        let amount = await LOCKCONTRACT.amount();
        amount = amount.toNumber();

        let TOKENCONTRACT = new ethers.Contract(
          token,
          TOKENABI,
          provider
        );
        let name = await TOKENCONTRACT.name();  

        lockdetails = { 'id': i + 1, 'lock': locks[i], 'token': token, 'name': name, 'locktill': duration, 'amount': amount };
        if(i == 0){
          setlocksArray([]);
        }
        setlocksArray(prevItems => [...prevItems, lockdetails]);
        console.log(lockdetails);
        console.log(locksArray);
      }
    }
    setLoading(false);
  } catch(e){
    console.log(e);
    setLoading(false);

  }
  }

  const gALL = async () => {
    console.log("fetching...");
    await getToken();
  };

  useEffect(() => {
    console.log('i fire once');
    gALL();
  }, []);

  const blurryDivStyle = {
    filter: loading? 'blur(5px)':'blur(0px)'
  };

  const handleButtonClick = async (buttonIndex) => {
    setActiveButton(buttonIndex);
    if (buttonIndex === 0) {
      if(tokenArray.length == 0){
      await getToken();
      }
      setTableHeaders(["ID", "Token Address", "NAME", "SYMBOL", "MANAGE"]);
    } else if (buttonIndex === 1) {
      if(salesArray.length == 0){
      await getSales();
      }
      setTableHeaders(["ID", "Sale Address", "Token Address", "Payment", "Token	Status", "	MANAGE"]);
    } else if (buttonIndex === 2) {
      if(locksArray.length == 0){
      await getLocks();
      }
      setTableHeaders(["ID", "Lock Address","Token Address", "TOKEN NAME", "LOCK TILL","AMOUNT", "MANAGE"]);
    }
  };

  return (
    <div>

    {loading && ( <Loader/>)}

      {address ? (
        <section className="walletSection" style={{...blurryDivStyle}}>
          <div className="textContainer">
            <h2 className="headText">User Profile</h2>
          </div>
          {/* <div className="tokenTable">
         <table className="table">
           <thead className="tableHead">
             <div className="divi">
               <th className="thead">Name</th>
               <th className="thead">Email</th>
               <th className="thead">Wallet</th>
             </div>
           </thead>
           <tbody></tbody>
         </table>
       </div> */}
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th scope="col" className="custom-th">
                    Name
                  </th>
                  <th scope="col" className="custom-th">
                    Email
                  </th>
                  <th scope="col" className="custom-th">
                    Wallet
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{color:`${theme==='Dark' ? 'white':'black'}`}}>
                  <td>Admin User</td>
                  <td>AdminUser@securedapp.in</td>
                  <td>{address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dynamicTable">
            <div className="button-div">
              <button
                onClick={() => handleButtonClick(0)}
                style={{
                  backgroundColor: activeButton === 0 ? "#12D576" : "transparent",
                  color: activeButton === 0 ? "black" : "gray",
                  borderRadius: "10px",
                  marginRight: "5px",
                  fontSize: "18px",
                  padding: "5px 13px",
                }}
              >
                Get Tokens
              </button>
              <button
                onClick={() => handleButtonClick(1)}
                style={{
                  backgroundColor: activeButton === 1 ? "#12D576" : "transparent",
                  color: activeButton === 1 ? "black" : "gray",
                  borderRadius: "10px",
                  marginRight: "5px",

                  fontSize: "18px",
                  padding: "5px 13px",
                }}
              >
                Get Sales
              </button>
              <button
                onClick={() => handleButtonClick(2)}
                style={{
                  backgroundColor: activeButton === 2 ? "#12D576" : "transparent",
                  color: activeButton === 2 ? "black" : "gray",
                  borderRadius: "10px",
                  marginRight: "5px",
                  padding: "5px 13px",
                  fontSize: "18px",
                }}
              >
                Get Locks
              </button>
            </div>

            {tableHeaders.length > 0 && (
              <table className="table_Data_dy">
                <thead>
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th className="custom-th" key={index}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>

                  {activeButton == 0 && tokenArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td>{row.id}</td>
                      <td>{formatAddress(row.token)}</td>
                      <td>{row.name}</td>
                      <td>{row.symbol}</td>
                      <td>
                        <Link to={`/managetoken/${row.token}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {activeButton == 1 && salesArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td>{row.id}</td>
                      <td>{formatAddress(row.sale)}</td>
                      <td>{formatAddress(row.token)}</td>
                      <td>{formatAddress(row.payment)}</td>
                      <td>{row.status}</td>
                      <td>
                        <Link to={`/managesale/${row.sale}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                      </td>
                    </tr>
                  ))}

                  {activeButton == 2 && locksArray.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{formatAddress(row.lock)}</td>
                      <td>{formatAddress(row.token)}</td>
                      <td>{row.name}</td>
                      <td>{row.duration}</td>
                      <td>{row.amount}</td>
                      <td>
                        <Link to={`/managelock/${row.lock}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            )}
          </div>
        </section>
      ) : (
        <div className="wallet" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "10%", marginBottom: "auto" }}>
          <h1 style={{ color: "#12D576", fontWeight: "700", fontSize: "40px" }}>No Wallet Connected</h1>
          <h2 style={{ color: "#FFFFFF", fontWeight: "300", fontSize: "30px" }}>Get started by connecting your wallet</h2>
          <button style={{ padding: "2% 8%", marginTop: "6%", backgroundColor: "#12D576", borderRadius: "25px", fontSize: "20px", fontWeight: "400" }}>
            <ConnectButton showBalance={false} />
          </button>
        </div>
      )}
    </div>

  )
}

export default Wallet
