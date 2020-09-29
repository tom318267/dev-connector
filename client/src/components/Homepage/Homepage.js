import React from "react";
import { Link } from "react-router-dom";
import {
  HomepageContainer,
  OverlayContainer,
  HeaderContainer,
  ButtonGroup,
  SignUpButton,
} from "./Homepage.styles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <OverlayContainer>
        <HeaderContainer>
          <h1>Developer Connector</h1>
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

export default Homepage;
