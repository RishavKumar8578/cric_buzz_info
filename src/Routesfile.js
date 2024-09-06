import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './component/Home';
import Live from './component/Live'
import History from './component/History';
import Point_Table from './component/Point_Table';

function Routesfile() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Live">Live</Link>
          </li>
          <li>
            <Link to="/History">History</Link>
          </li>
          <li>
            <Link to="/Point_Table">Point_Table</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" tiltle="Home" element={<Home />} />
        <Route path="/Live" tiltle="Live" element={<Live />} />
        <Route path="/History" tiltle="History" element={<History />} />
        <Route path="/Point_Table" tiltle="Point_Table" element={<Point_Table />} />
      </Routes>
    </Router>
  );
}

export default Routesfile;

