import React from "react";
import "./Home.css";
import banner from "./banner.jpg";
import Product from "./Product";
import alice from "./alice.jpg";
import cattree from "./cattree.jpg"
import samsung from "./samsung.jpg"
import shose from "./shose.jpg"
import screen from "./screen.png"
import bag from "./bag.jpg"
console.log(banner);
function Home() {
  return (
    <div className="home">
      <div className="home__conteiner">
        <img className="home__image" src={banner} alt="banner" />
        <div className="home__row">
          <Product
            id="12321341"
            title="Alice in Wonderland,
           Alice s Adventures in Wonderland 
          (commonly shortened to Alice in Wonderland)
           is an 1865 novel by
           English author Lewis Carroll
           "
            price={25.5}
            image={alice}
            rating={5}
          />
          <Product 
          id=" "
          title="Buy Samsung Galaxy Note20 
          and Note20 Ultra at Samsung PK.
           Check out the price and limited 
           time offers for your new Samsung
            Galaxy mobile phone."
          price={1200}
          image={samsung}
          rating={5}
          />
        </div>
        <div className="home__row">
        <Product 
          id=" "
          title="The wooden parts are made of 18/30 mm
           thick Multiplex.Buche and are impregnated
           by us with parquet lacquer."
          price={460}
          image={cattree}
          rating={3}
          />
          <Product 
          id=" "
          title="Customers who viewed KROSER Laptop
           Bag 18 Inch Premium Business Briefcase
           Fits up to 17.3 Inch… also viewed"
          price={14}
          image={bag}
          rating={2}
          />
          <Product 
          id=" "
          title="
          Flipkart
          Shoenstring Casual Shoes for Women sneakers
           Girls canvas shoes latest stylish"
          price={90}
          image={shose}
          rating={3}
          />
          
        </div>
        <div className="home__row">
        <Product 
          id=" "
          title="Super-size your monitor for seamless
           multi-tasking with the Samsung CJ89"
          price={2000}
          image={screen}
          rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
