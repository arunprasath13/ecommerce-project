import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../components/ProductCard/ProductCard.css";
import Filter from "../components/filter/Filter";
const Electronics = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.api.data);
  let filteredProducts = products.filter(
    (product) => product.category === "electronics"
  );
  const addToCart = (product) => {
    dispatch(addItems(product));
  };
  return (
    <div className="cards">
      <Filter />
      {filteredProducts.map((card) => {
        return (
          <div className="card">
            <div className="card__img">
              <img src={card.image} />
            </div>
            <div className="card__info">
              <div className="card__title">
                <p>{card.title.substring(0, 19)}</p>
              </div>
              <div className="card__price">
                <p>{card.price}</p>
              </div>
              <div className="card__rating">
                <p>{card.rating.rate}</p>
              </div>
              <div className="btns">
                <button>Buy now</button>
                <button onClick={() => addToCart(card)}>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Electronics;
