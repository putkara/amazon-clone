import { Divider } from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import alice from "./alice.jpg";
console.log(alice);
function Product({id, title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="star" />
              </p>
            ))}
        </div>
      </div>
      <img className="" src={image} alt="alice" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
