import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  HomepageContainer,
  OverlayContainer,
  HeaderContainer,
  ButtonGroup,
  SignUpButton,
} from "./Homepage.styles";

const Homepage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <HomepageContainer>
      <OverlayContainer>
        <HeaderContainer>
          <h1>DevConnector</h1>
          <h3>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h3>
          <ButtonGroup>
            <Link to="/register">
              <SignUpButton>Sign Up</SignUpButton>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </ButtonGroup>
        </HeaderContainer>
      </OverlayContainer>
    </HomepageContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Homepage);
