import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer, NavbarDiv, DivItems } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarDiv>
        <h2>
          <Link to="/">
            <i className="fas fa-code"></i> DevConnecter
          </Link>
        </h2>
        <DivItems>
          <Link to="/developers">
            <h4>Developers</h4>
          </Link>
          <Link to="/register">
            <h4>Register</h4>
          </Link>
          <Link to="/login">
            <h4 id="login">Login</h4>
          </Link>
        </DivItems>
      </NavbarDiv>
    </NavbarContainer>
  );
};

export default Navbar;
