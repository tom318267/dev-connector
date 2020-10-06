import styled from "styled-components";

export const EditProfileContainer = styled.div`
  margin: 30px 0;
`;

export const EditProfileHeader = styled.div`
  h3 {
    padding: 10px 0;
  }
`;

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  select,
  input,
  textarea {
    font-size: 1rem;
  }

  select {
    padding: 5px 10px;
    margin-bottom: 5px;
  }

  small {
    margin-bottom: 15px;
    font-size: 1rem;
  }

  small:last-of-type {
    margin-bottom: 30px;
  }

  input {
    padding: 10px 10px;
    margin-bottom: 5px;
  }

  textarea {
    margin-bottom: 5px;
    padding: 15px 10px;
  }
`;

export const EditOptionalDiv = styled.div`
  button {
    width: 300px;
    margin-right: 10px;
    padding: 8px 0;
    background-color: #14a693;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 50px;
    box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.35);
    font-size: 1rem;
  }

  margin-bottom: 30px;
`;

export const EditSubmitDiv = styled.div`
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
  }
  #submit-button {
    margin-right: 5px;
  }

  #go-back {
    background-color: #eaeaea;
    color: black;
  }
`;

export const EditProfileSocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  .input-container {
    input {
      width: 50%;
    }
    i {
      position: relative;
      top: 9px;
      font-size: 2rem;
      margin-right: 20px;
    }
    .fab.fa-twitter {
      color: #38a1f3;
    }

    .fab.fa-facebook {
      color: #3b5998;
    }

    .fab.fa-youtube {
      color: #c4302b;
    }

    .fab.fa-linkedin {
      color: #0077b5;
    }

    .fab.fa-instagram {
      color: #3f729b;
    }
  }
`;
