import React from "react";
import {
  BackButtonContainer,
  ProfileInfoContainer,
  ProfileImage,
  ProfileName,
  ProfileJobTitle,
  ProfileLocation,
  ProfileBioContainer,
  SocialDiv,
  SkillsContainer,
  ProfileExperienceContainer,
  ProfileExperience,
  ProfileEducation,
  GithubReposContainer,
  GithubTitle,
  RepoDiv,
  RepoButtons,
  StarsButton,
  WatchersButton,
  ForksButton,
} from "./ProfilePage.styles";

const ProfilePage = ({ history }) => {
  return (
    <div style={{ paddingBottom: "40px" }}>
      <BackButtonContainer>
        <button onClick={() => history.push("/developers")}>
          Back to Profiles
        </button>
      </BackButtonContainer>
      <ProfileInfoContainer>
        <ProfileImage
          src="https://s3-media0.fl.yelpcdn.com/bphoto/sHsUVypA7pDePqaxgrhDMQ/ls.jpg"
          alt="profile-pic"
        />
        <ProfileName>Jane Doe</ProfileName>
        <ProfileJobTitle>Developer at Microsoft</ProfileJobTitle>
        <ProfileLocation>Seattle, WA</ProfileLocation>
        <SocialDiv>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </SocialDiv>
      </ProfileInfoContainer>
      <ProfileBioContainer>
        <h2>Jane's Bio</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>
        <hr />
        <h2>Skill Set</h2>
        <SkillsContainer>
          <ul>
            <li>
              <i className="fas fa-check"></i> HTML
            </li>
            <li>
              <i className="fas fa-check"></i> CSS
            </li>
            <li>
              <i className="fas fa-check"></i> Python
            </li>
          </ul>
        </SkillsContainer>
      </ProfileBioContainer>
      <ProfileExperienceContainer>
        <ProfileExperience>
          <h2>Experience</h2>
          <h3>Microsoft</h3>
          <h3>Oct 2011 - Current</h3>
          <h3>Position: Senior Developer</h3>
          <h3>
            Description:
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </h3>
        </ProfileExperience>
        <ProfileEducation>
          <h2>Education</h2>
          <h3>University of Washington</h3>
          <h3>Sep 2000 - June 2005</h3>
          <h3>
            Degree: <p>Masters</p>
          </h3>
          <h3>Field of Study: Computer Science</h3>
          <h3>
            Description:{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </h3>
        </ProfileEducation>
      </ProfileExperienceContainer>
      <GithubTitle>Github Repos</GithubTitle>
      <GithubReposContainer>
        <RepoDiv>
          <h2>Repo One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </RepoDiv>
        <RepoButtons>
          <StarsButton>Stars: 44</StarsButton>
          <WatchersButton>Watchers: 21</WatchersButton>
          <ForksButton>Forks: 25</ForksButton>
        </RepoButtons>
      </GithubReposContainer>
      <GithubReposContainer>
        <RepoDiv>
          <h2>Repo Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </RepoDiv>
        <RepoButtons>
          <StarsButton>Stars: 48</StarsButton>
          <WatchersButton>Watchers: 15</WatchersButton>
          <ForksButton>Forks: 20</ForksButton>
        </RepoButtons>
      </GithubReposContainer>
    </div>
  );
};

export default ProfilePage;
