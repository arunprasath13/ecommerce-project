import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import TableView from "../components/table/TableView";
import GridView from "../components/table/GridView";
import { Link } from "react-router-dom";
const Cart = () => {
  const [status, setStatus] = useState("table");
  const cartData = useSelector((state) => state.cart);
  const total = cartData.reduce((acc, value) => {
    return acc + (value.price || 0);
  }, 0);
  const handleClick = (stat) => {
    setStatus(stat); // Toggle status between true and false
  };

  return (
    <div className="cart-page">
      <div className="left">
        <div className="left__container">
          <div className="view__btn">
            <button
              type="button"
              className={`btn btn-primary btn-lg ${status === "table"}`}
              onClick={() => handleClick("table")}
            >
              Table View
            </button>
            <button
              type="button"
              className={`btn btn-primary btn-lg ${status === "grid"}`}
              onClick={() => handleClick("grid")}
            >
              Grid View
            </button>
          </div>
        </div>
        <div className="status" style={{ fontSize: "40px" }}>
          {cartData.length === 0 && <div>Go and buy some Products</div>}
        </div>
        <div> {status === "table" ? <TableView /> : <GridView />}</div>
      </div>
      <div className="right">
        {cartData.length === 0 ? (
          <div
            className="empty-cart"
            style={{ fontSize: "40px", fontWeight: "bold", marginTop: "50px" }}
          >
            Your cart is empty
          </div>
        ) : (
          <div className="empty" style={{ textAlign: "center" }}>
            <p style={{ fontSize: "30px" }}>
              Subtotal ({cartData.length} item): {total}
            </p>
            <Link to="/address">
              <button>Buy Now</button>
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
