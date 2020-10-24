import styled from "styled-components/macro";

export const PostItemContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  align-items: center;
  margin: 20px auto;

  border: 1px solid black;
`;

export const PostImgContainer = styled.div`
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

export const PostInfoContainer = styled.div`
  padding: 30px;

  h3 {
    margin-bottom: 15px !important;
  }
`;

export const PostButtonContainer = styled.div`
  margin-top: 10px;
`;

export const LikeAndUnlikeButton = styled.button`
  padding: 5px;
  font-size: 1rem;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const DiscussionButton = styled.button`
  padding: 5px;
  font-size: 1rem;
  background-color: #14a693;
  border: none;
  margin-right: 5px;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const DeletePostButton = styled.button`
  padding: 5px 8px;
  font-size: 1rem;
  background-color: #cc3300;
  color: white;
  border: none;
  cursor: pointer;
`;
