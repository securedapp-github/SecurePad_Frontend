// UniswapLP.js

import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { ethers } from "ethers";

const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // Address of WETH on the Ethereum mainnet
const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Address of Uniswap V2 Router on the Ethereum mainnet
const SLIPPAGE_TOLERANCE = 0.005; // 0.5% slippage tolerance

function UniswapLP(props) {
  const { token1Address, token2Address, token1Amount, token2Amount } = props;
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const provideLiquidity = async () => {
    try {
      setLoading(true);

      if (window.ethereum) {
        // Request access to the user's Ethereum wallet
        await window.ethereum.enable();

        // Initialize ethers provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Initialize Uniswap router contract
        const uniswapRouter = new ethers.Contract(UNISWAP_ROUTER_ADDRESS, [
          "function addLiquidityETH(address,uint256,uint256,uint256,address,uint256) payable external",
        ], signer);

        // Fetch the token contract instances
        const token1 = new ethers.Contract(token1Address, ["function approve(address,uint256)"], signer);
        const token2 = new ethers.Contract(token2Address, ["function approve(address,uint256)"], signer);

        // Approve Uniswap router to spend tokens on behalf of the user
        await token1.approve(UNISWAP_ROUTER_ADDRESS, ethers.constants.MaxUint256);
        await token2.approve(UNISWAP_ROUTER_ADDRESS, ethers.constants.MaxUint256);

        // Calculate amounts in wei
        const token1AmountWei = ethers.utils.parseUnits(token1Amount, "wei");
        const token2AmountWei = ethers.utils.parseUnits(token2Amount, "wei");

        // Add liquidity to Uniswap using ETH
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
        const tx = await uniswapRouter.addLiquidityETH(
          token1Address,
          token1AmountWei,
          0, // slippage tolerance for the second token (0 for ETH)
          0, // slippage tolerance for liquidity
          props.address, // recipient of LP tokens (owner's address)
          deadline,
          { value: token2AmountWei }
        );

        setTransactionHash(tx.hash);

        // Wait for the transaction to be confirmed
        await tx.wait();

        setLoading(false);
      } else {
        console.error("Ethereum provider not found. Please install MetaMask.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error providing liquidity:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Form>
        {/* Display token1Address, token2Address, token1Amount, and token2Amount in the form if needed */}
        {/* ... */}

        <Button variant="primary" type="button" onClick={provideLiquidity} disabled={loading}>
          {loading ? "Providing Liquidity..." : "Provide Liquidity on Uniswap"}
        </Button>
      </Form>

      {transactionHash && (
        <div>
          Transaction Hash: {transactionHash}
        </div>
      )}
    </div>
  );
}

export default UniswapLP;
