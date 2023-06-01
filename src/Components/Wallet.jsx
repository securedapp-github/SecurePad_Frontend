import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../Style/wallet.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FACTORYABI from "../ABI/FactoryABI.json";
import { ethers } from "ethers";
import TOKENABI from "../ABI/TokenABI.json";
import SALEABI from "../ABI/SaleABI.json";
import LOCKABI from "../ABI/LockABI.json";

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

function Wallet() {
  const CONTRACT_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;

  const { address } = useAccount();
  const [activeButton, setActiveButton] = useState(null);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const { data: signerData } = useSigner();

  const [tokenArray, settokenArray] = useState([]);
  const [salesArray, setsalesArray] = useState([]);
  const [locksArray, setlocksArray] = useState([]);

  const FactoryContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: signerData,
  });

  const getToken = async () => {
    let tokens = await FactoryContract.GetUserTokens(address);
    console.log("Toekns : ", tokens);
    let tokendetails;
    if (tokens.length > 0) {
      settokenArray([]);
      for (let i = 0; i < 1; i++) {
        //   for (let i = 0; i < tokens.length; i++) {
        let TOKENCONTRACT = new ethers.Contract(
          tokens[i],
          TOKENABI,
          signerData
        );
        let name = await TOKENCONTRACT.name();
        let symbol = await TOKENCONTRACT.symbol();
        console.log(12);
        tokendetails = { 'id': i + 1, 'token': tokens[i], 'name': name, 'symbol': symbol };
        console.log(15);
        settokenArray(prevItems => [...prevItems, tokendetails]);
        console.log(17);
        console.log(tokendetails);
        console.log(tokenArray);
        console.log(23);
      }
    }
  }

  const getSales = async () => {
    let sales = await FactoryContract.GetUserSales(address);
    console.log("Sales : ", sales);
    let saledetails;
    if (sales.length > 0) {
      setsalesArray([]);
      for (let i = 0; i < 1; i++) {
        //   for (let i = 0; i < sales.length; i++) {
        let SALESCONTRACT = new ethers.Contract(
          sales[i],
          SALEABI,
          signerData
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
        
        console.log(12);
        saledetails = { 'id': i + 1, 'sale': sales[i], 'token': tokens, 'payment': pay, 'status':status };
        console.log(15);
        setsalesArray(prevItems => [...prevItems, saledetails]);
        console.log(17);
        console.log(saledetails);
        console.log(salesArray);
        console.log(23);
      }
    }
  }

  const getLocks = async () => {
    let locks = await FactoryContract.GetUserLocks(address);
    console.log("Locks : ", locks);
    let lockdetails;
    if (locks.length > 0) {
      setlocksArray([]);
      for (let i = 0; i < 1; i++) {
        //   for (let i = 0; i < locks.length; i++) {
        let LOCKCONTRACT = new ethers.Contract(
          locks[i],
          LOCKABI,
          signerData
        );
        let token = await LOCKCONTRACT.token();
        let duration = await LOCKCONTRACT.lockDuration();
        let amount = await LOCKCONTRACT.amount();
        amount = amount.toNumber();

        let TOKENCONTRACT = new ethers.Contract(
          token,
          TOKENABI,
          signerData
        );
        let name = await TOKENCONTRACT.name();  

        console.log(12);
        lockdetails = { 'id': i + 1, 'lock': locks[i], 'token': token, 'name': name, 'locktill': duration, 'amount': amount };
        console.log(15);
        setlocksArray(prevItems => [...prevItems, lockdetails]);
        console.log(17);
        console.log(lockdetails);
        console.log(locksArray);
        console.log(23);
      }
    }
  }

  const gALL = async () => {
    console.log("token fetching...");
    await getToken();
    await getSales();
    await getLocks();
  };

  useEffect(() => {
    if (!signerData || !address) return;
    gALL();
  }, [address, signerData]);


  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    if (buttonIndex === 0) {
      setTableHeaders(["ID", "Token Address", "NAME", "SYMBOL", "MANAGE"]);
    } else if (buttonIndex === 1) {
      setTableHeaders(["ID", "Sale Address", "Token Address", "Payment", "Token	Status", "	MANAGE"]);
    } else if (buttonIndex === 2) {
      // setTableHeaders(["ID","LOCK ADDRESS","TOKEN	","LOCK TILL","	AMOUNT","	MANAGE"]);
      setTableHeaders(["ID", "Lock Address","Token Address", "TOKEN NAME", "LOCK TILL","AMOUNT", "MANAGE"]);
    }
  };

  return (
    <div>

      {address ? (
        <section className="walletSection">
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
                <tr>
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
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.token}</td>
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
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.sale}</td>
                      <td>{row.token}</td>
                      <td>{row.payment}</td>
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
                      <td>{row.lock}</td>
                      <td>{row.token}</td>
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
