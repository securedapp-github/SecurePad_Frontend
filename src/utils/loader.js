import React from 'react';
import { Dna } from 'react-loader-spinner'

const Loader = () => {
    
  return (
    <div style={{
        position: "fixed",
        width: "200px",
        height: "200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999"
      }}>
        <Dna
          visible={true}
          height="100%"
          width="100%"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
  );
};

export default Loader;
