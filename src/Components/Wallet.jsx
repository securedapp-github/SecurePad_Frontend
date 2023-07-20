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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  useAccount,
  useContract,
  useProvider
} from "wagmi";

function Wallet(props) {
  const { theme } = props
  const CONTRACT_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;
  const DB_LINK = process.env.REACT_APP_DB;

  const { address } = useAccount();
  const [activeButton, setActiveButton] = useState(null);
  const [tableHeaders, setTableHeaders] = useState([]);
  const provider = useProvider()
  const [loading, setLoading] = useState(false);

  const [historyArray, sethistoryArray] = useState([]);
  const [tokenArray, settokenArray] = useState([]);
  const [salesArray, setsalesArray] = useState([]);
  const [locksArray, setlocksArray] = useState([]);
  const [mail, setmail] = useState();
  const [otp, setotp] = useState();
  const [verifynow, setverifynow] = useState(false);
  const [vmail, setvmail] = useState("");

  const FactoryContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: provider
  });

  const getHistory = async () => {
    setLoading(true);
    fetch(DB_LINK + "getActivity?user=" + address)
      .then((res) => res.json())
      .then((data) => setHistory(data))

    fetch(DB_LINK + "getMail?wallet=" + address)
      .then((res) => res.json())
      .then((data) => { if(data.length > 0){ setvmail(data[0].email); }})
  }

  const setHistory = async (data) => {
    try {
      let historydetails = [];
      if (data.length > 0) {

        for (let i = 0; i < data.length; i++) {
          let event;
          if (i == 0) {
            sethistoryArray([]);
          }

          if (data[i].event_type == 1) {
            event = "Sale Purchase";
          } else if (data[i].event_type == 12) {
            event = "Token Claimed";
          } else if (data[i].event_type == 2) {
            event = "Token Creation";
          } else if (data[i].event_type == 21) {
            event = "Mint Token";
          } else if (data[i].event_type == 22) {
            event = "Burn Token";
          } else if (data[i].event_type == 2) {
            event = "Token Creation";
          } else if (data[i].event_type == 2) {
            event = "Token Creation";
          } else if (data[i].event_type == 3) {
            event = "Sale Creation";
          } else if (data[i].event_type == 4) {
            event = "Lock Creation";
          } else if (data[i].event_type == 5) {
            event = "Airdrop Token";
          } else if (data[i].event_type == 6) {
            event = "Staking Pool Creation";
          }

          data[i].data = (data[i].data == "") ? "-" : data[i].data;

          historydetails[i] = { 'id': i + 1, 'activity': event, 'entity': data[i].event_name, 'data': data[i].data, 'time': data[i].created_on };
          console.log(historydetails[i]);
          sethistoryArray(prevItems => [...prevItems, historydetails[i]]);
        }
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const getToken = async () => {
    try {
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
          let [name, symbol,] = await TOKENCONTRACT.getTokenInfo()

          tokendetails = { 'id': i + 1, 'token': tokens[i], 'name': name, 'symbol': symbol };

          if (i == 0) {
            settokenArray([]);
          }
          settokenArray(prevItems => [...prevItems, tokendetails]);
        }
      }
      setLoading(false);

    } catch (e) {
      console.log(e);
      setLoading(false);

    }
  }

  const getSales = async () => {
    try {
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
          let [tokens, pay, , , , , , saleStartTime, saleEndTime, , , ,]
            = await SALESCONTRACT.getSaleDetails();
          let status;
          if (saleStartTime * 1000 > Date.now()) {
            status = "Upcoming"
          } else if (saleEndTime * 1000 < Date.now()) {
            status = "Completed"
          } else {
            status = "Ongoing"
          }

          saledetails = { 'id': i + 1, 'sale': sales[i], 'token': tokens, 'payment': pay, 'status': status };
          if (i == 0) {
            setsalesArray([]);
          }
          setsalesArray(prevItems => [...prevItems, saledetails]);
        }
      }
      setLoading(false);

    } catch (e) {
      console.log(e);
      setLoading(false);

    }
  }

  const getLocks = async () => {
    try {
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
          await new Promise(resolve => setTimeout(resolve, 1000));

          let duration = await LOCKCONTRACT.lockCliff();
          await new Promise(resolve => setTimeout(resolve, 1000));

          let amount = await LOCKCONTRACT.amount();
          await new Promise(resolve => setTimeout(resolve, 1000));

          amount = ethers.utils.formatEther(amount.toString());

          let TOKENCONTRACT = new ethers.Contract(
            token,
            TOKENABI,
            provider
          );
          let name = await TOKENCONTRACT.name();

          lockdetails = { 'id': i + 1, 'lock': locks[i], 'token': token, 'name': name, 'locktill': duration, 'amount': amount };
          if (i == 0) {
            setlocksArray([]);
          }
          setlocksArray(prevItems => [...prevItems, lockdetails]);
          console.log(lockdetails);
          console.log(locksArray);
        }
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);

    }
  }

  const gALL = async () => {
    console.log("fetching...");
    setvmail("");
    await getHistory();
  };

  useEffect(() => {
    if (typeof (address) != 'undefined') gALL();
  }, [address]);

  const blurryDivStyle = {
    filter: loading ? 'blur(5px)' : 'blur(0px)'
  };

  const handleButtonClick = async (buttonIndex) => {
    setActiveButton(buttonIndex);
    if (buttonIndex === 3) {
      if (historyArray.length == 0) {
        await getHistory();
      }
      setTableHeaders(["ID", "Activity", "Entity Name", "Details", "Time"]);
    } else if (buttonIndex === 0) {
      if (tokenArray.length == 0) {
        await getToken();
      }
      setTableHeaders(["ID", "Token Address", "NAME", "SYMBOL", "MANAGE"]);
    } else if (buttonIndex === 1) {
      if (salesArray.length == 0) {
        await getSales();
      }
      setTableHeaders(["ID", "Sale Address", "Token Address", "Payment", "Sale Status", "	MANAGE"]);
    } else if (buttonIndex === 2) {
      if (locksArray.length == 0) {
        await getLocks();
      }
      setTableHeaders(["ID", "Lock Address", "Token Address", "TOKEN NAME", "LOCK TILL", "AMOUNT", "MANAGE"]);
    }
  };

  const copyAddress = (copytext) => {
    navigator.clipboard.writeText(copytext);
    toast('Address Copied');
  };

  const sendOTP = async () => {
    setLoading(true);
    fetch(DB_LINK + 'sendOtp', {
        method: 'POST',
        body: JSON.stringify({
            wallet: address,
            mail: mail
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => { })
        .then((data) => {
            toast.success('OTP Send Successfully');
            setLoading(false);
            // setTimeout(function () { window.location.reload(true); }, 5000);
        })
        .catch((err) => {
            console.log(err.message);
            setLoading(false);
            toast("Error in OTP");
        });

  }

  const verifyOTP = async () => {
    setLoading(true);
    fetch(DB_LINK + 'verifyOtp', {
        method: 'POST',
        body: JSON.stringify({
            wallet: address,
            otp: otp,
            mail: mail
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((res) => { })
        .then((data) => {
            toast.success('Mail Verified Successfully');
            setLoading(false);
            setTimeout(function () { window.location.reload(true); }, 5000);
        })
        .catch((err) => {
            console.log(err.message);
            setLoading(false);
            toast("Error in Verification");
        });

  }

  let style_obj = {
    borderRadius: "10px",
    marginRight: "5px",
    fontSize: "18px",
    padding: "5px 13px",
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />

      {loading && (<Loader />)}

      {address ? (
        <section className="walletSection" style={{ ...blurryDivStyle }}>
          <div className="textContainer">
            <h2 className="headText" >User Profile</h2>
          </div>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th scope="col" className="custom-th">
                    <div className="inner">Wallet</div>
                  </th>
                  <th scope="col" className="custom-th">
                    <div className="inner-m">Email</div>
                  </th>
                  <th scope="col" className="custom-th">
                    <div className="inner-l">KYC</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: `${theme === 'Dark' ? 'white' : 'black'}` }}>
                  <td onClick={() => { copyAddress(address) }} >{formatAddress(address)}</td>
                { (vmail == "")?(
                  <td >< button className="N_button" onClick={() => { setverifynow(!verifynow); }}>Verify</button></td>
                  ):(<td >{vmail} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24px" height="24px">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg></td>)}
                  <td>< button className="N_button" onClick={() => { toast('Coming Soom'); }}>Initiate</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          { verifynow && (<div style={{ marginLeft: "20%" }}>
            <input
              type="text"
              placeholder="Your e-mail"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              style={{
                color: "white",
                backgroundColor: "#2D5C8F1C",
                border: "1px solid #464646",
                borderRadius: "7px",
              }}
            ></input>
            <button onClick={() => { sendOTP(); }} className="N_button2">Send OTP</button>  
            <input
              type="number"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              style={{
                color: "white",
                backgroundColor: "#2D5C8F1C",
                border: "1px solid #464646",
                borderRadius: "7px",
              }}
            ></input> 
            <button onClick={() => { verifyOTP(); }} className="N_button2">Verify OTP</button>
          </div>) }


          <div className="dynamicTable" style={{ overflow: 'auto', padding: '31px' }}>
            <div className="button-div">
              <button className='wallet_btn'
                onClick={() => handleButtonClick(3)}
                style={{
                  backgroundColor: activeButton === 3 ? "#009c4f" : "",
                  color: activeButton === 3 ? "white" : "#a8a8a8",
                  borderColor: activeButton === 3 ? "#8080802e" : "#01a158",
                  boxShadow: activeButton === 3 ? '0px 0px 20px 8px #009c4fab' : '',
                  ...style_obj
                }}
              >
                Get History
              </button>
              <button className='wallet_btn'
                onClick={() => handleButtonClick(0)}
                style={{
                  backgroundColor: activeButton === 0 ? "#12D576" : "",
                  color: activeButton === 0 ? "white" : "",
                  borderColor: activeButton === 0 ? "#8080802e" : "",
                  boxShadow: activeButton === 0 ? '0px 0px 20px 8px #009c4fab' : '',
                  ...style_obj
                }}
              >
                Get Tokens
              </button>
              <button className='wallet_btn'
                onClick={() => handleButtonClick(1)}
                style={{
                  backgroundColor: activeButton === 1 ? "#12D576" : "",
                  color: activeButton === 1 ? "white" : "",
                  borderColor: activeButton === 1 ? "#8080802e" : "",
                  boxShadow: activeButton === 1 ? '0px 0px 20px 8px #009c4fab' : '',
                  ...style_obj
                }}
              >
                Get Sales
              </button>
              <button className='wallet_btn'
                onClick={() => handleButtonClick(2)}
                style={{
                  backgroundColor: activeButton === 2 ? "#12D576" : "",
                  color: activeButton === 2 ? "white" : "",
                  borderColor: activeButton === 2 ? "#8080802e" : "",
                  boxShadow: activeButton === 2 ? '0px 0px 20px 8px #009c4fab' : '',
                  ...style_obj
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
                        <div className={`${index === 0 ? 'inners2' : index === tableHeaders.length - 1 ? 'inner-ls2' : 'inner-ms2'}`}>
                          {index > 0 ? <span></span> : null}
                          {index > 0 ? <span></span> : null}
                          {header}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>

                  {activeButton == 0 && tokenArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td><div className="td_data">{row.id}</div></td>
                      <td onClick={() => { copyAddress(row.token) }}><div className="td_data">{formatAddress(row.token)}<span></span></div></td>
                      <td><div className="td_data">{row.name}<span></span></div></td>
                      <td><div className="td_data">{row.symbol}<span></span></div></td>
                      <td><div className="td_data">
                        <Link to={`/managetoken/${row.token}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                        <span></span></div></td>
                    </tr>
                  ))}
                  {activeButton == 1 && salesArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td><div className="td_data">{row.id}<span></span></div></td>
                      <td onClick={() => { copyAddress(row.sale) }}><div className="td_data">{formatAddress(row.sale)}<span></span></div></td>
                      <td onClick={() => { copyAddress(row.token) }}><div className="td_data">{formatAddress(row.token)}<span></span></div></td>
                      <td onClick={() => { copyAddress(row.payment) }}><div className="td_data">{formatAddress(row.payment)}<span></span></div></td>
                      <td><div className="td_data">{row.status}<span></span></div></td>
                      <td><div className="td_data">
                        <Link to={`/managesale/${row.sale}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                        <span></span></div></td>
                    </tr>
                  ))}

                  {activeButton == 2 && locksArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td><div className="td_data">{row.id}<span></span></div></td>
                      <td onClick={() => { copyAddress(row.lock) }}><div className="td_data">{formatAddress(row.lock)}<span></span></div></td>
                      <td onClick={() => { copyAddress(row.token) }}><div className="td_data">{formatAddress(row.token)}<span></span></div></td>
                      <td><div className="td_data">{row.name}<span></span></div></td>
                      <td><div className="td_data">{row.duration}<span></span></div></td>
                      <td><div className="td_data">{row.amount}<span></span></div></td>
                      <td><div className="td_data">
                        <Link to={`/managelock/${row.lock}`} >
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qJSL7Xd7OV7FOJNW9-HBjjWNDEAq5OW6A&usqp=CAU" alt="Google Logo" width="20px" height="20px" />
                        </Link>
                        <span></span></div></td>
                    </tr>
                  ))}

                  {activeButton == 3 && historyArray.map((row) => (
                    <tr key={row.id} style={{ color: 'white' }}>
                      <td><div className="td_data">{row.id}<span></span></div></td>
                      <td><div className="td_data">{row.activity}<span></span></div></td>
                      <td><div className="td_data">{row.entity}<span></span></div></td>
                      <td><div className="td_data">{row.data}<span></span></div></td>

                      <td><div className="td_data">{row.time}<span></span></div></td>
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
