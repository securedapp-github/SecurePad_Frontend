import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { formatAddress } from "../utils/address";
import Loader from "utils/loader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { chainFactory } from "../utils/chainInfo";

import { useAccount, useContract, useSigner, useProvider } from "wagmi";

import TOKENABI from "../ABI/TokenABI.json";
import FACTORYABI from "../ABI/FactoryABI.json";
const CreateStaking = (props) => {
  const { TOKEN } = useParams();
  // const FACTORY_ADDRESS = process.env.REACT_APP_FACTORY_CONTRACT;
  const [CONTRACT_ADDRESS, SET_CONTRACT_ADDRESS] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const DB_LINK = process.env.REACT_APP_DB;
  const { address } = useAccount();

  const [confirmpage, setconfirmpage] = useState(false);
  const { data: signerData } = useSigner();
  const provider = useProvider();
  const [modal3, setModal3] = useState(false);
  const [tokenName, settokenName] = useState(false);
  const [tokenSymbol, settokenSymbol] = useState(false);
  const [tokenSupply, settokenSupply] = useState(0);
  const [sale, setsale] = useState("");

  const [custompayment, setcustompayment] = useState(false);
  const [payment, setpayment] = useState("");
  const [price, setprice] = useState(0);
  const [soft, setsoft] = useState(0);
  const [hard, sethard] = useState(0);
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0);
  const [startdate, setstartdate] = useState("");
  const [start, setstart] = useState(0);
  const [duration, setduration] = useState(0);
  const [cliff, setcliff] = useState(0);
  const [releasemonths, setreleasemonths] = useState(0);
  const [owner, setowner] = useState("");

  const changeChain = async () => {
    const { chainId } = await provider.getNetwork();
    SET_CONTRACT_ADDRESS(chainFactory(chainId));
  };

  const TokenContract = useContract({
    addressOrName: TOKEN,
    contractInterface: TOKENABI,
    signerOrProvider: provider,
  });

  const FactoryContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: FACTORYABI,
    signerOrProvider: provider,
  });

  const copyAddress = (copytext) => {
    navigator.clipboard.writeText(copytext);
    toast("Address Copied");
  };

  const updateDB = async (salenew, txnhash) => {
    const { chainId } = await provider.getNetwork();

    fetch(DB_LINK + "updateActivity", {
      method: "POST",
      body: JSON.stringify({
        user: address,
        event: 3,
        eventname: tokenName,
        hash: txnhash,
        data: "",
        chain: chainId,
        address: salenew,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {})
      .then((data) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const readTokenDetails = async () => {
    try {
      setLoading(true);
      let [name, symbol, supply] = await TokenContract.getTokenInfo();

      settokenName(name);
      settokenSymbol(symbol);
      supply = ethers.utils.formatEther(supply.toString());
      settokenSupply(supply);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error", e);
    }
  };

  useEffect(() => {
    changeChain();
    console.log("refresh");
  }, [provider, address]);

  useEffect(() => {
    if (!signerData) return;
    readTokenDetails();
  }, [signerData, TOKEN]);

  useEffect(() => {}, [duration, hard]);

  const launchSale = async () => {
    try {
      setLoading(true);

      let FactoryContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        FACTORYABI,
        signerData
      );

      console.log(
        TOKEN,
        payment,
        price * 10000,
        start,
        duration,
        releasemonths,
        cliff,
        [
          ethers.utils.parseUnits(min.toString(), "ether"),
          ethers.utils.parseUnits(max.toString(), "ether"),
          ethers.utils.parseUnits(soft.toString(), "ether"),
          ethers.utils.parseUnits(hard.toString(), "ether"),
        ]
      );
      const tx = await FactoryContract.launchSecureTokenSale(
        TOKEN,
        payment,
        price * 10000,
        start,
        duration,
        releasemonths,
        cliff,
        [
          ethers.utils.parseUnits(min.toString(), "ether"),
          ethers.utils.parseUnits(max.toString(), "ether"),
          ethers.utils.parseUnits(soft.toString(), "ether"),
          ethers.utils.parseUnits(hard.toString(), "ether"),
        ]
      );
      const receipt = await tx.wait();
      console.log("Sale Created = ", receipt.logs[0].address);
      setsale(receipt.logs[0].address);

      if (receipt.status == 1) {
        await updateDB(receipt.logs[0].address, receipt.transactionHash);

        setModal3(true);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error", e);
    }
  };

  function handleContinue(event) {
    setconfirmpage(true);
  }

  const handlePaymentChange = (event) => {
    if (event.target.value === "option2") {
      setpayment("");
      setcustompayment(true);
    } else {
      setcustompayment(false);
      setpayment("0x0000000000000000000000000000000000000000");
    }
  };

  const blurryDivStyle = {
    filter: loading ? "blur(5px)" : "blur(0px)",
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="dark"
        pauseOnHover
      />

      {loading && <Loader />}

      {confirmpage && (
        <div
          style={{
            ...blurryDivStyle,
            padding: "2%",
            margin: "0 10vw 0 20vw",
          }}
        >
          <div
            className="saleFirstRow"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ paddingTop: "0.1vw" }}>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                style={{
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  width="35"
                  style={{ fill: "#12D576" }}
                  viewBox="0 0 448 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </Button>
            </div>

            <div style={{ paddingLeft: "20px", width: "75%" }}>
              <div
                style={{
                  padding: "0",
                  margin: "0",
                  fontSize: "35px",
                  fontWeight: "700",
                  color: "#12D576",
                }}
              >
                Create Staking
              </div>
              <div style={{ color: "#cccccc" }}>
                Step 2 of 2: Confirm Staking Details
              </div>

              <div
                style={{
                  paddingTop: "7%",
                  fontSize: "20px",
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>Token Name</div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Reward Token
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Reward Rate
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Hardcap
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Min Stake
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Stake Start Time
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Stake End Time
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Claim Start
                  </div>
                  <div style={{ whiteSpace: "nowrap", paddingTop: "1vw" }}>
                    Unstake Start
                  </div>
                  
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      paddingTop: "1vw",
                      paddingBottom: "10%",
                    }}
                  >
                    Stake Owner{" "}
                  </div>
                </div>
                <div>
                  <div style={{ color: "#525252" }}>{tokenName}</div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {tokenSymbol}
                  </div>
                  <div
                    onClick={() => {
                      copyAddress(TOKEN);
                    }}
                    style={{ paddingTop: "1vw" }}
                  >
                    <svg
                      width="20"
                      height="22"
                      style={{ paddingRight: "2px" }}
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z"
                        fill="#12D576"
                      />
                    </svg>{" "}
                    {formatAddress(TOKEN)}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {tokenSupply}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {hard}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {price}
                  </div>
                  <div
                    onClick={() => {
                      copyAddress(payment);
                    }}
                    style={{ color: "#525252", paddingTop: "1vw" }}
                  >
                    {formatAddress(payment)}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {soft}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {hard}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {min}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {max}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {startdate}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {duration}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {cliff}
                  </div>
                  <div style={{ color: "#525252", paddingTop: "1vw" }}>
                    {releasemonths}
                  </div>
                  <div
                    onClick={() => {
                      copyAddress(owner);
                    }}
                    style={{ color: "#525252", paddingTop: "1vw" }}
                  >
                    {formatAddress(owner)}
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  launchSale();
                }}
                style={{
                  backgroundColor: "#12D576",
                  border: "#12D576",
                  marginTop: "2vw",
                  padding: "7px 25px",
                  fontSize: "20px",
                  fontWeight: "450",
                }}
                variant=""
              >
                Create Sale
              </Button>
              <Modal
                {...{
                  show: modal3,
                  onHide: () => setModal3(false),
                }}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div
                    style={{
                      paddingTop: "8%",
                      textAlign: "center",
                      paddingLeft: "9%",
                      paddingRight: "9%",
                    }}
                  >
                    <img src={Vector} alt="not found" />
                    <h5 style={{ fontWeight: "700", paddingTop: "10px" }}>
                      Token Sale Created Successfully
                    </h5>
                  </div>
                  <div
                    style={{
                      padding: "3% 7%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div>Token Sale Address</div>
                      {/* <div style={{ paddingTop: "1vw" }}>Shareable Sale Link</div> */}
                    </div>
                    <div>
                      <div
                        onClick={() => {
                          copyAddress(sale);
                        }}
                        style={{ color: "#2D5C8F" }}
                      >
                        <svg
                          width="17"
                          height="20"
                          viewBox="0 0 17 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z"
                            fill="#2882E3"
                          />
                        </svg>
                        {formatAddress(sale)}
                      </div>
                      {/* <div style={{ color: "#2D5C8F", paddingTop: "1vw" }}>
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V5C1.69779e-06 4.71667 0.0960018 4.479 0.288002 4.287C0.480002 4.095 0.717335 3.99934 1 4C1.28333 4 1.521 4.096 1.713 4.288C1.905 4.48 2.00067 4.71734 2 5V18H12C12.2833 18 12.521 18.096 12.713 18.288C12.905 18.48 13.0007 18.7173 13 19C13 19.2833 12.904 19.521 12.712 19.713C12.52 19.905 12.2827 20.0007 12 20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z" fill="#2882E3" />
                    </svg>{sale}</div> */}
                    </div>
                  </div>
                  <div style={{ textAlign: "center", paddingTop: "5%" }}>
                    <Link to={`/managesale/${sale}`}>
                      <Button
                        style={{
                          marginTop: "3%",
                          backgroundColor: "#12D576",
                          border: "#12D576",
                          padding: "7px 40px",
                          fontSize: "20px",
                          fontWeight: "450",
                        }}
                        variant=""
                      >
                        Go to Manage Token Sale
                      </Button>
                    </Link>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      )}

      {!confirmpage && (
        <div
          style={{
            ...blurryDivStyle,
            padding: "2%",
            margin: "0 10vw 0 20vw",
          }}
        >
          <div
            className="saleFirstRow"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ paddingTop: "0.1vw" }}>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                style={{
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  width="35"
                  style={{ fill: "#12D576" }}
                  viewBox="0 0 448 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </Button>
            </div>

            <div style={{ paddingLeft: "20px", width: "65%" }}>
              <div
                style={{
                  padding: "0",
                  margin: "0",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#12D576",
                }}
              >
                Create Staking: ({tokenSymbol}) {tokenName}{" "}
              </div>
              <div style={{ color: "#cccccc" }}>
                Step 1 of 2: Configure your token sale
              </div>
              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Select payment token
              </div>

              <div style={{ paddingTop: "1%" }}>
                <input
                  type="radio"
                  id="option1"
                  name="myRadio"
                  value="option1"
                  onChange={handlePaymentChange}
                />
                <label for="option1" style={{ color: "#cccccc" }}>
                  MATIC
                </label>
                <br />
                <input
                  type="radio"
                  id="option2"
                  name="myRadio"
                  value="option2"
                  style={{ padding: "4%" }}
                  onChange={handlePaymentChange}
                />
                <label for="option2" style={{ color: "#cccccc" }}>
                  Custom token
                </label>
              </div>

              {custompayment && (
                <>
                  <div style={{ paddingTop: "20px", color: "#cccccc" }}>
                    Custom Payment Token Address
                  </div>
                  <input
                    type="text"
                    placeholder="Token Address"
                    value={payment}
                    onChange={(e) => setpayment(e.target.value)}
                    style={{
                      padding: "15px",
                      width: "100%",
                      height: "50px",
                      borderRadius: "5px",
                      border: "1px solid #949494",
                      backgroundColor: "#f4f4f4",
                    }}
                  />
                </>
              )}

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Reward Token
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}>
                Token Reward{" "}
              </div>
              <input
                type="text"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Reward Rate
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}>
                in 10^2{" "}
              </div>
              <input
                type="number"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Hardcap
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}> </div>
              <input
                type="number"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Min stake
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}> </div>
              <input
                type="number"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />

              <div
              style={{
                color: "#12D576",
                fontSize: "24px",
                fontWeight: "550",
                paddingTop: "6%",
              }}
            >
              Set Stake Timings
            </div>

            <div style={{ paddingTop: "20px", color: "#cccccc" }}>
              Stake Start Time
            </div>
            <input
              type="datetime-local"
              placeholder="yyyy-mm-dd hh:mm:ss"
              value={startdate}
              onChange={(e) => {
                setstartdate(e.target.value);
                const dateObject = new Date(e.target.value);
                setstart(Math.floor(dateObject.getTime() / 1000));
              }}
              style={{
                padding: "15px",
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #949494",
                backgroundColor: "#f4f4f4",
              }}
            />

            <div style={{ paddingTop: "20px", color: "#cccccc" }}>
              Stake End Time
            </div>
            <input
              type="datetime-local"
              placeholder="e.g. 10"
              value={duration}
              onChange={(e) => setduration(e.target.value)}
              style={{
                padding: "15px",
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #949494",
                backgroundColor: "#f4f4f4",
              }}
            />

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Claim Start
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}> </div>
              <input
                type="number"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Unstake Start
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}> </div>
              <input
                type="number"
                placeholder="e.g. 0.1 if 1 Sale Token = 0.1 Payment Token: Min 0.0001"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />



              {/* <div style={{ paddingTop: "1%" }}>
        <input type="radio" id="option1" name="myRadio" value="option1" />
        <label for="option1" style={{ color: "#cccccc" }}>Every address can invest</label>
        <br />
        <input type="radio" id="option2" name="myRadio" value="option2" style={{ padding: "4%" }} />
        <label for="option2" style={{ color: "#cccccc" }}>Only whitelisted adresses can invest</label>
      </div> */}

              <div
                style={{
                  color: "#12D576",
                  fontSize: "24px",
                  fontWeight: "550",
                  paddingTop: "6%",
                }}
              >
                Set Stake Owner
              </div>
              <div style={{ paddingTop: "20px", color: "#cccccc" }}>
                Stake owner address
              </div>
              <input
                type="text"
                placeholder=""
                value={owner}
                onChange={(e) => setowner(e.target.value)}
                style={{
                  padding: "15px",
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #949494",
                  backgroundColor: "#f4f4f4",
                }}
              />
              <Button
                onClick={() => {
                  handleContinue();
                }}
                style={{
                  backgroundColor: "#12D576",
                  border: "#12D576",
                  marginTop: "2vw",
                  padding: "7px 25px",
                  fontSize: "20px",
                  fontWeight: "450",
                }}
                variant=""
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateStaking;
