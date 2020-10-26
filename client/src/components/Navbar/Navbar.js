import React, { Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";
import { NavbarContainer, DivItems, LogOut } from "./Navbar.styles";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <DivItems>
      <Link to="/profiles">
        <h4>Developers</h4>
      </Link>
      <Link to="/posts">
        <h4>Posts</h4>
      </Link>
      <Link to="/dashboard">
        <h4>
          <i className="fas fa-user"></i> Dashboard
        </h4>
      </Link>
      <LogOut onClick={logout}>
        <h4>
          <i className="fas fa-sign-out-alt"></i> Logout
        </h4>
      </LogOut>
    </DivItems>
  );

  const guestLinks = (
    <DivItems>
      <Link to="/profiles">
        <h4>Developers</h4>
      </Link>
      <Link to="/register">
        <h4>Register</h4>
      </Link>
      <Link to="/login">
        <h4 id="login">Login</h4>
      </Link>
    </DivItems>
  );
  return (
    <NavbarContainer>
      <Link to="/" className="logo">
        <h2>
          <i className="fas fa-code"></i> <span>DevConnector</span>
        </h2>
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
