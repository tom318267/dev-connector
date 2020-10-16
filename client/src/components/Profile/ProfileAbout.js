import React, { Fragment } from "react";
import { ProfileBioContainer, SkillsContainer } from "./Profile.styles";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div>
      <ProfileBioContainer>
        {bio && (
          <Fragment>
            <h2>{name.trim().split(" ")[0]}s Bio</h2>
            <h3>{bio}</h3>
          </Fragment>
        )}
        <hr />
        <h2>Skill Set</h2>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <ul key={index}>
              <li>
                <i className="fas fa-check"></i> {skill}
              </li>
            </ul>
          ))}
        </SkillsContainer>
      </ProfileBioContainer>
    </div>
  );
};

export default ProfileAbout;
