import React from "react";
import { ProfileEducation } from "./Profile.styles";

const ProfileEducationSection = ({
  education: { school, degree, fieldofstudy, to, from, current, description },
}) => {
  return (
    <ProfileEducation>
      <h2>Education</h2>
      <h3>{school}</h3>
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
  );
};

export default ProfileEducationSection;
