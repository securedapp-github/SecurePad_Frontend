import factoryAbi from "./factoryAbi.json";
import { ethers } from "ethers";
import Web3 from "web3";
import tokenabi from "./tokenabi.json";

import {
  useAccount,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useSigner,  // For write logic 2
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";





// const getDataOfToken = async ({ address }) => {
//   console.log("bc started");
//   let provider =
//     window.ethereum != null
//       ? new ethers.providers.Web3Provider(window.ethereum)
//       : ethers.providers.getDefaultProvider();
//   console.log("provider", provider);
//   console.log("provder done");
//   const signer = provider.getSigner();
//   console.log("signer", signer);
//   console.log("contract", address);
//   console.log(tokenabi);
//   const Role = new ethers.Contract(
//     address,
//     tokenabi,
//     signer
//   );
//   console.log("ROLE", Role);
//   const res = await Role.name();
//   console.log(res);

//   console.log("registered");
//   window.alert("token got ");
//   return res;
// };

export { GetToken };
