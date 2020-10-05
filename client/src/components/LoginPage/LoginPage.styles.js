import styled from "styled-components/macro";

export const LoginContainer = styled.div`
  width: 60%;
  margin: 60px auto;

  h1,
  h2 {
    margin-bottom: 10px;
  }

  h3 {
    a {
      text-decoration: none;
      color: #14a693;
    }
  }
`;

export const LoginForm = styled.form`
  display: inline-block;
  margin-bottom: 20px;

  input {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 20px;
    height: 30px;
    padding: 0 5px;
  }
`;

export const LoginButton = styled.button`
  padding: 15px;
  border-radius: 50px;
  background-color: #14a693;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;
