import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import UniswapLP from './UniswapLP'; // Import the UniswapLP component (Adjust the path according to your folder structure)

import '../Style/dexLaunch.css';

function DexLaunch(props) {
  const { theme } = props;
  const [token1Address, setToken1Address] = useState("");
  const [token2Address, setToken2Address] = useState("");
  const [token1Amount, setToken1Amount] = useState("");
  const [token2Amount, setToken2Amount] = useState("");

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the next component passing token1Address, token2Address, token1Amount, and token2Amount
    // For example, you can use props.history.push or any navigation method here
    // to navigate to the UniswapLP component and pass the data as props.
    // props.history.push({
    //   pathname: "/uniswap-lp",
    //   state: {
    //     token1Address,
    //     token2Address,
    //     token1Amount,
    //     token2Amount,
    //   },
    // });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="token1Address">
          <Form.Label>Token 1 Address</Form.Label>
          <Form.Control
            type="text"
            value={token1Address}
            onChange={(e) => setToken1Address(e.target.value)}
            placeholder="Enter Token 1 Address"
          />
        </Form.Group>

        <Form.Group controlId="token2Address">
          <Form.Label>Token 2 Address</Form.Label>
          <Form.Control
            type="text"
            value={token2Address}
            onChange={(e) => setToken2Address(e.target.value)}
            placeholder="Enter Token 2 Address"
          />
        </Form.Group>

        <Form.Group controlId="token1Amount">
          <Form.Label>Token 1 Amount</Form.Label>
          <Form.Control
            type="number"
            value={token1Amount}
            onChange={(e) => setToken1Amount(e.target.value)}
            placeholder="Enter Token 1 Amount"
          />
        </Form.Group>

        <Form.Group controlId="token2Amount">
          <Form.Label>Token 2 Amount</Form.Label>
          <Form.Control
            type="number"
            value={token2Amount}
            onChange={(e) => setToken2Amount(e.target.value)}
            placeholder="Enter Token 2 Amount"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Initiate Uniswap LP v2
        </Button>
      </Form>
      <UniswapLP
        token1Address={token1Address}
        token2Address={token2Address}
        token1Amount={token1Amount}
        token2Amount={token2Amount}
      />
    </>
  );
}

export default DexLaunch;
