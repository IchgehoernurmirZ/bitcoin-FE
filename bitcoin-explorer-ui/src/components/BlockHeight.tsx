// src/components/BlockHeight.tsx

import React, { useEffect, useState } from 'react';

const BlockHeight: React.FC = () => {
  const [blockHeights, setBlockHeights] = useState<number[]>([]);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const dummyData = [699990, 699991, 699992, 699993, 699994, 699995, 699996, 699997, 699998, 699999];
        setBlockHeights(dummyData);

        // const response = await fetch('http://backend-endpoint/block-height');
        // const data = await response.json();
        // setBlockHeight(data.blockHeight); // Assuming the response contains { blockHeight: number }
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    fetchBlockHeight();
  }, []);

  return (
    <div className="container">
      <h1>Bitcoin Block Height</h1>
      {blockHeights !== null ? (
        <p className="height">{blockHeights}</p>
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
