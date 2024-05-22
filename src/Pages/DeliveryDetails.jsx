import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDetails } from "../redux/deliverySlice";
import { useNavigate } from "react-router-dom";
import "./DeliveryDetails.css";
import masterCard from "../assets/Mastercard-logo.svg.png";
// import { NavLink } from "react-router-dom";
import Success from "./Success";
import Filter from "../components/filter/Filter";
const DeliveryDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deliveryDetails = useSelector((state) => state.deliveryDetails);
  const cartData = useSelector((state) => state.cart);
  const [address, setAddress] = useState(deliveryDetails.address || "");
  const [city, setCity] = useState(deliveryDetails.city || "");
  const [state, setState] = useState(deliveryDetails.state || "");
  const [zipCode, setZipCode] = useState(deliveryDetails.zipCode || "");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [status, setStatus] = useState(false);

  const validateFields = () => {
    return address && city && state && zipCode;
  };

  const handleSave = () => {
    if (validateFields()) {
      dispatch(setDeliveryDetails({ address, city, state, zipCode }));
      navigate("/payment");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleCOD = () => {
    if (validateFields()) {
      dispatch(setDeliveryDetails({ address, city, state, zipCode }));
      setStatus((prev) => !prev);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const total = cartData.reduce((acc, value) => {
    return acc + (value.price || 0);
  }, 0);

  return (
    <div className="billing-section">
      <div className="billing__container">
        <div className="billing__left">
          <h2>Billing Details</h2>
          <div className="billing__input">
            <div>
              <label>Address</label>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label>Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="billing__right">
          <div className="billing__total">
            <div className="flex">
              <p>Subtotal:</p>
              <p>{total.toFixed(2)}</p>
            </div>
            <div className="flex">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="bank__details">
              <div>
                <input
                  type="radio"
                  name="payment"
                  onClick={() => setSelectedPaymentMethod("bank")}
                />
                <label>Bank</label>
              </div>
              <div className="bank__img">
                <img src={masterCard} alt="MasterCard" />
                <img src={masterCard} alt="MasterCard" />
                <img src={masterCard} alt="MasterCard" />
              </div>
            </div>
            <div className="bank__details">
              <div>
                <input
                  type="radio"
                  name="payment"
                  onClick={() => {
                    setSelectedPaymentMethod("cod");
                  }}
                />
                <label>Cash on Delivery</label>
              </div>
            </div>
            <div className="billing__btn">
              <button
                onClick={() => {
                  if (selectedPaymentMethod === "bank") {
                    handleSave();
                  } else if (selectedPaymentMethod === "cod") {
                    handleCOD();
                  } else {
                    alert("Please select a payment method.");
                  }
                }}
              >
                Process Order
              </button>
              {status && <Success />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
