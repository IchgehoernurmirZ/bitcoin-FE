import React, { useEffect, useState } from 'react';
import './BlockHeight.css';

const BlockHeight: React.FC = () => {
  const [blockHeights, setBlockHeights] = useState<number[]>([]);

  useEffect(() => {
    const fetchBlockHeights = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const dummyData = [699990, 699991, 699992, 699993, 699994, 699995, 699996, 699997, 699998, 699999];
        setBlockHeights(dummyData);

        // In future, replace with:
        // const response = await fetch('http://your-backend-endpoint/block-heights');
        // const data = await response.json();
        // setBlockHeights(data.blockHeights);

      } catch (error) {
        console.error('Error fetching block heights:', error);
      }
    };

    fetchBlockHeights();
  }, []);

  return (
    <div className="container">
      <h1>Bitcoin Block Heights</h1>
      {blockHeights.length > 0 ? (
        <ul className="block-list">
          {blockHeights.map((blockHeight, index) => (
            <li key={index} className="block-item">
              Block {index + 1}: {blockHeight}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading block heights...</p>
      )}
      <button onClick={() => window.location.reload()} className="button">
        Refresh
      </button>
    </div>
  );
};

export default BlockHeight;
