import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import TableView from "../components/table/TableView";
import GridView from "../components/table/GridView";

const Cart = () => {
  const [status, setStatus] = useState("table");
  const cartData = useSelector((state) => state.cart);

  const handleClick = (stat) => {
    setStatus(stat); // Toggle status between true and false
  };

  return (
    <div>
      <div className="view__btn">
        <button type="button" className={`btn btn-primary btn-lg ${status==="table"}`} onClick={() => handleClick("table")}>
          Table View
        </button>
        <button type="button" className={`btn btn-primary btn-lg ${status === "grid"}`} onClick={() => handleClick("grid")}>
          Grid View
        </button>
      </div>
      {status === "table" ? <TableView /> : <GridView />} 
    </div>
  );
};

export default Cart;

