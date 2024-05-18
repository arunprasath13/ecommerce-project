import React from "react";
import { useSelector } from "react-redux";
import { deleteItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const TableView = () => {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.cart);
  const handleDelete = (id) => {
      dispatch(deleteItem(id))
  }
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
          <th scope="col" style={{ fontWeight: "bold" }}>
            Status
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
                  <img src={cart.image} />
                  <td>{cart.title}</td>
                </div>
              </td>
              <td>{cart.price}</td>
              <td>{cart.category}</td>
              <div className="status" style={{display:"flex",justifyContent:"start"}}>
                <button onClick={() => handleDelete(cart.id)}><td>Delete</td></button>
              </div>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TableView;
