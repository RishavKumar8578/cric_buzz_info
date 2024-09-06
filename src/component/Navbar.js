import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          Cric_Buzz_Informer
        </div>
        <nav className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/live-match">Live</Link>
          <Link to="/history">History</Link>
          <Link to="/point-table">Point Table</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
