import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import {
  PostItemsContainer,
  PostImgContainer,
  PostInfoContainer,
  PostButtonContainer,
  LikeAndUnlikeButton,
  DiscussionButton,
  DeletePostButton,
} from "./PostItem.styles";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <PostItemsContainer>
      <PostImgContainer>
        <img src={avatar} alt="profile-pic" />
        <h2>{name}</h2>
      </PostImgContainer>

      <PostInfoContainer>
        <h3>{text}</h3>
        <small>
          Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
        </small>

        <PostButtonContainer>
          <LikeAndUnlikeButton onClick={(e) => addLike(_id)}>
            <i className="fas fa-thumbs-up"></i>{" "}
            {likes.length > 0 && <span>{likes.length}</span>}
          </LikeAndUnlikeButton>

          <LikeAndUnlikeButton onClick={(e) => removeLike(_id)}>
            <i className="fas fa-thumbs-down"></i>
          </LikeAndUnlikeButton>

          <DiscussionButton>
            <Link to={`/post/${_id}`}>
              Discussion {comments.length > 0 && <span>{comments.length}</span>}
            </Link>
          </DiscussionButton>

          <DeletePostButton onClick={(e) => deletePost(_id)}>
            <i className="fas fa-times" />
          </DeletePostButton>
        </PostButtonContainer>
      </PostInfoContainer>
    </PostItemsContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
