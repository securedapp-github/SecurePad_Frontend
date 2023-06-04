import React from 'react';

const Checkbox = () => {
  return (
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        style={{ marginRight: '8px', appearance: 'none' }}
      />
      <span
        style={{
          width: '24px',
          height: '24px',
          border: '2px solid #333',
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '12px', height: '12px', visibility: 'hidden' }}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      Checkbox Label
    </label>
  );
};

export default Checkbox;
