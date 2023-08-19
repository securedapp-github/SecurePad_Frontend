import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../Style/uniswapLP.css';
import { addLiquidity } from '../utils/addLiquidity';
import ToasterUi from 'toaster-ui';

function UniswapLP(props) {
  const toaster = new ToasterUi();
  const [transactionHash, setTransactionHash] = useState(null);
  const [status, setStatus] = useState('idle');
  
  const { token1Address, token2Address, token1Amount, token2Amount } = props;

  const addLiquidityToPool = async () => {
    setStatus('pending');
    toaster.addToast("Adding liquidity...", "info", { styles: { background: 'grey' } }); // Grey color toast for loading

    try {
      const receipt = await addLiquidity(token1Address, token2Address, token1Amount, token2Amount);
      setTransactionHash(receipt.transactionHash);
      setStatus('completed');
      toaster.addToast("Liquidity added successfully!", "success", { styles: { background: 'green' } }); // Green color toast for success
    } catch (error) {
      setStatus('error');
      toaster.addToast("Error adding liquidity. Check the console for details.", "error", { styles: { background: 'red' } }); // Red color toast for error
    }
  }

  const labelStyle = {
    display: 'block',
    margin: '8px 0',
    fontWeight: 'bold',
    color: 'white'
  };

  const hashStyle = {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    color: 'white'
  };

  const valueStyle = {
    margin: '8px 0',
    color: 'white'
  };

  const marginStyle = {
    margin: '20px'
  }

  return (
    <>
      <h2>Uniswap LP</h2>

      <h4 style={marginStyle}>Token 1</h4>
      <Row>
        <Col md={8}>
          <Form.Label style={labelStyle}>Address</Form.Label>
          <p style={valueStyle}>{token1Address}</p>
        </Col>
        <Row>
          <Col md={5}>
            <Form.Label style={labelStyle}>Amount</Form.Label>
            <p style={valueStyle}>{token1Amount}</p>
          </Col>
        </Row>
      </Row>

      <h4>Token 2</h4>
      <Row>
        <Col md={8}>
          <Form.Label style={labelStyle}>Address</Form.Label>
          <p style={valueStyle}>{token2Address}</p>
        </Col>
        <Row>
          <Col md={4}>
            <Form.Label style={labelStyle}>Amount</Form.Label>
            <p style={valueStyle}>{token2Amount}</p>
          </Col>
        </Row>
      </Row>

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
          <h4>Transaction completed</h4>
          <p>Transaction Hash: {transactionHash.substring(0, 20)}...</p>
        </div>
      )}

      {status === 'error' && (
        <div>
          <h4>Error adding liquidity.</h4>
          <p>Check the console for details.</p>
        </div>
      )}
    </>
  );
}

export default UniswapLP;
