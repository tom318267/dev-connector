import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #14a693;

  h2 {
    padding-left: 15px;
  }

  .logo {
    text-decoration: none;
    color: white;

    @media screen and (max-width: 425px) {
      font-size: 0.6rem;
    }
  }
`;

export const DivItems = styled.div`
  display: flex;
  color: white;

  a {
    text-decoration: none;
    margin-right: 20px;
    color: white;

    @media screen and (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  // #login {
  //   @media screen and (max-width: 425px) {
  //     margin-right: unset;
  //   }
  // }
`;

export const LogOut = styled.a`
  cursor: pointer;
`;
