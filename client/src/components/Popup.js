// Popup.js
import React from "react";
import "./popup.css";

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        
        <h2>Atlas Awarded for serving the Community</h2>
        <img
          src="/images/Award.jpeg"
          alt="Award for 24 Years of serving St Annes"
          className="popup-img"
        />
        <p>
          This is to commemorate almost 30 years of saving Lytham St. Annes from
          Hunger!
        </p> <br/>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
