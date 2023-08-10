import React, { useState } from "react";
import { Button, Form, Spinner, Row, Col } from 'react-bootstrap';
import UniswapLP from './UniswapLP';

function AddLiquidity(props) {
  const { theme } = props;
  const [token1Address, setToken1Address] = useState("");
  const [token2Address, setToken2Address] = useState("");
  const [token1Amount, setToken1Amount] = useState("");
  const [token2Amount, setToken2Amount] = useState("");
  const [uniswapLpEnabled, setUniswapLpEnabled] = useState(false);
  const [formEnabled, setFormEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!token1Address || !token2Address || !token1Amount || !token2Amount) {
      alert("All fields are required!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => { // simulate API call
      setUniswapLpEnabled(true);
      setFormEnabled(false);
      setIsLoading(false);
    }, 2000);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    paddingTop: '30px',
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'transparent',  // Set to transparent
    maxWidth: '600px',
    margin: '0 auto',
    color: 'white'  // Set text color to white
  };

  const labelStyle = {
    display: 'block',
    margin: '8px ',
    fontWeight: 'bold',
    color: 'white'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    appearance: 'textfield'
  };

  const buttonStyle = {
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer'
  };

  const spinnerStyle = {
    marginRight: '10px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  const noSpinnerStyle = {
    appearance: 'textfield',
    MozAppearance: 'textfield'
  };

  const tokenHeaderStyle = {
    marginTop: '20px',
    marginLeft: '-15px'
  };

  return (
    <div style={containerStyle}>
      {!uniswapLpEnabled && <h2>Add Liquidity to DEX</h2>}

      {formEnabled && (
        <Form onSubmit={handleFormSubmit}>
          
          <h4 style={tokenHeaderStyle}>Token 1</h4>
          <Row>
            <Col md={8}>
              <Form.Group controlId="token1Address">
                <Form.Label style={labelStyle}>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={token1Address}
                  onChange={(e) => setToken1Address(e.target.value)}
                  placeholder="Enter Token 1 Address"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="token1Amount">
                <Form.Label style={labelStyle}>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={token1Amount}
                  onChange={(e) => setToken1Amount(e.target.value)}
                  placeholder="Enter Token 1 Amount"
                  required
                  style={{ ...inputStyle, ...noSpinnerStyle }}
                />
              </Form.Group>
            </Col>
          </Row>

          <h4 style={tokenHeaderStyle}>Token 2</h4>
          <Row>
            <Col md={8}>
              <Form.Group controlId="token2Address">
                <Form.Label style={labelStyle}>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={token2Address}
                  onChange={(e) => setToken2Address(e.target.value)}
                  placeholder="Enter Token 2 Address"
                  required
                  style={inputStyle}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="token2Amount">
                <Form.Label style={labelStyle}>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={token2Amount}
                  onChange={(e) => setToken2Amount(e.target.value)}
                  placeholder="Enter Token 2 Amount"
                  required
                  style={{ ...inputStyle, ...noSpinnerStyle }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button 
            variant="primary" 
            type="submit" 
            disabled={isLoading} 
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {isLoading ? <Spinner animation="border" size="sm" style={spinnerStyle} /> : 'Initiate Uniswap LP v2'}
          </Button>
        </Form>
      )}
      {uniswapLpEnabled && (
        <UniswapLP
          token1Address={token1Address}
          token2Address={token2Address}
          token1Amount={token1Amount}
          token2Amount={token2Amount}
        />
      )}
    </div>
  );
}

export default AddLiquidity;