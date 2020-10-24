import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/post";
import {
  CommentImgContainer,
  CommentInfoContainer,
  CommentItemContainer,
  CommentDeleteButton,
} from "./CommentItem.styles";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <CommentItemContainer>
      <CommentImgContainer>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="profile-pic" />
        </Link>
        <h2>{name}</h2>
      </CommentImgContainer>

      <CommentInfoContainer>
        <h3>{text}</h3>
        <small>
          Commented on <Moment format="MM/DD/YYYY">{date}</Moment>
        </small>
        {!auth.loading && user === auth.user._id && (
          <CommentDeleteButton
            type="button"
            onClick={(e) => deleteComment(postId, _id)}
          >
            Delete
          </CommentDeleteButton>
        )}
      </CommentInfoContainer>
    </CommentItemContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
