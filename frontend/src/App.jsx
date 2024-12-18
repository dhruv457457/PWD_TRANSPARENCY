import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { connectWallet } from './utils/walletUtils'; // Import the connectWallet function

const App = () => {
  return (
    <Router>
      <Navbar connectWallet={connectWallet} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
