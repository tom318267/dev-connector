import React from "react";
import { Link } from "react-router-dom";
import {
  ProfileContainer,
  ProfileInfo,
  ProfileButton,
  ProfileExp,
  DevImage,
} from "./Profiles.styles";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <ProfileContainer>
      <DevImage src={avatar} alt="profile-pic" />
      <ProfileInfo>
        <h3>{name}</h3>
        <h3>
          {status} {company && <span> at {company}</span>}
        </h3>
        <h3>{location && <span>{location}</span>}</h3>
        <Link to={`/profile/${_id}`}>
          <ProfileButton>View Profile</ProfileButton>
        </Link>
      </ProfileInfo>

      <ProfileExp>
        {skills.slice(0, 4).map((skill, index) => (
          <h3 key={index}>
            <i className="fas fa-check"></i> {skill}
          </h3>
        ))}
      </ProfileExp>
    </ProfileContainer>
  );
};

export default ProfileItem;
