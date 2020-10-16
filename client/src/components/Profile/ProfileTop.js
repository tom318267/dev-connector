import React from "react";
import {
  ProfileInfoContainer,
  ProfileImage,
  ProfileName,
  ProfileJobTitle,
  ProfileLocation,
  SocialDiv,
} from "./Profile.styles";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div>
      <ProfileInfoContainer>
        <ProfileImage src={avatar} alt="profile-pic" />
        <ProfileName>{name}</ProfileName>
        <ProfileJobTitle>{status}</ProfileJobTitle>
        <ProfileLocation>{location}</ProfileLocation>
        <SocialDiv>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}

          {social && social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}

          {social && social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          )}

          {social && social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          )}

          {social && social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}

          {social && social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </SocialDiv>
      </ProfileInfoContainer>
    </div>
  );
};

export default ProfileTop;
