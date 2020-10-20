import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import {
  PostContainer,
  PostHeaderContainer,
  PostMapDiv,
  PostFeed,
} from "./Posts.styles";

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <PostContainer>
      <PostHeaderContainer>
        <h1>Posts</h1>
        <h2>
          <i className="fas fa-user"></i> Welcome to the community
        </h2>
      </PostHeaderContainer>

      <PostForm />

      <PostFeed>Post Feed</PostFeed>

      <PostMapDiv>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </PostMapDiv>
    </PostContainer>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
