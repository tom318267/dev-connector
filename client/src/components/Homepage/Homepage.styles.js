import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1533906966484-a9c978a3f090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
`;

export const OverlayContainer = styled.div`
  padding-top: 250px;
  text-align: center;
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 425px) {
    padding-top: 100px;
  }
`;

export const HeaderContainer = styled.div`
  h1 {
    font-size: 3rem;
    padding-bottom: 12px;

    @media screen and (max-width: 425px) {
      font-size: 2rem;
      padding: 0 5px 12px 5px;
    }
  }

  h3 {
    font-size: 1.3rem;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
      padding: 0 10px;
    }
  }
`;

export const ButtonGroup = styled.div`
  padding-top: 15px;
  button {
    padding: 12px;
    font-size: 1.2rem;
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50px;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

export const SignUpButton = styled.button`
  background-color: #14a693;
  color: white;
`;

export const LoginHomeButton = styled.button`
  background-color: white;
  color: black;
`;
