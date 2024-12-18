import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to TenderDekho</h1>
      <p className="text-xl text-center mb-6">
        Decentralized Transparent Tender Transaction Platform
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition duration-300"
      >
        View Tenders
      </button>
    </div>
  );
};

export default Home;
