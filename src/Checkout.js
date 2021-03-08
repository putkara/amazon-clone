import React from "react";
import "./Checkout.css";
import ad from "./ad.png";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ad} alt="ad" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>The right</h2>
      </div>
    </div>
  );
}

export default Checkout;
