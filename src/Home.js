import React from "react";
import "./Home.css";
import banner from "./banner.jpg";
import Product from "./Product";
console.log(banner);
function Home() {
  return (
    <div className="home">
      <div className="home__conteiner">
        <img className="home__image" src={banner} alt="banner" />
        <div className="home__row">
          <Product />
          <Product />
          {/*Product*/}
        </div>
        <div className="home__row">
          {/*Product*/}
          {/*Product*/}
          {/*Product*/}
        </div>
        <div className="home__row">{/*Product*/}</div>
      </div>
    </div>
  );
}

export default Home;
