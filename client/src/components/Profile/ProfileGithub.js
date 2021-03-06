import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import {
  GithubReposContainer,
  GithubTitle,
  RepoButtons,
  RepoDiv,
  StarsButton,
  WatchersButton,
  ForksButton,
} from "./Profile.styles";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  return (
    <div>
      <GithubTitle>Github Repos</GithubTitle>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <GithubReposContainer key={repo._id}>
            <RepoDiv>
              <h2>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h2>
              <p>{repo.description}</p>
            </RepoDiv>
            <RepoButtons>
              <StarsButton>Stars: {repo.stargazers_count}</StarsButton>
              <WatchersButton>Watchers: {repo.watchers_count}</WatchersButton>
              <ForksButton>Forks: {repo.forks_count}</ForksButton>
            </RepoButtons>
          </GithubReposContainer>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
