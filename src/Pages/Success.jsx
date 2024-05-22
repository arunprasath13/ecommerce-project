// Success.js
import React from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";
const Success = () => {
    const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/")
    window.location.reload()
  }
  return (
    <div className="success-popup">
      <div className="success-popup__content">
        <h2>Success</h2>
        <p>You have ordered something using Cash on Delivery.</p>
        <button onClick={handleOrder}>Close</button>
      </div>
    </div>
  );
};

export default Success;
