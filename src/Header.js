import React from "react";
import "./Header.css";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
console.log(logo);
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo" />

      <dive className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/*Logo*/}
      </dive>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLigeOne">Heloo Natia</span>
          <span className="header__optionLigeTwo">Signe in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLigeOne">Returne</span>
          <span className="header__optionLigeTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLigeOne">Your</span>
          <span className="header__optionLigeTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLigeTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
