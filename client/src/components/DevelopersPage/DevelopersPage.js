import React from "react";
import { Link } from "react-router-dom";
import {
  DevelopersContainer,
  ProfileContainer,
  Title,
  SubHeadingContainer,
  DevImage,
  ProfileInfo,
  ProfileButton,
  ProfileExp,
} from "./DevelopersPage.styles";

const DevelopersPage = () => {
  return (
    <DevelopersContainer>
      <Title>Developers</Title>
      <SubHeadingContainer>
        <i className="fab fa-connectdevelop"></i> Browse and connect with
        developers
      </SubHeadingContainer>
      <ProfileContainer>
        <DevImage
          src="https://s3-media0.fl.yelpcdn.com/bphoto/sHsUVypA7pDePqaxgrhDMQ/ls.jpg"
          alt="profile-pic"
        />
        <ProfileInfo>
          <h3>Jane Doe</h3>
          <h3>Developer at Microsoft</h3>
          <h3>Seattle, WA</h3>
          <Link to="/profile">
            <ProfileButton>View Profile</ProfileButton>
          </Link>
        </ProfileInfo>

        <ProfileExp>
          <h3>
            <i className="fas fa-check"></i> HTML
          </h3>
          <h3>
            <i className="fas fa-check"></i> CSS
          </h3>
          <h3>
            <i className="fas fa-check"></i> Python
          </h3>
        </ProfileExp>
      </ProfileContainer>

      <ProfileContainer>
        <DevImage
          src="https://sharedteams.com/wp-content/uploads/2016/10/Headshot-Austin-no-logo.jpg"
          alt="profile-pic"
        />
        <ProfileInfo>
          <h3>Mike Smith</h3>
          <h3>Developer at Apple</h3>
          <h3>Pittsburgh, PA</h3>
          <Link to="/profile">
            <ProfileButton>View Profile</ProfileButton>
          </Link>
        </ProfileInfo>

        <ProfileExp>
          <h3>
            <i className="fas fa-check"></i> HTML
          </h3>
          <h3>
            <i className="fas fa-check"></i> CSS
          </h3>
          <h3>
            <i className="fas fa-check"></i> Python
          </h3>
          <h3>
            <i className="fas fa-check"></i> Javascript
          </h3>
        </ProfileExp>
      </ProfileContainer>
    </DevelopersContainer>
  );
};

export default DevelopersPage;
