import styled from "styled-components/macro";

export const DashboardContainer = styled.div`
  margin: 30px 50px;
  h1 {
    margin-bottom: 10px;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }

  p {
    margin-top: 10px;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
    width: 90%;
    margin: 30px auto;
  }
`;

export const CreateProfileButton = styled.button`
  margin-top: 20px;
  padding: 12px;
  border-radius: 50px;
  background-color: #14a693;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const DeleteAccountButton = styled.button`
  margin-top: 50px;
  font-size: 1rem;
  padding: 12px;
  background-color: #cc3300;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  @media screen and (max-width: 425px) {
    font-size: 0.5rem;
  }
`;
