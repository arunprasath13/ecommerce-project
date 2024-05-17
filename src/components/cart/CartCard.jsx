import React from "react";
import { useSelector,useDispatch } from "react-redux";
const CartCard = () => {
  const cartData = useSelector((state) => state.cart)
  
  console.log(cartData)
  return (
    <div className="cards">
      {cards.map((card) => {
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
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartCard;
