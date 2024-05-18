import React from "react";
import { useSelector } from "react-redux";
const TableView = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <table className="table">
      <thead>
        <tr style={{ fontSize: "30px" }}>
          <th scope="col" style={{ fontWeight: "bold" }}>
            #
          </th>
          <th scope="col" style={{ fontWeight: "bold" }}>
            Product
          </th>
          <th scope="col" style={{ fontWeight: "bold" }}>
            Price
          </th>
          <th scope="col" style={{ fontWeight: "bold" }}>
            Cateogery
          </th>
        </tr>
      </thead>
      {cartData.map((cart, index) => {
        return (
          <tbody>
            <tr>
              <th scope="row">{index}</th>
              <td>
                <div className="flex">
                  <img src={cart.image}/>
                  <td>{cart.title}</td>
                </div>
              </td>
              <td>{cart.price}</td>
              <td>{cart.category}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TableView;
