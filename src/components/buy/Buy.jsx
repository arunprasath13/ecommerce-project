import React from "react";

const Buy = ({ total,cartData }) => {
  return (
    <>
      <p>Subtotal ({cartData.length} item):   {total.toFixed(2)}</p>
      <div> {total.toFixed(2)}</div>
      <button>Proceed to Buy</button>
    </>
  );
};

export default Buy;
