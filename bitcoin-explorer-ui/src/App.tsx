import BestTen from './components/BestTen';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tbd from './components/tbd';


const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("bestTen");

  const renderComponent = (component: string) => {
    switch (component) {
      case "bestTen":
        return <BestTen />;
      case "TBD":
        return <Tbd />;
      default:
        return <Tbd />;
    }
  };


  return (
    <div className="container-fluid p-0 h-100">
      {/* header */}
      <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
        <div className="d-flex align-items-center " >
          <i className="d-flex bi bi-currency-bitcoin text-white fs-2"></i>
          <h3 className="px-3 text-white pt-1">Bitcoin Explorer</h3>
        </div>
      </header>
      {/* main */}
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <ul className="nav flex-column">
              <li className="nav-item" onClick={() => setActiveComponent("bestTen")}>
                <a className="nav-link d-flex align-items-center gap-2" href="/#">
                  <i className="bi bi-hand-thumbs-up"></i>
                  Best 10 Blocks
                </a>
              </li>
              <li className="nav-item" onClick={() => setActiveComponent("TBD")}>
                <a className="nav-link d-flex align-items-center gap-2" href="/#">
                  <i className="bi bi-ban"></i>
                  TBD
                </a>
              </li>
              <li className="nav-item" onClick={() => setActiveComponent("TBD")}>
                <a className="nav-link d-flex align-items-center gap-2" href="/#">
                  <i className="bi bi-ban"></i>
                  TBD
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {renderComponent(activeComponent)}
          </div>
        </div>
      </div >
      {/* footer */}
      <footer className="bg-dark text-white text-center p-3 fixed-bottom">
        <p className="mb-0">© 2024 Northeastern INFO7500.</p>
      </footer>
    </div>
  );
};
export default App;

