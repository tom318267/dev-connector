import styled from "styled-components";

export const CommentItemContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  align-items: center;
  margin: 20px auto;

  border: 1px solid black;
`;

export const CommentImgContainer = styled.div`
  padding: 10px;
  text-align: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
  }

  h2 {
    color: #14a693;
  }
`;

export const CommentInfoContainer = styled.div`
  padding: 30px;

  h3 {
    margin-bottom: 15px !important;
  }
`;

export const CommentDeleteButton = styled.button`
  padding: 5px 8px;
  font-size: 1rem;
  background-color: #cc3300;
  color: white;
  border: none;
  cursor: pointer;
  display: block;
  margin-top: 10px;
`;
