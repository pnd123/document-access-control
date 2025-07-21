import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import AccessList from "./components/AccessList";
import Working from "./components/Working";
import ActivityLog from './components/ActivityLog';
import Upload from "./abi/Upload.json";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//import { useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {

  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");
  const [loadingContract, setLoadingContract] = useState(true);
  const [showMetaMaskWarning, setShowMetaMaskWarning] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const connectToContract = async () => {
      setLoadingContract(true);

      if (typeof window.ethereum === "undefined") {
        console.warn("MetaMask not detected");
        setShowMetaMaskWarning(true);
        setContract(null);
        setProvider(null);
        setLoadingContract(false);
        return;
      }

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setProvider(provider);

        const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        console.log("Loaded Contract Address from .env:", contractAddress);
        const abi = Upload.abi;
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setContract(contractInstance);
      } catch (err) {
        console.error("❌ Error initializing contract:", err);
        setShowMetaMaskWarning(true);
      } finally {
        setLoadingContract(false);
      }
    };

    connectToContract();
  }, []);

  return (
    <>
      {showMetaMaskWarning && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.3)", // ⬅ blur + transparency
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: "2px solid #00ffcc",
            borderRadius: "16px",
            padding: "32px",
            width: "90%",
            maxWidth: "600px",
            boxShadow: "0 0 25px rgba(0,255,255,0.2)",
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif"
          }}>
            <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>🚫 MetaMask Not Detected</h1>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>
              MetaMask is required to interact with decentralized features.<br />
              Please install it to continue.
            </p>
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#00ffcc",
                color: "#000",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px"
              }}
            >
              Install MetaMask
            </a>
            <br />
            <button
              onClick={() => setShowMetaMaskWarning(false)}
              style={{
                marginTop: "20px",
                background: "none",
                border: "none",
                color: "#00ffcc",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "underline"
              }}
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}
      
     <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Firstpage />} />
        <Route
          path="/Secondpage"
          element={<Secondpage contract={contract} provider={provider} account={account} />}
        />
        <Route
          path="/accesslist"
          element={loadingContract ? <div>🔄 Connecting to contract...</div> : <AccessList contract={contract} />}
        />
        <Route path="/Working" element={<Working />} />
        <Route path="/ActivityLog" element={<ActivityLog />} />
      </Routes>
       </AnimatePresence>
    </>
  );
};

export default App;
