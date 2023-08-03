import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const factoryArtifacts = require('@uniswap/v2-core/build/UniswapV2Factory.json');
const routerArtifacts = require('@uniswap/v2-periphery/build/UniswapV2Router02.json');
const pairArtifacts = require('@uniswap/v2-core/build/UniswapV2Pair.json');

function UniswapLP(props) {
  const { token1Address, token2Address, token1Amount, token2Amount } = props;
  const [pairAddress, setPairAddress] = useState("");
  const [reserves, setReserves] = useState("");

  useEffect(() => {
    async function addLiquidity() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const factoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
      const factory = new ethers.Contract(factoryAddress, factoryArtifacts.abi, signer);

      const pairAddress = await factory.getPair(token1Address, token2Address);
      setPairAddress(pairAddress);

      const pair = new ethers.Contract(pairAddress, pairArtifacts.abi, signer);

      let reserves = await pair.getReserves();
      setReserves(reserves);

      const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
      const router = new ethers.Contract(routerAddress, routerArtifacts.abi, signer);

      const token1Contract = new ethers.Contract(token1Address, ["function approve(address spender, uint256 amount) public returns (bool)"], signer);
      await token1Contract.approve(router.address, token1Amount);

      const token2Contract = new ethers.Contract(token2Address, ["function approve(address spender, uint256 amount) public returns (bool)"], signer);
      await token2Contract.approve(router.address, token2Amount);

      const deadline = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes from the current Unix time

      // Add liquidity to the pool
      await router.addLiquidity(
        token1Address,
        token2Address,
        token1Amount,
        token2Amount,
        0,
        0,
        signer.getAddress(),
        deadline
      );

      reserves = await pair.getReserves();
      setReserves(reserves);
    }

    addLiquidity();
  }, [token1Address, token2Address, token1Amount, token2Amount]);

  return (
    <>
      <h2>Uniswap LP</h2>
      <p>Token 1 Address: {token1Address}</p>
      <p>Token 2 Address: {token2Address}</p>
      <p>Token 1 Amount: {token1Amount}</p>
      <p>Token 2 Amount: {token2Amount}</p>
      <p>Pair Address: {pairAddress}</p>
      <p>Reserves: {reserves.toString()}</p>
    </>
  );
}

export default UniswapLP;
