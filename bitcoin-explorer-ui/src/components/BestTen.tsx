import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BlockData {
  hash: string;
  height: number;
  id: number;
  merkle_root: string;
  num_transactions: number;
  size: number;
  timestamp: number;
}

const BlockInfo: React.FC = () => {
  const [blockData, setBlockData] = useState<BlockData[]>([]);
  useEffect(() => {
    const fetchBlockInfos = async () => {
      try {
        const response = await fetch('https://43.153.58.6:5000/api/get_data', {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBlockData(data.data);
      } catch (error) {
        console.error('Error fetching block heights:', error);
      }
    };

    fetchBlockInfos();
  }, []);

  return (
    <div className="container text-center">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="text-center col-4">Best 10 Blocks</h1>
        <button onClick={() => window.location.reload()} className="btn btn-primary mb-2 mb-md-0">
          <i className="bi bi-arrow-clockwise"></i>
          Refresh
        </button>
      </div>
      <div className="row justify-content-md-center">
        <div className="table-responsive small">
          {
            blockData.length > 0 ? (
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Height</th>
                    <th>Size (bytes)</th>
                    <th>Number of Transactions</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {blockData.map((block) => (
                    <tr key={block.id}>
                      <td>{block.id}</td>
                      <td>{block.height}</td>
                      <td>{block.size}</td>
                      <td>{block.num_transactions}</td>
                      <td>{new Date(block.timestamp * 1000).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">Loading block data...</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default BlockInfo;
