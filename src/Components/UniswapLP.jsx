import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { addLiquidity } from '../utils/addLiquidity'; // Import the addLiquidity function
import { Button } from 'react-bootstrap';
import '../Style/uniswapLP.css';

function UniswapLP(props) {
  const [transactionHash, setTransactionHash] = useState(null);
  const [status, setStatus] = useState('idle');
  const { token1Address, token2Address, token1Amount, token2Amount } = props;

  const addLiquidityToPool = async () => {
    setStatus('pending');
    try {
      const receipt = await addLiquidity(token1Address, token2Address, token1Amount, token2Amount);
      setTransactionHash(receipt.transactionHash);
      setStatus('completed');
    } catch (error) {
      console.error("Error adding liquidity:", error);
      setStatus('error');
    }
  }

  return (
    <>
      <h2>Uniswap LP</h2>
      <p>Token 1: {token1Address} Amount: {token1Amount}</p>
      <p>Token 2: {token2Address} Amount: {token2Amount}</p>

      {status === 'idle' && (
        <Button variant="primary" onClick={addLiquidityToPool}>
          Add Liquidity
        </Button>
      )}

      {status === 'pending' && (
        <div>Adding liquidity...</div>
      )}

      {status === 'completed' && transactionHash && (
        <div>
          <h2>Transaction completed</h2>
          <p>Transaction Hash: {transactionHash}</p>
        </div>
      )}

      {status === 'error' && (
        <div>
          <h2>Error adding liquidity.</h2>
          <p>Check the console for details.</p>
        </div>
      )}
    </>
  );
}

export default UniswapLP;
