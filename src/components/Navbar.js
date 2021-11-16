import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">NUNU</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <div className={"fas fa-bars"} />
          {/* <Bars /> */}
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
