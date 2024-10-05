// src/components/BlockHeight.tsx

import React, { useEffect, useState } from 'react';

const BlockHeight: React.FC = () => {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        const response = await fetch('http://backend-endpoint/block-height');
        const data = await response.json();
        setBlockHeight(data.blockHeight); // Assuming the response contains { blockHeight: number }
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    fetchBlockHeight();
  }, []);

  return (
    <div className="container">
      <h1>Bitcoin Block Height</h1>
      {blockHeight !== null ? (
        <p className="height">{blockHeight}</p>
      ) : (
        <p>Loading block height...</p>
      )}
      <button onClick={() => window.location.reload()} className="button">
        Refresh
      </button>
    </div>
  );
};

export default BlockHeight;
