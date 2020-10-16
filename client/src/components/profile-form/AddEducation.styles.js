import styled from "styled-components/macro";

export const EducationContainer = styled.div`
  margin-top: 30px;
`;

export const EducationForm = styled.form`
  select,
  input,
  textarea {
    font-size: 1rem;
  }
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;

  input {
    padding: 10px 10px;
    margin-bottom: 5px;
  }

  small {
    margin: 15px 0;
    font-size: 1rem;
  }

  .input-element {
    margin-bottom: 20px;
  }

  textarea {
    margin-bottom: 5px;
    padding: 15px 10px;
  }
`;

export const EducationHeader = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

export const EducationCheckDiv = styled.div`
  input {
    margin-right: 5px;
    margin-bottom: 20px;
  }
`;

export const EducationSubmitGroup = styled.div`
  button {
    width: 100px;
    padding: 8px 0;
    background-color: #14a693;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 50px;
    box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
    font-size: 1rem;
    margin-right: 5px;
  }

  #edu-submit-button {
    margin-right: 10px;
  }

  #go-back {
    background-color: #eaeaea;
    color: black;
  }
`;
