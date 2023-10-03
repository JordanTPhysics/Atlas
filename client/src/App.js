import React, { useState, useEffect } from "react";


import Menu from "./components/Menu";

import {
  PIZZAS,
  PASTAS,
  PITTAS,
  BURGERS,
  SIDEORDER,
  DRINKSDESSERTS,
  KEBABS,
  MEALDEAL,
  CHICKEN,
  WRAPS,
  CALZONE,
} from "./menus";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("pizzas");

  const renderComponent = () => {
    switch (selectedOption) {
      case "pizzas":
        return (
          <div >
            <Menu
              menuItems={PIZZAS}
              title={'ATLAS PIZZAS - - 10" - 12" - 14"'}
              backgroundImage={"/images/pizza.jpg"}
            />
          </div>
        );
      case "kebabs":
        return (
          <div >
            <Menu
              menuItems={KEBABS}
              title={"KEBABS - - Med - Lrg - Xlrg"}
              backgroundImage={"/images/kebab.jpg"}
            />
          </div>
        );
      case "burgers":
        return (
          <div >
            <Menu
              menuItems={BURGERS}
              title={"BURGERS  - - Med - Lrg - Xlrg"}
              backgroundImage={"/images/burger.jpg"}
            />
          </div>
        );
      case "sides":
        return (
          <div >
            <Menu
              menuItems={SIDEORDER}
              title={"SIDE ORDERS"}
              backgroundImage={"/images/chips.jpg"}
            />
          </div>
        );

      case "drinks":
        return (
          <div >
            <Menu
              menuItems={DRINKSDESSERTS}
              title={"DRINKS & DESSERTS"}
              backgroundImage={"/images/drinks.jpg"}
            />
          </div>
        );

      case "calzone":
        return (
          <div >
            <Menu
              menuItems={CALZONE}
              title={"CALZONE"}
              backgroundImage={"/images/calzone.jpg"}
            />
          </div>
        );

      case "chicken":
        return (
          <div >
            <Menu
              menuItems={CHICKEN}
              title={"CHICKEN"}
              backgroundImage={"/images/friedchicken.jpg"}
            />
          </div>
        );
      case "wraps":
        return (
          <div >
            <Menu
              menuItems={WRAPS}
              title={"ATLAS WRAPS"}
              backgroundImage={"/images/Wraps.jpg"}
            />
          </div>
        );
      case "pittas":
        return (
          <div >
            <Menu
              menuItems={PITTAS}
              title={"PITTA POCKET"}
              backgroundImage={"/images/pittas.jpg"}
            />
          </div>
        );
      case "pastas":
        return (
          <div >
            <Menu
              menuItems={PASTAS}
              title={"ATLAS PASTAS"}
              backgroundImage={"/images/pasta.jpg"}
            />
          </div>
        );

      default:
        return (
          <div >
            
            <Menu
              menuItems={PIZZAS}
              title={' - ATLAS PIZZAS - 10" - 12" - 14"'}
              backgroundImage={"/images/pizza.jpg"}
            />
          </div>
        );
    }
  };

  return (
    <div >
      <div >
        <header >
          <div className="neon-text">
            OPEN 7 DAYS A WEEK <br />
            • 4:00PM TILL LATE • DELIVERY SERIVCE TILL LATE
            <br />
            <a
              href="https://www.google.com/maps?q=8+st.david's+road+south,+lytham+st+annes,+FY8+1TB"
              className="phone-number"
              target="_blank"
            >
              8 St. DAVID'S ROAD SOUTH, LYTHAM ST ANNES, FY8 1TB
            </a>
          </div>
          <div >
            <img src="/images/AtlasLogo2.png" width={0.2} /> <br></br>
            <strong className="neon-text">
              PIZZAS • KEBABS • BURGERS • FRIED CHICKEN • PASTAS • CALZONE
            </strong>
          </div>
          <div className="neon-text">
            <h2>Call Now</h2>
            <a className="phone-number" href="tel:01253722729" target="_blank">
              01253 72 27 29
            </a>
          </div>
        </header>

        
          
            <div className="itemlist">
              <h2 className="neon-text">User Menu</h2>
              <button className="button" onClick={() => setSelectedOption("pizzas")}>
                Pizzas
              </button>

              <button className="button" onClick={() => setSelectedOption("burgers")}>
                Burgers
              </button >
              <button className="button" onClick={() => setSelectedOption("chicken")}>
                Fried Chicken
              </button>
              <button className="button" onClick={() => setSelectedOption("kebabs")}>
                Kebabs
              </button>
              <button className="button" onClick={() => setSelectedOption("calzone")}>
                Calzone
              </button>
              <button className="button" onClick={() => setSelectedOption("drinks")}>
                Drinks & Desserts
              </button>
              <button className="button" onClick={() => setSelectedOption("wraps")}>Wraps</button>
              <button className="button" onClick={() => setSelectedOption("pittas")}>
                Pittas
              </button>
              <button className="button" onClick={() => setSelectedOption("pastas")}>
                Pastas
              </button>
              <button className="button" onClick={() => setSelectedOption("sides")}>
                Side Orders
              </button>
            </div>
          </div>

          <div >{renderComponent()}</div>
          
          

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="/images/AtlasLogo2.png" alt="Takeaway Logo" width={0.5}/>
        <h1>ATLAS PIZZERIA</h1>
      </div>
      <div class="footer-contact">
        
      </div>
      <div class="footer-social">
        <h3>Follow Us</h3>
        <a href="#" class="social-icon">Facebook</a>
        <a href="#" class="social-icon">Twitter</a>
        <a href="#" class="social-icon">Instagram</a>
      </div>
    </div>
    <div class="footer-disclaimer">
      <p>&copy; 2023 ATLAS PIZZERIA. All rights reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
      <p>Designed by Jordan</p>
    </div>
  </div>
</footer>

      </div>
   
  );
}
