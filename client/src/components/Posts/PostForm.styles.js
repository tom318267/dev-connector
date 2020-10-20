import styled from "styled-components";

export const PostFormContainer = styled.form`
  display: block;
  width: 80%;
  margin: 30px auto 50px auto;

  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 5px 5px;
  }

  h3 {
    margin-bottom: 5px;
  }
`;

export const PostSubmitButton = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 50px;
  background-color: #14a693;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
`;
