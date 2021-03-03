import { Divider } from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import alice from "./alice.jpg";
console.log(alice);
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The product info</p>
        <p className="product__price">
          <small>€</small>
          <strong>10.22</strong>
        </p>
        <div className="product__rating">
          <p>
            <StarIcon className="star" />
          </p>
        </div>
      </div>
      <img className="" src={alice} alt="alice" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
