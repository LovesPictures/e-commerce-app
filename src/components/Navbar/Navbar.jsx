//Navbar.js
import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";
// declare an initialize a variable navElement with the array to be able to use it anywhere.

// const navElement = ["Home", "About", "Products", "Blog", "Contact"];
const navElement = [
  "Home",
  "Categories",
  "Products",
  "Sale",
  "Trending",
  "Newsletter",
  "Contact",
  "Information",
  "Payment",
];

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    {navElement.map((section) => (
      <Link
        key={navElement.indexOf(section)}
        to={section}
        smooth={true}
        className={linkClassName}
        onClick={onClick}
      >
        {section}
      </Link>
    ))}
  </nav>
);
export default Navbar;

/*

"Categories", "Products","Sale", "Trending","Newsletter","Contact","Information", "Payment"

   <CategoryCards />
    <Product  Cards />
    <Product  Promo />
    <Trending />
    <Newsletter />
    <Map  Contact />
    <HeadedList -  information  />
    <Payment /> 
*/
