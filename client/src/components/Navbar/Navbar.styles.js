import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #14a693;
  height: 50px;
  line-height: 50px;
  overflow-x: hidden;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: white;
    }
  }

  h2 {
    margin-left: 15px;
    font-size: 1.3rem;

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

export const DivItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: white;
    }
  }

  h4 {
    margin-right: 20px;
    text-decoration: none;

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  #login {
    @media screen and (max-width: 425px) {
      margin-right: unset;
    }
  }
`;

export const LogOut = styled.a`
  cursor: pointer;
`;
