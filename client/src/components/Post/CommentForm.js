import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import {
  CommentFormContainer,
  CommentSubmitButton,
} from "./CommentForm.styles";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");
  return (
    <CommentFormContainer
      onSubmit={(e) => {
        e.preventDefault();
        addComment(postId, { text });
        setText(" ");
      }}
    >
      <h3>Leave a Comment</h3>

      <textarea
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="5"
        name="text"
        value={text}
        placeholder="Comment here"
        required
      />
      <br />
      <CommentSubmitButton>Submit</CommentSubmitButton>
    </CommentFormContainer>
  );
};

export default connect(null, { addComment })(CommentForm);
