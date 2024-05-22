import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Slider from '@mui/material/Slider';
import { setFilteredProducts } from "../../redux/productSlice";
import { setRatingFilter } from "../../redux/ratingSlice";

const Filter = () => {
  const buttons = [
    "All",
    "men's clothing",
    "jewelery",
    "women's clothing",
    "electronics",
  ];
  const dispatch = useDispatch();

  const handleRatingChange = (event, newValue) => {
    dispatch(setRatingFilter(newValue));
  };

  return (
    <div className="filter__section">
      <h1>Filter</h1>
      <div className="btn__categories">
        {buttons.map((button, index) => (
          <div key={index}>
            <Link to={"/filteredProducts/" + button}>
              <Button
                variant="text"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  if (button !== "All") {
                    dispatch(setFilteredProducts(button));
                  }
                }}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="rating__filter">
        <h2>Filter by Rating</h2>
        <Slider
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={1000}
          onChange={handleRatingChange}
          style={{ width: 300 }}
        />
      </div>
    </div>
  );
};

export default Filter;

