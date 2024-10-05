import React, { useEffect, useState } from 'react';
import './BlockHeight.css';

const BlockHeight: React.FC = () => {
  const [blockHeights, setBlockHeights] = useState<number[]>([]);

  useEffect(() => {
    const fetchBlockHeights = async () => {
      try {
        const response = await fetch('http://backend-endpoint/block-heights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requestType: 'getBlockHeights',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBlockHeights(data);
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
