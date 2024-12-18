// src/utils/walletUtils.js

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected Wallet", accounts[0]);
        alert(`Wallet is connected: ${accounts[0]}`);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };
  