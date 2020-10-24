import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../Posts/PostItem";
import {
  PostBackButtonContainer,
  BackToPostsButton,
  CommentContainer,
  CommentFeed,
} from "./Post.styles";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <PostBackButtonContainer>
        <Link to="/posts">
          <BackToPostsButton>Back to Posts</BackToPostsButton>
        </Link>
      </PostBackButtonContainer>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <hr style={{ width: "80%", margin: "0 auto 40px auto" }} />
      <CommentFeed>Comment Feed</CommentFeed>
      {post.comments.length === 0 ? (
        <h3 style={{ width: "80%", margin: "30px auto 0 auto" }}>
          No comments...
        </h3>
      ) : (
        <CommentContainer>
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </CommentContainer>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
