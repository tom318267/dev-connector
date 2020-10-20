import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { PostFormContainer, PostSubmitButton } from "./PostForm.styles";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <PostFormContainer
      onSubmit={(e) => {
        e.preventDefault();
        addPost({ text });
        setText(" ");
      }}
    >
      <h3>Say Something...</h3>

      <textarea
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="5"
        name="text"
        value={text}
        placeholder="Create a post"
        required
      />
      <br />
      <PostSubmitButton>Submit</PostSubmitButton>
    </PostFormContainer>
  );
};

export default connect(null, { addPost })(PostForm);
