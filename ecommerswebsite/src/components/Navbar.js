import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="https://www.zomato.com/ncr/pizza-home-shahdara-new-delhi">Home</a>
          </li>
          <li>
            <a href="https://graphicsfamily.com/downloads/modern-pizza-menu-design/">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="https://www.qsrmagazine.com/fast-food">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;