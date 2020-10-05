import styled from "styled-components";

export const DevelopersContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #14a693;
  padding: 50px;
  margin-bottom: 40px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;

export const Title = styled.h1`
  padding-top: 50px;
  padding-bottom: 5px;
  color: #14a693;
  font-size: 2.5rem;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const SubHeadingContainer = styled.h3`
  padding-bottom: 20px;
  font-size: 1.2rem;

  .fab.fa-connectdevelop {
    font-size: 1.5rem;
    position: relative;
    top: 2px;
  }

  @media screen and (max-width: 425px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const DevImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  @media screen and (max-width: 425px) {
    padding-bottom: 20px;
    width: 150px;
    height: 150px;
  }
`;

export const ProfileInfo = styled.div`
  color: white;
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const ProfileButton = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  padding: 10px;
  background-color: white;
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export const ProfileExp = styled.div`
  color: white;

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;
