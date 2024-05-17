import React from "react";
import { useSelector } from "react-redux";
const GridView = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <div className="cards">
      {cartData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card__img">
            <img src={card.image} alt={card.title} />
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
              <button>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
