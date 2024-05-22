import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from "../redux/apiSlice"
import { addItems } from "../redux/cartSlice";
import Rating from '@mui/material/Rating';

const HomeCard = () => {
  const dispatch = useDispatch();
  const { data: cards, isLoading, error } = useSelector((state) => state.api);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    dispatch(fetchApiData())
      .unwrap()
      .then((data) => {
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [dispatch]);

  const addToCart = (card) => {
    dispatch(addItems(card));
  };

  if (isLoading || isFetching) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 
  return (
    <div className="cards">
      {cards.map((card) => (
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
              <Rating name="half-rating-read" defaultValue={card.rating.rate} size="large" precision={0.5} readOnly />
            </div>
            <div className="btns">
              <button>Buy now</button>
              <button onClick={() => addToCart(card)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
