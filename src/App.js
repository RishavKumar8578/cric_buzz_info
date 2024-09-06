import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home'
import LiveMatch from './component/Live'
import History from './component/History'
import PointTable from './component/PointTable';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-match" element={<LiveMatch />} />
          <Route path="/history" element={<History />} />
          <Route path="/point-table" element={<PointTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
