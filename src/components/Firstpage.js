import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";
import "./Secondpage";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import myvideo from "./videos/network-12716.mp4";
import img1 from "./images/first-image-min.png";
import img2 from "./images/second-image-min.png";
import img3 from "./images/third-image-min.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Firstpage() {
  const [imageSrc, setImageSrc] = useState(img3);

  const handleHeadingClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <>
      {/* ✅ Navbar stays outside motion div so it doesn't animate on every page change */}
      <div className="navbar-section">
        <Navbar />
      </div>

      {/* ✅ Animated wrapper for the rest of the page content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero">
          <div className="video-background">
            <video autoPlay muted loop>
              <source src={myvideo} type="video/mp4" />
            </video>
            <div className="hero-content">
              <div className="hero-heading-box">
                <h1 className="hero-heading">
                  Document Access Control using Blockchain
                </h1>
              </div>
              <h1 className="hero-subheading">Your Data, Your Control</h1>
              <p className="hero__description">
                Join the movement towards a more decentralized web, where users own and control their data,
                and where censorship and surveillance are a thing of the past.
              </p>
              <Link to="/secondpage" className="hero-button">
                <span className="hero-button-text">Click here to Upload the file</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animate section */}
        <div className="animate-section">
          <h2 className="animate-heading">What is VShare?</h2>
          <p className="animate-para">
            VShare is a decentralized Document Access Control Blockchain system that uses blockchain technology
            to ensure secure and transparent data storage and retrieval. Users have complete control over their data
            and can share it with others using advanced encryption and access control mechanisms...
          </p>
        </div>

        {/* Product Section */}
        <div className="product-section">
          <h2 className="product-head">Benefits of Blockchain-based File Storage</h2>
          <div className="product-content">
            <div className="product-left">
              <div className="Para-1">
                <h3 className="para1-heading" onClick={() => handleHeadingClick(img2)}>Immutability</h3>
                <p className="para1-detail">
                  The blockchain provides a tamper-proof and immutable record of the file...
                </p>
              </div>
              <hr className="my-hr" />
              <div className="Para-2">
                <h3 className="para2-heading" onClick={() => handleHeadingClick(img3)}>Decentralization</h3>
                <p className="para2-detail">
                  The file is stored on a decentralized network of computers...
                </p>
              </div>
              <hr className="my-hr" />
              <div className="Para-3">
                <h3 className="para3-heading" onClick={() => handleHeadingClick(img1)}>Transparency</h3>
                <p className="para3-detail">
                  All transactions on the blockchain are transparent and publicly visible...
                </p>
              </div>
            </div>
            <div className="product-right">
              <img src={imageSrc} alt="Feature Illustration" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            At VShare, we believe that data ownership and privacy are fundamental rights...
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Firstpage;
