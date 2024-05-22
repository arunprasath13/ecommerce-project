import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentDetails } from "../redux/paymentDetails";
import "./PaymentDetails.css";
import Success from "./Success";

const PaymentDetails = () => {
  const dispatch = useDispatch();
  const paymentDetails = useSelector((state) => state.paymentDetails);
  const [cardNumber, setCardNumber] = useState(paymentDetails.cardNumber || "");
  const [expiryDate, setExpiryDate] = useState(paymentDetails.expiryDate || "");
  const [cvv, setCvv] = useState(paymentDetails.cvv || "");
  const [status, setStatus] = useState(false);

  const handleSave = () => {
    dispatch(setPaymentDetails({ cardNumber, expiryDate, cvv }));
  };

  const validateFields = () => {
    return cardNumber && expiryDate && cvv;
  };

  const processOrder = (e) => {
    e.preventDefault();
    if (validateFields()) {
      setStatus((prev) => !prev);
    } else {
      alert("All input fields must be filled.");
    }
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>Payment Details</h2>
        <form className="payment__form" onSubmit={processOrder}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <button type="submit">Submit</button>
          {status && <Success />}
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
