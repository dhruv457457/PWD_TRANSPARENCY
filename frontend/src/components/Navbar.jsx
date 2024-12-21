import React from 'react';
import {Link} from 'react-router-dom';
import '../utils/walletUtils';
const Navbar = ({connectWallet}) => {
  return(
<header  className='bg-gradient-to-r bg-blue-600 to-indigo-700 text-white p-3 flex justify-between items-center  shadow-lg rounded-3xl m-5  '>
  <h1 className='text-2xl font-bold' >
    <Link to='./' className='hover:text-yellow-300 transition duration-300 ' >TenderDekho</Link></h1>
     <nav className='flex gap-6 text-lg'>
      <Link  to='./' className='hover:text-yellow-300 transition duration-300' >
       Home
      </Link  >  
      <Link to='./' className='hover:text-yellow-300 transition duration-300'>
       Bid
      </Link> 
      <Link to='./' className='hover:text-yellow-300 transition duration-300'>
       Contracts
      </Link> 
      <Link to='./' className='hover:text-yellow-300 transition duration-300'>
      Goverment Transactions
      </Link>
      <Link to='./' className='hover:text-yellow-300 transition duration-300'>
       UserProfile
      </Link> 
      </nav>
      <button onClick={connectWallet} className='p-2 rounded-lg bg-purple-600 font-bold w-40 text-lg hover:text-yellow-300 transtion duration-300'>
      Connect WAllet
      </button>
</header> 
    
    );
};

export default Navbar;