import React from "react";
import "./Header.css"
import logo from "../../assets/icons8-wise-48.png";
import { BsCart } from "react-icons/bs";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const data = useSelector((state) => state.cart);
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} />
          <h1>Amazona</h1>
        </div>
        <div className="header__category">
          <Link to="/">Shop</Link>
          <Link to="/mens">Men</Link>
          <Link to="/womens">Women</Link>
          <Link to="/jwellery">Jewellery</Link>
          <Link to="/electronics">Electronics</Link>
        </div>
        <div className="header__cart" style={{position:"relative",cursor:"pointer"}}>
          <Link to="/cartpage"><BsCart size={35}/></Link>
          <div className="cart__length" style={{position:"absolute",left:"20px",bottom:"20px",color:"red",fontSize:"20px",backgroundColor:"red",borderRadius:"50%",color:"white",width:"30px",textAlign:"center",right:"100px" }}>{data.length}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
