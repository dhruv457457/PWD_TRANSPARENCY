import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ connectWallet }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">
          TenderDekho
        </Link>
      </h1>

      <nav className="flex gap-6 text-lg">
        <Link to="/dashboard" className="hover:text-yellow-300 transition duration-300">
          Dashboard
        </Link>
        <Link to="/profile" className="hover:text-yellow-300 transition duration-300">
          Profile
        </Link>
        <Link to="/Bidform" className="hover:text-yellow-300 transition duration-300">
          Bidform
        </Link>
      </nav>

      <button
        onClick={connectWallet}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition duration-300"
      >
        Connect Wallet
      </button>
    </header>
  );
};

export default Navbar;
